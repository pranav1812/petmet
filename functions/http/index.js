const express= require('express')
var admin= require('firebase-admin')
var crypto= require('crypto')

const Razorpay= require('razorpay')
const background= require('../background/index')
const { request } = require('http')
const { validate } = require('@material-ui/pickers')
const appRouter= express.Router()


var db= admin.firestore()

appRouter.get('/order', (req, res)=>res.send("Testing route"))
appRouter.post('/order', async(req, res)=>{
    var userPromise= db.collection('user').doc(req.body.uid).get()
    var productArray= req.body.products
    var totalPromise= background.calculateTotal({products: productArray})
    var promoPromise= db.collection('promo').doc(req.body.promo).get()
    var resolve= await Promise.all([userPromise, totalPromise, promoPromise])
    
    

    var [user, totalAndProducts, promoInfo]= resolve
    var total= totalAndProducts[0]
    var usedCode= null
    // can not reuse non-reusable promo-codes
    if(promoInfo.exists && !user.data().usedPromo.includes(promoInfo.id)){
     
        if(total > Number(promoInfo.data().discountLowerLimit)){
            var primaryDiscount= total*Number(promoInfo.data().discount)
            var maxDiscount= Number(promoInfo.data().discountUpperLimit)

            total-= Math.min(primaryDiscount, maxDiscount)
            usedCode= promoInfo.data().reUsable? null : promoInfo.id            
        }
    }
    
    var subFromWallet= 0

    if(req.body.useWallet){
        subFromWallet= Math.min(user.data().walletMoney, total*0.1)
        total-= subFromWallet       
    }

    console.log("total cost that reached= ---->>>>>>",total)
    var options = {
        amount: total*100,  
        currency: "INR",
        receipt: "order_rcptid_11"
      };

    var razorpayInstance= new Razorpay({
        key_id: "rzp_test_WXBY1uT9ZE10OW",
        key_secret: "WllqLWzS1DqbcWoQS3sXAoea",
    })
      razorpayInstance.orders.create(options, function(err, order) {
          if(err){
              res.json(options)
              console.log("<-------------yahan error hai------->")
              console.log(err)
              console.log("<----ERROR---->")
              return 
          }
        // create an order in user's order subcollection with order Id as document id and also save the order id 
        db.collection('All_Orders').doc(order.id).set({
            uid: req.body.uid,
            paymentVerified: false,
            order_id: order.id,
            products: totalAndProducts[1],
            total: total,
            mailId: req.body.mail,
            subFromWallet: subFromWallet,
            usedCode: usedCode,
            deliveryAddress: req.body.deliveryAddress,
            deliveryStatus: "payment not verified",
            cashback: Math.min(Number(promoInfo.data().walletCashbackMaxima), total*Number(Number(promoInfo.data().walletCashback)))
        }) 
        res.json(order);
      });
})

appRouter.post('/verifyPayment', async(req, res)=>{
    var shasum= crypto.createHmac('sha256', 'pEtMetR@z0RPayS3cRet6969')
    shasum.update(JSON.stringify(req.body))
    var digest= shasum.digest('hex')

    console.log(digest, req.headers['x-razorpay-signature'])
    if (digest== req.headers['x-razorpay-signature']){
        // payment successful...

        var app= await db.collection('AppointmentRecord').doc(req.body.payload.payment.entity.order_id).get()
        
        if(app.exists){
            var coll= app.data().type
            var doctorId= app.data().doctorId
            var appId= app.data().appId

            if (coll== 'vet' || type== 'groomers'){
                var ref= db.collection(coll).doc(doctorId).collection('appointments').doc(appId)
                ref.update({
                    status: "confirmed"
                })
            }
            else{
                // admin panel mai yahi se show kar denge: walkers aur trainers k liye-> user id se user fetch krna padega bass
                db.collection('AppointmentRecord').doc(req.body.payload.payment.entity.order_id).update({
                    paymentVerified: true
                })
            }    
        }
        else{
            console.log(req.body.payload.payment.entity.order_id)
            var ref= db.collection('All_Orders').doc(req.body.payload.payment.entity.order_id)
            var promise1= ref.update({
                deliveryStatus: "delivering within 2-3 working days",
                paymentVerified: true
            })
            
            var orderInfo= await ref.get()
            // var userInfo= db.collection('user').doc(orderInfo.data().uid).get()

            var userRef= db.collection('user').doc(orderInfo.data().uid).collection('orders').doc(orderInfo.data().order_id)
            var promise2= userRef.set({
                ...orderInfo.data(),
                paymentDetails: req.body,
                deliveryStatus: "delivering within 2-3 working days",
                paymentVerified: true
            })

            var userRef2= db.collection('user').doc(orderInfo.data().uid)
            var walletChange= orderInfo.data().cashback- orderInfo.data().subFromWallet
            var dateObj = new Date()
            var str= dateObj.toISOString()
            var dateStr= str.slice(0, str.length-1)+'+5:30'
            var promise3= userRef2.update({
                walletMoney: admin.firestore.FieldValue.increment(walletChange),
                usedPromo: admin.firestore.FieldValue.arrayUnion(orderInfo.data().usedCode),
                walletHistory: admin.firestore.FieldValue.arrayUnion({
                    amount: orderInfo.data().cashback,
                    type: 'add',
                    date: dateStr,
                    order_id: orderInfo.data().order_id
                },
                {
                    amount: orderInfo.data().subFromWallet,
                    type: 'sub',
                    date: dateStr,
                    order_id: orderInfo.data().order_id
                })
            })

            var resolve= await Promise.all([promise1, promise2, promise3])
            console.log(resolve)
            }

    }
    res.json({status: 'ok'})
})

appRouter.post('/servicePayment', async(req, res)=>{
    var coll= req.body.type
    var docId= req.body._id
    var appointmentPromise= db.collection(coll).doc(docId).collection('appointments').doc(req.body.appId).get()
    var vetPromise=  db.collection(coll).doc(docId).get()

    var [vet, appointment]= await Promise.all([vetPromise, appointmentPromise])

    var fee= 0
    var hostelInfo= 'NA'
    if (coll=='vet' || coll=='dogWalkerPackages'){
        fee= Number(vet.data().cost)
    }
    else if(coll=='hostels'){
        var {noOfDays, noOfHours, hostelName, pickupDate, pickupTime, returnDate, returnTime}= req.body
        fee= Number(vet.data()['costPerDay'])* Number(noOfDays) + Number(vet.data()['costPerHour'])* Number(noOfHours)
        hostelInfo= {
            name: vet.data().hostelName|| hostelName,
            pickupDate: pickupDate,
            pickupTime: pickupTime,
            returnDate: returnDate,
            returnTime: returnTime
        }
    }
    else if(coll=='trainerPackages'){
        //var pack= await db.collection('trainers').doc(docId).collection('packages').doc(req.body.packageId).get()
        // if(pack.exists){
        //     fee= pack.data()[req.body.mode]
        // }
        fee= Number(vet.data()[req.body.mode])
    }
    else{
        try {
            vet.data().packages.forEach(pack=>{
                if(pack.packageName== appointment.data().packageName){
                    fee= appointment.data().mode=='HomeVisit' ||  appointment.data().mode=='Home Visit'? pack.homeVisitCharges + pack.cost : pack.cost
                }
            })
        } catch (error) {
            console.error(error, "package cost laane mai error aaya")
        }
        
    }
    

    var options = {
        amount: Number(fee)*100,  
        currency: "INR",
        receipt: "order_rcptid_11"
      };

    var razorpayInstance= new Razorpay({
        key_id: "rzp_test_WXBY1uT9ZE10OW",
        key_secret: "WllqLWzS1DqbcWoQS3sXAoea",
    })
    razorpayInstance.orders.create(options, function(err, order) {
          if(err){
              res.json(options)
              console.log("<-------------yahan error hai------->")
              console.log(err)
              console.log("<----ERROR---->")
              return 
          }
        db.collection('AppointmentRecord').doc(order.id).set({
            type: coll,
            doctorId: req.body._id,
            appId: req.body.appId,
            uid: req.body.uid || 'NA',
            hostelInfo: hostelInfo
        })
        res.json(order);
      })
})

// useless ho gya
appRouter.post('/verifyServicePayment', async(req, res)=>{
    var shasum= crypto.createHmac('sha256', 'pEtMetR@z0RPayS3cRet6969')
    shasum.update(JSON.stringify(req.body))
    var digest= shasum.digest('hex')

    console.log(digest, req.headers['x-razorpay-signature'])
    if (digest== req.headers['x-razorpay-signature']){
        // payment successful...
        var app= await db.collection('AppointmentRecord').doc(req.body.payload.payment.entity.order_id).get()
        
        if(app.exists){
            var doctorId= app.data().doctorId
            var appId= app.data().appId
            var ref= db.collection('vet').doc(doctorId).collection('appointments').doc(appId)
            ref.update({
                status: "confirmed"
            })
        }
        res.json({status: 'ok'})
    }
})

module.exports= appRouter
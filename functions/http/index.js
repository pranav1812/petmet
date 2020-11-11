const express= require('express')
var admin= require('firebase-admin')
var crypto= require('crypto')

const Razorpay= require('razorpay')
const background= require('../background/index')
const appRouter= express.Router()


var db= admin.firestore()

appRouter.post('/order', async(req, res)=>{
    var total= await background.calculateTotal({products: req.body.products})

    var options = {
        amount: total*100,  
        currency: "INR",
        receipt: "order_rcptid_11"
      };

    var razorpayInstance= new Razorpay({
        key_id: "rzp_test_HpdJifpKFyBE1U",
        key_secret: "0PFGwg69u1f9cNnAYSBCkh8r",
    })
      razorpayInstance.orders.create(options, function(err, order) {
        // create an order in user's order subcollection with order Id as document id and also save the order id 
        db.collection('All_Orders').doc(order.id).set({
            uid: req.body.uid,
            paymentVerified: false,
            order_id: order.id,
            products: req.body.products,
            total: total
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
        var ref= db.collection('All_Orders').doc(req.body.payload.payment.entity.order_id)
        var promise1= ref.update({
            paymentVerified: true
        })
        var orderInfo= await ref.get()
        var userRef= db.collection('user').doc(orderInfo.data().uid).collection('orders').doc(orderInfo.data().order_id)
        var promise2= userRef.set({
            ...orderInfo.data(),
            paymentDetails: req.body,
            paymentVerified: true
        })

        var resolve= await Promise.all([promise1, promise2])
        console.log(resolve)

    }
    res.json({status: 'ok'})
})

module.exports= appRouter
var admin= require('firebase-admin')

var db= admin.firestore()

var background={};


background.setAppointentForVet=(user, docData, type)=>{
    // user parameter is an object that contains necessary info about the user
    return new Promise((resolve, reject)=>{
        var toAdd= {
            patientId: user.id,
            patientName: user.name,
            status: 'pending',
            cancelledByUser: false,
            ...docData
        }
        db.collection(type).doc(docData.doctorId).collection('appointments').doc(docData.key).set(toAdd)
          .then(doc=> resolve(doc.id))
          .catch(error=> reject(`function call rejected: ${error}`))
    }) 
}

background.setAppointentForAdmin=(user, docData, type)=>{
    // user parameter is an object that contains necessary info about the user
    return new Promise((resolve, reject)=>{
        var time= new Date()
        var toAdd= {
            type: type,
            patientId: user.id,
            patientName: user.name,
            status: 'pending',
            cancelledByUser: false,
            updateTime: time.toISOString(),
            ...docData
        }
        db.collection('Appointments').doc(docData.key).set(toAdd)
          .then(doc=> resolve(doc.id))
          .catch(error=> reject(`function call rejected: ${error}`))
    }) 
}

const calculateTotal= async(orderSummary)=>{
    var totalCost=0
    var productArrayToReturn= orderSummary.products
    productPromises= []
    console.log(orderSummary.products)
    productArrayToReturn.forEach(product=>{
        var detailsPromise= db.collection('items').doc(product.category).collection('products').doc(product.productId).get()
        productPromises.push(detailsPromise)
    })
    console.log("product promises")
    console.log(productPromises)

    try{
        var resolvedPromises= await Promise.all(productPromises)
        console.log(resolvedPromises)
        resolvedPromises.forEach((doc, index)=>{
            if(doc.exists){
                totalCost+=Number(doc.data().details.cost)*orderSummary.products[index].units
                productArrayToReturn[index]['productName']= doc.data().details.name || "name unknown"
            }// orderSummary.products[index].costPerPc= doc.data().details.cost
        })
        orderSummary.total= totalCost
        console.log("total cost= ---->>>>>>",totalCost)
        var returnObj= [totalCost, productArrayToReturn]
        return returnObj
    }
    catch(err){
        console.error("some error occurred")
        console.log(err)
    }
}

// no longer used

// // background.confirmOrder= async(orderSummary, params)=>{
// //     // since we can't trust users on not tempering with the request
// //     // query to be optimized
    
// //     // var orderSummarySchema={
// //     //     checkout_details: {
// //             // "razorpay_payment_id": "pay_29QQoUBi66xm2f",
// //             // "razorpay_order_id": "order_9A33XWu170gUtm",
// //             // "razorpay_signature": "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d"
// //             // }, other things stored earlier
// //     //}

// //     /*--------------------abb iski zaroorat nahi kyuki total cost already calculate karli----------------------*/ 
    
// //     try{
// //         // comparing signatures

// //         var generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

// //         if (generated_signature == razorpay_signature) {
// //           //payment is successful
// //         }
// //         orderSummary.total= totalCost,
// //         orderSummary.user= userDetails.name

// //         return await db.collection('All_Orders').add({
// //             orderDetails: orderSummary,
// //             mailId: userDetails.mail,
// //             paid: false
// //         })
// //     }
// //     catch(err){
// //         console.error("some error occurred")
// //         console.log(err)
// //     }

// //     /*--------------------abb iski zaroorat nahi kyuki total cost already calculate karli----------------------*/
// // }

background.calculateTotal= calculateTotal
module.exports= background
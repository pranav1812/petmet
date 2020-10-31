var admin= require('firebase-admin')

var db= admin.firestore()

var background={};

background.setAppointentForVet=(user, docData)=>{
    // user parameter is an object that contains necessary info about the user
    return new Promise((resolve, reject)=>{
        db.collection('vet').doc(docData.vetId).collection('upcomingAppointments').add({
            customerId: user.id,
            customerName: user.name,
            date: docData.date,
            time: docData.time
        }).then(doc=> resolve(doc.id))
          .catch(error=> reject(`function call rejected: ${error}`))
    }) 
}

background.confirmOrder= async(orderSummary, userDetails)=>{
    // since we can't trust users on not tempering with the request
    // query to be optimized
    
    // var orderSummarySchema={products:[
    //     {
    //         category: "category name",
    //         productId: "docId in products subcollection of category",
    //         units: 20
    //     }
    // ]}

    totalCost=0

    productPromises= []
    console.log(orderSummary.products)
    orderSummary.products.forEach(product=>{
        var detailsPromise= db.collection('items').doc(product.category).collection('products').doc(product.productId).get()
        productPromises.push(detailsPromise)
    })
    console.log("product promises")
    console.log(productPromises)

    try{
        var resolvedPromises= await Promise.all(productPromises)
        console.log(resolvedPromises)
        resolvedPromises.forEach((doc, index)=>{
            totalCost+=Number(doc.data().details.cost)*orderSummary.products[index].units
            orderSummary.products[index].costPerPc= doc.data().details.cost
        })
        orderSummary.total= totalCost,
        orderSummary.user= userDetails.name

        return await db.collection('All_Orders').add({
            orderDetails: orderSummary,
            mailId: userDetails.mail,
            paid: false
        })
    }
    catch(err){
        console.error("some error occurred")
        console.log(err)
    }
}

module.exports= background
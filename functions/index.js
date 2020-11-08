const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp();

const notify= require('./notifications/index')
const background= require('./background/index')
const sendMail= require('./mail/index')


const db = admin.firestore()
// const fcm= admin.messaging()

// appointment notification 
exports.fixAppointment= functions.firestore
    .document('user/{uid}/appointments/{appId}')
    .onCreate(async(snap, context)=>{

        var usr= await db.collection('user').doc(context.params.uid).get()
        // var deviceToken= usr.deviceToken[0]
        var user= {
            name: usr.data().name,
            id: context.params.uid
        }
        var setAppointmentForVetPromise= background.setAppointentForVet(user, {...snap.data(), key: context.params.appId})
        // var notificationPromise= notify.sendAppointmentConfirmationNotification(deviceToken, snap.data())
        var sendMailPromise= sendMail.appointmentConfirmation(snap.data(), usr.data().mail )
        try{
            // var results= await Promise.all([setAppointmentForVetPromise, notificationPromise, sendMailPromise])
            var results= await Promise.all([setAppointmentForVetPromise, sendMailPromise])
            console.log(results)    
        }catch(error){
            console.log(error)
        }
        
})

exports.orderConfirmationMail= functions.firestore.document('All_Orders/{orderId}')
    .onUpdate(async(change, context)=>{
        if(change.after.data().paid){
            await sendMail.orderConfirmaion(change.after.data().orderDetails, change.after.data().mailId)
        }
})

exports.clientOrderToAllOrders= functions.firestore.document('user/{uid}/orders/{orderId}')
        .onCreate(async(snap, context)=>{
            var usr= await db.collection('user').doc(context.params.uid).get()
            var userDetails= usr.data()
            background.confirmOrder(snap.data(), userDetails)
})

// vet dwara appointment mai kiye changes clien ki collection mai
exports.appointmentStatusChangeByVet= functions.firestore.document('/vet/{vid}/appointments/{appId}')
        .onUpdate((change, context)=>{
            if(change.after.data().status != change.before.data().status){
                let clientRef= db.collection('user').doc(change.after.data().customerId)
                let docRef= clientRef.collection('appointments').doc(change.after.data().key) 
                docRef.update({
                    status: change.after.data().status
                }).then(doc=> console.log(doc.id)).catch(err=> console.log("error aa gya"))
            }
            // send the appointment status to appointments collection for vet to see
            if(change.after.data().status == 'confirmed'){
                db.collection('Appointments').add({
                    ...change.after.data(),
                    vetId: context.params.vid
                }).then(doc=> console.log(doc.id)).catch(err=> console.log("error aa gya"))
            }
        })

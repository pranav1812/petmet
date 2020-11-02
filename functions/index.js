const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp();

const notify= require('./notifications/index')
const background= require('./background/index')
const sendMail= require('./mail/index')


const db = admin.firestore()
// const fcm= admin.messaging()


exports.fixAppointment= functions.firestore
    .document('user/{uid}/upcomingAppointments/{appId}')
    .onCreate(async(snap, context)=>{

        var usr= await db.collection('user').doc(context.params.uid).get()
        var deviceToken= usr.deviceToken[0]
        var user= {
            name: usr.name,
            id: context.params.uid
        }
        var setAppointmentForVetPromise= background.setAppointentForVet(user, snap.data())
        var notificationPromise= notify.sendAppointmentConfirmationNotification(deviceToken, snap.data())
        var sendMailPromise= sendMail.appointmentConfirmation(snap.data(), usr.mail )
        try{
            var results= await Promise.all([setAppointmentForVetPromise, notificationPromise, sendMailPromise])
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
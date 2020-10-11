const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp();
const db = admin.firestore()


exports.sendAppointmentConfirmationNotification= functions.firestore
    .document('user/{uid}/upcomingAppointments/{appId}')
    .onCreate(async(snap, context)=>{
        var name= snap.data()
        await db.collection('All_Orders').add({name: name})
        console.log(context.appId)
    })


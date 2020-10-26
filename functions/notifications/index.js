var admin= require('firebase-admin')

// var db= admin.firestore()
var fcm= admin.messaging()
var notify;

// docData= snap
notify.sendAppointmentConfirmationNotification= (deviceToken, docData)=>{
    var message={
        notification:{
            title: 'appointment fixed',
            body: `your appointment with Dr. ${docData.vetName} has been fixed on ${docData.date} at ${docData.time}`
        },
        token: deviceToken
    }
    return new Promise((resolve, reject)=>{
        fcm.send(message).then((messageId)=>resolve(messageId))
        .catch((error)=>reject(`error while sending notification to ${message.token}: ${error} `))
    })
}

// ofer promotion notification

module.exports= notify


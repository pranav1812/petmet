var admin= require('firebase-admin')
var templates= require('./templates')

// var db= admin.firestore()
var fcm= admin.messaging()
var db= admin.firestore()
var notify={};

// template file
// docData= snap
notify.sendToSingleUser= (deviceToken, docData, purposeId, coll, docId)=>{
    var message= templates.generatePayload(docData, purposeId)
    message.token= deviceToken
    return new Promise((resolve, reject)=>{
        var dateObj= new Date()
        var dateStr= dateObj.toISOString()
        var p1= fcm.send(message)
        var p2= db.collection(coll).doc(docId).collection('notifications').doc(dateStr).set({message: message.notification.title})
        //fcm.send(message).then((messageId)=>resolve(messageId))
        resolve(Promise.all([p1, p2]))
        .catch((error)=>reject(`error while sending notification to ${message.token}: ${error} `))
    })
}

// ofer promotion notification

module.exports= notify


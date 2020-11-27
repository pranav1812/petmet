var admin= require('firebase-admin')
var templates= require('./templates')

// var db= admin.firestore()
var fcm= admin.messaging()
var notify={};

// template file
// docData= snap
notify.sendToSingleUser= (deviceToken, docData, purposeId)=>{
    var message= templates.generatePayload(docData, purposeId)
    message.token= deviceToken
    return new Promise((resolve, reject)=>{
        fcm.send(message).then((messageId)=>resolve(messageId))
        .catch((error)=>reject(`error while sending notification to ${message.token}: ${error} `))
    })
}

// ofer promotion notification

module.exports= notify


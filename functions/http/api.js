const express= require('express')
var crypto = require('crypto')
var admin= require('firebase-admin')

const api= express.Router()

var db= admin.firestore()
var auth= admin.auth()
const base64decode= (data)=> {
    while (data.length % 4 !== 0){
               data += '=';
         }
    data = data.replace(/-/g, '+').replace(/_/g, '/');
    return new Buffer(data, 'base64').toString('utf-8');
}

const parseSignedRequest=(signedRequest, secret)=> {
    var encoded_data = signedRequest.split('.', 2);
    // decode the data
    var sig = encoded_data[0];
    var json = base64decode(encoded_data[1]);
    var data = JSON.parse(json);
    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
        // throw Error('Unknown algorithm: ' + data.algorithm + '. Expected HMAC-SHA256');
        return false
    }
    var expected_sig = crypto.createHmac('sha256', secret).update(encoded_data[1]).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace('=', '');
    if (sig !== expected_sig) {
        // throw Error('Invalid signature: ' + sig + '. Expected ' + expected_sig);
        return false
    }
    return data;
}


// url encoded parser use krna padega
api.post('/deleteUserFbCallback',  async(req, res)=>{
    // fb_app secret= c23af1d1ceee409e22bdce08a2c19135
    console.log('signed body reveived')
    console.log(req.body.signed_request)
    console.log('signed body reveived')
    var x= parseSignedRequest(req.body.signed_request,'c23af1d1ceee409e22bdce08a2c19135')
    if (x){
        var uid= x['user_id']
        try {
            var deletePromise= auth.deleteUser(uid)
            var newRecordPromise= db.collection('deletedUser').add({
                reason: 'facebook delete callback',
                uid: uid
            })
            var [deleteUser, newRecord]= await Promise.all([deletePromise, newRecordPromise])
            var responseObj= {
                url: 'https://petmet.co.in/api/viewDeleteRequestStatus',
                confirmation_code: newRecord.id
            }
            res.status(200).json(responseObj)
            return
        } catch (error) {
            console.log(`error while deleting user ${uid}`)
            console.log(error)
            // res.status(400)
            // ----------------------------------------------------------------
            var responseObj= {
                url: 'https://petmet.co.in/api/viewDeleteRequestStatus',
                confirmation_code: 'qwerty'
            }
            res.status(200).json(responseObj)
            // ----------------------------------------------------------------
            return 
        }
        
    }else{
        console.log('farzi request')
        res.status(404)
        return
    }
})

api.get('/viewDeleteRequestStatus', async(req, res)=>{
    // var status= await db.collection('deletedUser').doc(req.params['confirmation_code']).get()
    // console.log(req.query)
    // if(status.exists){
    //     res.status(200).send('user deleted from records. You will now have to create a new account')
    // }else{
    //     res.status(400).send('user not found!!')
    // }
    res.status(200).send('account not found or deactivated by the user!!')
})

module.exports= api
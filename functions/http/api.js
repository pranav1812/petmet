const express= require('express')
var admin= require('firebase-admin')

const api= express.Router()

var db= admin.firestore()

const verifyAdmin= (req, res, next)=>{
    if(req.headers.secret==='kasamse bhaimaiHiadminhu'){
        next()
    }else{
        console.log('hack attempt')
        res.status(403).json({
            message: "forbidden"
        })
    }
    
}

api.get('/groomers', verifyAdmin, async(req, res)=>{
    res.status(200).send('hello world')
})

api.get('/adoptions', verifyAdmin, async(req, res)=>{
    
})

api.get('/trainers', verifyAdmin, async(req, res)=>{
    
})

api.get('/walkers', verifyAdmin, async(req, res)=>{
    
})

module.exports= api
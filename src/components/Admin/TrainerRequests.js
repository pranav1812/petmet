import React, {useState, useEffect} from 'react';
import TrainerCard from './TrainerCard';
import {db} from '../../firebase'

const TrainerRequests = () => {
    const [arr, setArr]= useState([])
    useEffect(()=>{
        console.log('qwerty')
        db.collection('AppointmentRecord').get().then(async(snap)=>{
            var temp=[]
            var userPromises= []
            var packagePromises= []
            snap.forEach(doc=>{
                if(doc.data().type=='trainerPackages' && doc.data().status!= 'done' && doc.data().paymentVerified)
                {
                    temp.push({
                        ...doc.data(),
                        key: doc.id
                    })
                    var userRef= db.collection('user').doc(doc.data().uid).get()
                    var packageRef= db.collection(doc.data().type).doc(doc.data().doctorId).get()
                    userPromises.push(userRef)
                    packagePromises.push(packageRef)
                }
            })
            var users= await Promise.all(userPromises)
            var packages= await Promise.all(packagePromises)
            users.forEach((user, ind)=>{
                if(user.exists){
                    temp[ind]['userInfo']= user.data()
                }else{
                    temp[ind]['userInfo']= {
                        name: "Wrong User",
                        phone: "wrong user"
                    }
                }
            })
            packages.forEach((pack, ind)=>{
                if(pack.exists){
                    temp[ind]['packInfo']= pack.data()
                }else{
                    temp[ind]['packInfo']= {
                        name: "Wrong pack",
                        phone: "wrong pack"
                    }
                }
            })
            setArr(temp)
        })
    }, [])
    return ( 
        <div>
            <div className="row">
                {arr.length? arr.map(app=>(
                    <div className="col-12 col-md-6">
                        <TrainerCard data={app} />
                    </div>
                )): null}
            </div>
        </div>
     );
}
 
export default TrainerRequests;
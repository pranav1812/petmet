import React, {useState, useEffect} from 'react';
import HostelCard from './HostelCard';
import {db} from '../../firebase'

const Hostel = () => {
    const [arr, setArr]= useState([])
    useEffect(()=>{
        
        db.collection('AppointmentRecord').get().then(async(snap)=>{
            var temp=[]
            var userPromises= []
            
            snap.forEach(doc=>{
                if(doc.data().type=='hostels' && doc.data().status!= 'done' && doc.data().paymentVerified)
                {
                    temp.push({
                        ...doc.data(),
                        key: doc.id
                    })
                    var userRef= db.collection('user').doc(doc.data().uid).get()
                    
                    userPromises.push(userRef)
                    
                }
            })
            var users= await Promise.all(userPromises)
           
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
            
            setArr(temp)
        })
    }, [])
    return ( 
        <div>
            <div className="row">
                {arr.length? arr.map(app=>(
                    <div className="col-12 col-md-6">
                        <HostelCard data={app} />
                    </div>
                )): null}
               
            </div>
        </div>
     );
}
 
export default Hostel;
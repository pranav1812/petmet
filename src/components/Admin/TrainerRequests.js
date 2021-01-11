import React, {useState, useEffect} from 'react';
import NewCard from './NewCard';
import {db} from '../../firebase'

const TrainerRequests = () => {
    const [arr, setArr]= useState([])
    useEffect(()=>{
        console.log('qwerty')
        db.collection('Appointments').where('isGroomer', '==', false).where('isTrainer', '==', true).where('status', '==', 'pending').onSnapshot(snap=>{
            var temp=[]
            snap.forEach(doc=>{
                temp.push({
                    key: doc.id,
                    vet: doc.data().doctorId,
                    customer: doc.data().patientName,
                    status: doc.data().status,
                    mode: doc.data().mode,
                    package: doc.data().packageName
                })
            })
            setArr(temp)
        })
    }, [])
    return ( 
        <div>
            <div className="row">
                {arr.length? arr.map(app=>(
                    <div className="col-12 col-md-6">
                        <NewCard data={app} />
                    </div>
                )): null}
                
                
            </div>
        </div>
     );
}
 
export default TrainerRequests;
import React, {useState, useEffect} from 'react';
import Orders from './ordersCard';
import {db} from '../../firebase'

const Orders_List = () => {
    const [orders, setOrders]= useState([])
    useEffect(()=>{
        db.collection('All_Orders').where('deliveryStatus', '==', 'pending').get().then(docs=>{
            var temp=[]
            docs.forEach(doc=>{
                console.log(doc.data().name)
                temp.push({...doc.data(), key: doc.id})
            })
            setOrders(temp)
        })
        console.log(orders)
    }, [])
    return ( 
        <>
            <div className="row">
            <div className="container">
                {
                    orders.length? orders.map(order=>(
                        <div>                           
                        <div className="col-12 col-md-6 col-lg-3">
                            <Orders data={order}  />
                        </div>
                        </div>
                    )):null
                }
                
                    
            </div>
            </div>
        </>
     );
}
 
export default Orders_List;
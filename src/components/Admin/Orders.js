import React, {useState, useEffect} from 'react';
import Orders from './ordersCard';
import {db} from '../../firebase'
// import Workbook from 'react-excel-workbook'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Orders_List = () => {
    const [orders, setOrders]= useState([])
    const setDelivered= async(key)=>{

        await db.collection('All_Orders').doc(key).update({
            deliveryStatus: 'delivered'
        })
    }
    useEffect(()=>{
        // .where('paid', '==', 'true').. add later
        db.collection('All_Orders').where('paymentVerified', '==', true).onSnapshot(docs=>{
            var temp=[]
            
            docs.forEach(doc=>{
                var productString='';
                var info= doc.data()
                if(info.deliveryStatus!='delivered'){
                    info.products.forEach(pro=>{
                        productString+= `"cat: ${pro.category}, id: ${pro.productId}, units:${pro.units}"; `
                    })
                    
                    try {
                        var {name, phone, address}= info.deliveryAddress
                    } catch (error) {
                        var name= "unknown"
                        var phone= "unknown"
                        var address= "unknown"
                        console.log("name, phone, address undefined")
                    }
                    temp.push({...info, key: doc.id, productString: productString, name: name, phone: phone, address: address})
                }
                
            })
            setOrders(temp)
        })
    }, [orders])
    return ( 
        <>  
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Products</TableCell>   
                    <TableCell>Total</TableCell>  
                    <TableCell>Address</TableCell>  
                    <TableCell>Phone</TableCell>   
                    <TableCell>Set Delivered</TableCell> 
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.length? orders.map((row) => (
                    <TableRow key={row.key}>
                    <TableCell>{row.key}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell> {row.productString} </TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell><button type= "button" onClick={()=>setDelivered(row.key)} >Set delivered</button></TableCell>
                    </TableRow>
                )): null}
                </TableBody>
            </Table>
            <hr />
        </>
     );
}
 
export default Orders_List;
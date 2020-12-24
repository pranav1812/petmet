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
    useEffect(()=>{
        // .where('paid', '==', 'true').. add later
        db.collection('All_Orders').where('paymentVerified', '==', true).onSnapshot(docs=>{
            var temp=[]
            
            docs.forEach(doc=>{
                var productString='';
                var info= doc.data()
                info.products.forEach(pro=>{
                    productString+= `"cat: ${pro.category}, id: ${pro.productId}, units:${pro.units}"; `
                })
                

                temp.push({...info, key: doc.id, productString: productString})
            })
            setOrders(temp)
        })
    }, [orders])
    return ( 
        <>  
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>order_id</TableCell>
                    <TableCell>uid</TableCell>
                    <TableCell>products</TableCell>   
                    <TableCell>total</TableCell>      
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {orders.length? orders.map((row) => (
                    <TableRow key={row.key}>
                    <TableCell>{row.key}</TableCell>
                    <TableCell>{row.uid}</TableCell>
                    <TableCell> {row.productString} </TableCell>
                    <TableCell>{row.total}</TableCell>
                    
                    </TableRow>
                )): null}
                </TableBody>
            </Table>
            <hr />
        </>
     );
}
 
export default Orders_List;
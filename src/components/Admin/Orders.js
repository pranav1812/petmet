import React, {useState, useEffect} from 'react';
import Orders from './ordersCard';
import {db} from '../../firebase'
import Workbook from 'react-excel-workbook'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Orders_List = () => {
    const [orders, setOrders]= useState([])
    useEffect(()=>{
        // .where('paid', '==', 'true').. add later
        db.collection('All_Orders').onSnapshot(docs=>{
            var temp=[]
            
            docs.forEach(doc=>{
                var productString='';
                var info= doc.data()
                console.log(info.name)
                info.products.forEach(pro=>{
                    productString+= `"cat: ${pro.category}, id: ${pro.productId}, units:${pro.units}"; `
                })
                

                temp.push({...info, key: doc.id, productString: productString})
            })
            setOrders(temp)
        })
        console.log(orders)
    }, [orders])
    return ( 
        <>  
            {/* {<div className="row text-center" style={{marginTop: '100px'}}>
                {orders.length? (
                    <Workbook filename="orders.xlsx" element={<button className="btn btn-lg btn-primary">Download as excel</button>}>
                    <Workbook.Sheet data={orders} name="Sheet 1">
                        
                        <Workbook.Column label="order_id" value="order_id"/>
                        <Workbook.Column label="uid" value="uid"/>
                        <Workbook.Column label="products" value="products"/>
                        <Workbook.Column label="total" value="total"/>
                        
                    </Workbook.Sheet>
                
                </Workbook>
                ): null}
            </div>} */}
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
            {/* {<div className="row">
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
            </div>} */}
        </>
     );
}
 
export default Orders_List;
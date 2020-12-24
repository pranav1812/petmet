import React, { Component, useState, useEffect } from 'react';
import './Admin.css';
import Product from './product';
import {db} from '../../firebase'


export default function Products(){
    const [products, setProducts]= useState([])

    const loadProducts= async(category)=>{
        var temp=[]
        var docs= await db.collection('items').doc(category).collection('products').get()
        docs.forEach(doc=>{
            temp.push(doc.data())
        })
        return temp
    }
    const fillProducts= async()=>{
        var items= await db.collection('items').get()
        var allProducts=[]
        items.forEach(cat=>{
            var catProducts= loadProducts(cat.data().type)
            allProducts.push([...catProducts])
        })
        return allProducts 
    }
    useEffect(()=>{
        db.collection('All_Products').get().then(docs=>{
            var temp=[]
            docs.forEach(doc=>temp.push(doc.data()))
            setProducts(temp)
        })
    }, [])

    return ( 
        <div className="row">
            {
                products.length? products.map(pro=>(
                        <div className="col-lg-6 col-12">
                            <Product data= {pro.details}/>
                        </div>
                ))
                : null
            }
            
            
        </div>
     );
}

import React, { useState, useEffect } from 'react';
import {Form } from 'react-bootstrap';

import {db, auth, storage} from '../../firebase'

const AddCategory = () => {
    
  const [uid, setUid]= useState(null)
  const [url, setUrl]= useState(null)
   const[cat, setCat]= useState({
       category:null
   })

   useEffect(()=>{
       auth.onAuthStateChanged(user=>{
           if(user){
               setUid(user.uid)
               db.collection('items').doc(user.uid).get()
               .then(doc=>{
                   if(!doc.exists){
                       alert("some error occured")
                   }
               })
           }
       })
   },[])

   
  const addImg=(e)=>{
    var file= e.target.files[0]
    var storageRef= storage.ref('catImages/'+file.name)
    storageRef.put(file).then(()=> {
    alert("image uploaded")
    storageRef.getDownloadURL()
        .then(url=> setUrl(url))
        .catch(err=> console.log(err))
    })
    .catch(err=> console.log(err))
  }
  
  const submit=()=>{
    var ref= db.collection('items').doc(uid)
    const {category}= cat
    ref.add({
      ...cat,
      url: url
    }).then(()=>{
      window.location.reload();
    })
    
  }


    return ( 
        <div>
            <h1 className="main-head">ADD A NEW CATEGORY</h1>
                <div className="container addProduct">
                    <Form className="addProduct_form">
                        <div className="row mb-3">
                            <Form.Label className="col-3">Image of Product</Form.Label>
                            <input onChange={addImg} className="col-7 col-sm-8 offset-sm-0 offset-1" type="file"/>
                            <img id="target"/>
                        </div>
                        <Form.Group className="row">
                            <Form.Label className="col-3">Name</Form.Label>
                            <Form.Control className="col-7 col-sm-8 offset-sm-0 offset-1" as="input" ></Form.Control>
                            onBlur={e=>{setCat({...cat, category: e.target.value})}}
                           
                        </Form.Group>
                        <button type="button"  className="offset-4 offset-sm-3 pink_btn pink_btn_form" onClick={submit}>
                            Add Category
                        </button>
                    </Form>
                </div>
        </div>
     );
}
 
export default AddCategory;
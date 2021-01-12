import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import AdoptionCard from "./AdoptionCard";

const AdoptionRequests = () => {
  const [arr, setArr]= useState(null)
  useEffect(()=>{
    var temp= []
    var ownersPromise= []
    var buyersPromise= []
    var petsPromise= []
    db.collection('adoptionRequests').get().then(async(docs)=>{
      docs.forEach(doc=>{
        if(doc.data().status!= 'done'){
        temp.push({...doc.data(), key: doc.id})
        var ownerPromise= db.collection('user').doc(doc.data().ownerId).get()
        var buyerPromise= db.collection('user').doc(doc.data().buyerId).get()
        var petPromise= db.collection('user').doc(doc.data().ownerId).collection('adoptPets').doc(doc.data().petId).get()
        ownersPromise.push(ownerPromise)
        buyersPromise.push(buyerPromise)
        petsPromise.push(petPromise)
      }
    })

      var owners= await Promise.all(ownersPromise)
      var buyers= await Promise.all(buyersPromise)
      var pets= await Promise.all(petsPromise)
      owners.forEach((obj, ind)=>{
        if(obj.exists){
          temp[ind]['ownerInfo']= obj.data()
        }else{
          temp[ind]['ownerInfo']= {
            name: "wrong data",
            phone: "wrong data",
            address: "wrong data"
          }
        }
      })

      buyers.forEach((obj, ind)=>{
        if(obj.exists){
          temp[ind]['buyerInfo']= obj.data()
        }else{
          temp[ind]['buyerInfo']= {
            name: "wrong data",
            phone: "wrong data",
            address: "wrong data"
          }
        }
      })

      pets.forEach((obj, ind)=>{
        if(obj.exists){
          temp[ind]['petInfo']= obj.data()
        }else{
          temp[ind]['petInfo']= {
            name: "wrong data",
            breed: "wrong data",
            gender: "wrong data"
          }
        }
      })
      console.log(temp)
      setArr(temp)
      
    })
  }, [])
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6">
          {
            arr? arr.map(obj=> (
              <div>
                <AdoptionCard data= {obj} />
              </div>
            )): null
          }
          
        </div>
      </div>
    </div>
  );
};
export default AdoptionRequests;

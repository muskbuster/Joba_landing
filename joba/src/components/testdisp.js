import React from 'react';
import Info from '/workspace/init/joba/src/components/info.js';
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";

export default function tesTer(){

    db.collection("Waitlist")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const dat=doc.data();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    return(
        <div style={{margin:'40px'}} >
     <h1 style={{color:'green'}}> Geeks For Geeks </h1>
      
 
<p> Mapping Data to component in React js. </p>
 
 
     {databoy.map((e)=>{
       return (
       <Info name={e.name} rollNo={e.rollNo}/>
     );})}
    </div>
    )
}
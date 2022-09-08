import React from 'react';
import { useForm } from 'react-hook-form';
import "./projects.css";
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import { Link , useNavigate} from 'react-router-dom'
import {useState} from "react";
import hero from "/workspace/init/joba/src/hero3.png";
export default function Project() {
  const isConnected = window.walletConnection.isSignedIn();
  const wallet =`${window.accountId}`
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [invoice, setInvoice] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [dataToShow, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection(wallet).doc("records").collection("projects").doc(name)
      .set({
        name: name,
        owner: owner,
        invoice: invoice,
        status: "completed",
        role: role,
        description: description
      })
      .then(() => {
        alert("Project created press ok to proceed");
      })
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
      const data= [];
      db.collection("Waitlist")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const dat=doc.data();
                        console.log(dat);
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });

      setName();
      setOwner();
      setInvoice();
      setRole();
      setDescription();

  };

  
  return (
    <>
    <div className="header">
      create Project
    </div>
    <form onSubmit={handleSubmit} className="pnvoicebox">
      <div className="content">
      Lonkie agency 
      1901 Thornridge Cir. Shiloh, Hawaii 81063
      United States of America
      (308) 555-0121
      {/* todo gotta render these from db */}
      valentinekings@gmail.com 
      </div>
      <div className="invdetails">
      Invoice #02
      Issued on June 30,2022
      </div>
      <div className="userdetails">
        <label className="name">
        batman
        </label>
        <img className="imgholder" src={hero}/>
      </div>
      <label className='palletholder'> Project name
      <input  value={name} onChange={(e) => setName(e.target.value)} className='pallet' type="text" placeholder="Project name"  />
      </label>
      <label className='pescriptionholder'> Project Owner
      <input value={owner} onChange={(e) => setOwner(e.target.value)} type="text" className='pescription' placeholder="Project owner"  />
      </label>
      <label className='pnitholder'> 
      <label className='pmountholder'> Project Invoice
      <select value={invoice} onChange={(e) => setInvoice(e.target.value)} className='pmount' placeholder="project Invoice"  >
      <option value="">select</option>
        <option value="invoice1">invoice 1</option>
        <option value="invoice2">invoice 2</option>
        <option value="invoice3">invoice 3</option>
        </select>
      </label>
      <Link to='/invoice'>
      <label className='purrencyholder'>
        
      <button className='purrency'> create new Invoice </button>
      </label>
      </Link>
      </label>
      <label className='pizzaholder'> Role
      <input type="text" onChange={(e) => setRole(e.target.value)} value={role}   className="pizza" placeholder="Role" />
      </label>
      <label className='dataholder'>description
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='pescription' />
        </label>
      <input className=" submit" placeholder='Create project' type="submit" />
    </form>
    </>
  );
}
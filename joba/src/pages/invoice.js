
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import "./invoice.css";
import hero from "/workspace/init/joba/src/hero3.png";
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import {useState} from "react";
import { login, logout } from '/workspace/init/joba/src/utils.js';
export default function Invoice() {

  const [walletaddress, setWalletaddress] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [id, setId] = useState("");
  
  const isConnected = window.walletConnection.isSignedIn();
  const wallet =`${window.accountId}`
  const invID= id
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection(wallet).doc("invoices").collection("invoices").doc("invoice"+invID)
      .set({
        wallet: walletaddress,
        description: description,
        amount: amount,
        currency: currency,
        startdate: start,
        enddate: end,
      })
      .then(() => {
        alert("Invoice created press continue to proceed");
      })
      .catch((error) => {
        alert(error.message);
      });

    setWalletaddress("");
    setDescription("");
    setAmount("");
    setCurrency("");
    setStart("");
    setEnd("");
    setId("");

  };

  return (
    <>
    <div className="header">
      create invoice
    </div>
    <form onSubmit={handleSubmit} className="invoicebox">
      <div className="content">
      Lonkie agency 
      1901 Thornridge Cir. Shiloh, Hawaii 81063
      United States of America
      (308) 555-0121
      {/* todo gotta render these from db */}
      valentinekings@gmail.com 
      </div>
      <div className="invdetails">
      <input
        value={id}
        className="invfont"
        type="text"
        size="sm"
        placeholder="enter a number of your choice"
        onChange={(e) => setId(e.target.value)}
      />
      Issued on June 30,2022
      </div>
      <div className="userdetails">
        <label className="name">
        batman
        </label>
        <img className="imgholder" src={hero}/>
      </div>
      <label className="walletholder">
        wallet address
      <input
        className="wallet"
        value={walletaddress}
        type="text"
        placeholder="wallet address"
        onChange={(e) => setWalletaddress(e.target.value)}
      />
      </label>
      <label className="descriptionholder">
        description
      <textarea className="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label className="unitholder">
      <label className="amountholder">
        amount
      <input
        type="number"
        value={amount}
        className="amount"
        placeholder="weekly amount"

        onChange={(e) => setAmount(e.target.value)}

      />
      </label>
      <label className="currencyholder">
        invoice currency
      <select className=" currency" value={currency} onChange={(e) => setCurrency(e.target.value)} >
        <option value="">select</option>
        <option value="USD">USD</option>
        <option value=" EUR"> EUR</option>
        <option value=" GBP"> GBP</option>
      </select>
      </label>
      </label>
      <label className="strtbox">
        Start date
      <input
      className="strttm"
      value={start}
        type="datetime-local"
        placeholder="start date"
        onChange={(e) => setStart(e.target.value)}
      />
      </label>
      <label className="endbox">
        end date
      <input
      className="endtm"
      value={end}
        type="datetime-local"
        placeholder="end date"
        onChange={(e) => setEnd(e.target.value)}
      />
      </label>
     <label >
      create invoice
      <input className="submit" placeholder="Create invoice" type="submit"/>
      <Link  to="/projects"><button className="submit1"><div className="fontstyle"> continue</div> </button> </Link>
      </label>
    </form>
    </>
  );
}

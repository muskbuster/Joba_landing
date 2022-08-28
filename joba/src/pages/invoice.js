
import React from "react";
import { useForm } from "react-hook-form";
import "./invoice.css";
import hero from "/workspace/init/joba/src/hero3.png";

export default function Invoice() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
    <div className="header">
      create invoice
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="invoicebox">
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
      <label className="walletholder">
        wallet address
      <input
        className="wallet"
        type="text"
        placeholder="wallet address"
        {...register("wallet address", { required: true, pattern: /.near/i })}
      />
      </label>
      <label className="descriptionholder">
        description
      <textarea className="description"{...register("description ", {})} />
      </label>
      <label className="unitholder">
      <label className="amountholder">
        amount
      <input
        type="number"
        className="amount"
        placeholder="weekly amount"

        {...register("weekly amount", {})}

      />
      </label>
      <label className="currencyholder">
        invoice currency
      <select className=" currency" {...register("invoice currency")}>
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
        type="datetime"
        placeholder="start date"
        {...register("start date", {})}
      />
      </label>
      <label className="endbox">
        end date
      <input
      className="endtm"
        type="datetime"
        placeholder="end date"
        {...register("end date", {})}
      />
      </label>
     <label className="submit">
      create invoice
      <input type="submit"/>
      </label>
    </form>
    </>
  );
}

import React from 'react';
import { useForm } from 'react-hook-form';
import "./projects.css";
import { Link } from 'react-router-dom'
import hero from "/workspace/init/joba/src/hero3.png";
export default function Project() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <div className="header">
      create Project
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="pnvoicebox">
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
      <input className='pallet' type="text" placeholder="Project name" {...register("Project name", {})} />
      </label>
      <label className='pescriptionholder'> Project Owner
      <input type="text" className='pescription' placeholder="Project owner" {...register("Project owner", {})} />
      </label>
      <label className='pnitholder'> 
      <label className='pmountholder'> Project Invoice
      <select className='pmount' placeholder="project Invoice" {...register("project Invoice", {})} >
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
      <input type="text" className="pizza" placeholder="Role" {...register("Role", {})} />
      </label>
      <label className='dataholder'>
      <textarea className='pescription'{...register("Description", {})} />
        </label>
      <input className=" submit" placeholder='Create project' type="submit" />
    </form>
    </>
  );
}
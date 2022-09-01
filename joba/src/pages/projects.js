import React from 'react';
import { useForm } from 'react-hook-form';
import "./projects.css";
import hero from "/workspace/init/joba/src/hero3.png";
export default function Project() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
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
      <label className='walletholder'> Project name
      <input className='wallet' type="text" placeholder="Project name" {...register("Project name", {})} />
      </label>
      <label className='descriptionholder'> Project Owner
      <input type="text" className='description' placeholder="Project owner" {...register("Project owner", {})} />
      </label>
      <label className='unitholder'> 
      <label className='amountholder'> Project Invoice
      <input type="text" className='amount' placeholder="project Invoice" {...register("project Invoice", {})} />
      </label>
      <label className='currencyholder'>
      <button className='currency'> create Invoice </button>
      </label>
      </label>
      <input type="text" placeholder="Role" {...register("Role", {})} />
      <textarea {...register("Description", {})} />

      <input type="submit" />
    </form>
  );
}
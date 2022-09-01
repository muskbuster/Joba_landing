import React from 'react';
import { useForm } from 'react-hook-form';

export default function Project() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Project name" {...register("Project name", {})} />
      <input type="text" placeholder="Project owner" {...register("Project owner", {})} />
      <input type="text" placeholder="project Invoice" {...register("project Invoice", {})} />
      <input type="text" placeholder="Role" {...register("Role", {})} />
      <textarea {...register("Description", {})} />

      <input type="submit" />
    </form>
  );
}
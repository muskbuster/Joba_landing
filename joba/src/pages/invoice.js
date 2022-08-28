
import React from "react";
import { useForm } from "react-hook-form";

export default function Invoice() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        class="App"
        type="text"
        placeholder="wallet address"
        {...register("wallet address", { required: true, pattern: /.near/i })}
      />
      <textarea {...register("description ", {})} />
      <input
        type="number"
        placeholder="weekly amount"
        {...register("weekly amount", {})}
      />
      <select {...register("invoice currency")}>
        <option value="USD">USD</option>
        <option value=" EUR"> EUR</option>
        <option value=" GBP"> GBP</option>
      </select>
      <input
        type="datetime"
        placeholder="start date"
        {...register("start date", {})}
      />
      <input
        type="datetime"
        placeholder="end date"
        {...register("end date", {})}
      />

      <input type="submit" />
    </form>
  );
}

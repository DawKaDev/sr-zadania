import React from "react";
import { useForm } from "react-hook-form";

export default function FormValidHook() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isValid }, reset} = useForm({mode: 'all'});
  const styles = {
    alert: {
      boxShadow: "0 0 5px 0 red"
    }
  }
  const formSubmit = () => {
    reset();
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input style={errors.name && {...styles.alert}} id="name" {...register("name", { required: true })}/>
        {errors.name?.type === 'required' && <p>Name is required</p>}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input  style={errors.email && {...styles.alert}} id="email" type="email" {...register("email", { required: true, pattern: {
          value: /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{2,9}[\.][a-z]{2,5}/g,
          message: "Enter correct E-mail",
          }})}/>
        {errors.email?.type === 'required' && <p>E-mail is required</p>}
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="bio">Biography</label>
        <textarea style={errors.bio && {...styles.alert}} id="bio" {...register("bio", { required: true })}/>
        {errors.bio?.type === 'required' && <p>Biography is required</p>}
      </div>
      <div>
        <lbael>Gender</lbael>
        <input style={errors.gender && {...styles.alert}} type="radio" value="0" {...register("gender", { required: true })}/> Male
        <input style={errors.gender && {...styles.alert}} type="radio" value="1" {...register("gender", { required: true })}/> Female
        {errors.gender?.type === 'required' && <p>Gender is required</p>}
      </div>
      <div>
        <label htmlFor="regulations">Regulations</label>
        <input style={errors.regulations && {...styles.alert}} id="regulations" type="checkbox" {...register("regulations", { required: true })}/>
        {errors.regulations?.type === 'required' && <p>Regulations are required</p>}
      </div>
      <button type="submit" disabled={!isValid}>Send</button>
      {isSubmitSuccessful && <p>Thanks for message</p>}
    </form>
  );
}
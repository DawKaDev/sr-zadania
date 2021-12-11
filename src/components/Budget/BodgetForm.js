import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { BudgetContext } from "contexts";
import { uid } from "components/UUIDGen";
import "./styles.scss";

export default function BudgetForm({addAction}) {
  const {categories} = useContext(BudgetContext);
  const { register, handleSubmit, reset, formState: { errors, isValid }} = useForm({mode: "all"});

  const submitForm = (data) => {
    addAction({
      id: uid(),
      type: parseInt(data.type),
      name: data.name,
      sum: parseInt(data.type) ? parseInt(data.sum)*(-1) : parseInt(data.sum),
      category: parseInt(data.category)
    });
    reset();
  }
  return (
    <form className="budget form" onSubmit={handleSubmit(submitForm)}>
      <div className="form__control form__control--radio">
        <p className="control__title">Type</p>
        <label htmlFor="income">
          <input id="income" type="radio" value={0} {...register("type", { required: true })}/>
           Income
        </label>
        <label htmlFor="expense">
          <input id="expense" type="radio" value={1} {...register("type", { required: true })}/>
          Expenses
        </label>
      </div>
      <div className="form__control">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...register("name", { required: true })}/>
      </div>
      <div className="form__control">
        <label htmlFor="value">Value</label>
        <input id="value" type="number" {...register("sum", { required: true, min: 0 })}/>
      </div>
      <div className="form__control">
        <label htmlFor="category">Category</label>
        <select id="category" {...register("category", { required: true })}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={!isValid}>Add</button>
    </form>
  )
}
import React, { useImperativeHandle, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { add, update } from '../../../services/subscribers';

export const SubscribersForm = React.forwardRef(({data, ...props}, ref) => {
  const { 
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState,
  } = useForm(
    {
      mode: 'all',
      shouldFocusError: true,
      defaultValues: Object.keys(data).length ? {
        name: data.name || "",
        email: data.email || "",
      } : {}
    }
  );
  const { isValid, errors, isDirty } = formState;
  const [isSubmit, setIsSubmit] = useState(false);

  const addAction = handleSubmit(() => {add(getValues()); reset();});
  const updateAction = handleSubmit(() => update(data.id, getValues()))

  useEffect(() => {
    return setIsSubmit(true);
  },[])

  useImperativeHandle(
    ref,
    ()=>({
        add: addAction,
        update: updateAction,
        isValid: isValid,
        isSubmit,
        isDirty
    }),[isValid, isDirty]
  )

  return (
    <form ref={ref} className="form form--horizontal">
      <div className="form__control">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
        {...register("name", 
        { 
          required: true,
          onChange: (e) => setValue("name", e.target.value) 
        })}/>
        {errors && errors.name && <p className="form__error">Name is required</p>}
      </div>
      <div className="form__control">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" { 
          ...register("email",
          {
          required: true,
          onChange: (e) => setValue("email", e.target.value),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
          })
        }/>
        {errors && errors.email && <p className="form__error">{errors.email.message || "E-mail is required"}</p>}
      </div>
    </form>
  )
})

SubscribersForm.propTypes = {
  data: PropTypes.object,
  hideButtons: PropTypes.bool
}

SubscribersForm.defaultProps = {
  data: {}
}
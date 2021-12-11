import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { add, update, send } from '../../../services/campaigns';

export const CampaignsForm = React.forwardRef(({data, ...props}, ref) => {
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
      defaultValues: Object.keys(data).length ? {
        subject: data.subject || "",
        content: data.content || "",
      } : {}
    }
  );
  const { isValid, isDirty, errors } = formState;
  const [isSubmit, setIsSubmit] = useState(false);

  const addAction = handleSubmit(() => {add(getValues()); reset();});
  const sendAction = handleSubmit(() => send(data.id, getValues()));
  const updateAction = handleSubmit(() => update(data.id, getValues()))

  useImperativeHandle(
    ref,
    ()=>({
        add: addAction,
        send: sendAction,
        update: updateAction,
        isValid,
        isSubmit,
        isDirty
    }),[isValid, isDirty])

  useEffect(() => {
    return setIsSubmit(true);
  },[])

  return (
    <form ref={ref} className="form form--vertical">
      <div className="form__control">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" disabled={data.status} readOnly={data.status} {...register('subject', {  
          required: true,
          onChange: (e) => setValue("subject", e.target.value),
        })}/>
        {errors && errors.subject && <p className="form__error">Subject is required</p>}
      </div>
      <div className="form__control">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" disabled={data.status} readOnly={data.status} {...register('content', { 
          required: true,
          onChange: (e) => setValue("content", e.target.value),
        })}/>
        {errors && errors.content && <p className="form__error">Content is required</p>}
      </div>
    </form>
  )
})

CampaignsForm.propTypes = {
  data: PropTypes.object
}

CampaignsForm.defaultProps = {
  data: {}
}
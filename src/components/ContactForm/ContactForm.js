import React from 'react';
import { useForm } from 'react-hook-form';

import store from '../../redux';
import { addMessage } from 'redux/actions/ui';

export default function ContactForm() {
  const {REACT_APP_CONTACT_FORM_URL} = process.env;
  const { register, handleSubmit, setValue } = useForm();

  const hanldeFormSubmit = async (data, status = 'success') => {
    await fetch(REACT_APP_CONTACT_FORM_URL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data,
        type: status
      })
    })
      .then(res => res.json())
      .then(data => store.dispatch(addMessage({
        type: data.type,
        message: data.message
      }))
    )
  }

  return (
    <form className='form' onSubmit={handleSubmit((data) => hanldeFormSubmit(data))}>
      <div className='form__control'>
        <label htmlFor='name'>Name</label>
        <input type='text' {...register('name', {
          onChange: (e) => setValue('name', e.target.value)
        })}/>
      </div>
      <div className='form__control'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' {...register('email', {
          onChange: (e) => setValue('email', e.target.value)
        })}/>
      </div>
      <div className='form__control'>
        <button type='button' onClick={handleSubmit((data)=>hanldeFormSubmit(data, 'error'))}>error Submit</button>
        <button type='submit'>success Submit</button>
      </div>
    </form>
  )
}
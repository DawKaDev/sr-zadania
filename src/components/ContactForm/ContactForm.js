import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm(props) {
  const { addMessage } = props;
  const { REACT_APP_CONTACT_FORM_URL } = process.env;
  const { register, handleSubmit, setValue } = useForm();

  const hanldeFormSubmit = async (data) => {
    await fetch(REACT_APP_CONTACT_FORM_URL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data
      })
    })
      .then(res => res.json())
      .then(data => addMessage({
        type: data.type,
        message: data.message
      })
    )
  }

  return (
    <form className='form' onSubmit={handleSubmit(hanldeFormSubmit)}>
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
        <button type='submit'>Send</button>
      </div>
    </form>
  )
}
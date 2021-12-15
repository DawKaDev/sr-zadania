import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AccessContext } from '../../contexts';

export default function LoginForm() {
  const { logIn } = useContext(AccessContext);
  const { REACT_APP_ACCESS_PASSWORD } = process.env;
  const {
    register,
    handleSubmit,
    setValue,
    formState : { errors }
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  const handleFormSubmit = () => {
      logIn();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='form form--vertical'>
      <div className='form__control'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' {...register('password', {
          required: true,
          onChange: (e) => setValue('password', e.target.value),
          validate: (value) => value === REACT_APP_ACCESS_PASSWORD
          })}/>
          {errors && errors.password && <p className='form__error'>Invalid password</p>}
      </div>
      <div className='form__control'>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}
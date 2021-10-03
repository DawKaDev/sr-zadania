import React, { useState, useEffect, useRef } from "react";

const styles = {
  alert: {
    borderBottom: "1px solid red"
  }
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  const handleChange = (e) => {
    if(e.target.type === "checkbox") {
      setValue(!value);
    } else {
    setValue(e.target.value);
    }
  }

  const reset = () => {
    setValue(initValue);
  }

  return [
    value,
    handleChange,
    reset
  ]
}

function FormValid() {
  const [name, handleNameChange, resetName] = useInput("");
  const [email, handleEmailChange, resetEmail] = useInput("");
  const [bio, handleBioChange, resetBio] = useInput("");
  const [gender, handleGenderChange, resetGender] = useInput("");
  const [accept, handleAcceptedChange, resetAccept] = useInput(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const myForm = useRef();

  useEffect(()=> {
    const form = myForm.current;
    let newTouched = {};
    const makeTouched = element => newTouched = {...newTouched, [element.name]: false};
    for(let i = 0; i < form.elements.length; i++){
      if(form.elements[i].required){
        makeTouched(form.elements[i]);
      }
    }
    setTouched({...newTouched});
  },[]);

  const resetForm = () => {
    resetName();
    resetEmail();
    resetBio();
    resetGender();
    resetAccept();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    resetForm();
  }

  const fieldValid = e => {
    const field = e.target;
    const fieldName = field.name;
    const {[fieldName]: touch, ...other} = touched;
    setTouched({...other});

    if(field.type === 'text' || field.type === 'textarea') {
      if((!field.value || field.value === "") & field.required) {
        return setErrors({
          ...errors,
          [fieldName]: `Field "${fieldName}" cant't be empty`
        })
      }
      else if((field.min || field.max)) {
        let errorMessage = '';
        if(field.value.length < field.min)
          errorMessage = ` from ${field.min}`;
        if(field.value.length > field.max)
          errorMessage = ` to ${field.max}`;
        if(errorMessage!=='') {
        return setErrors({
          ...errors,
          [fieldName]: `Field "${fieldName}" must have ${errorMessage} chars`
        })}
      }
    }
    else if (field.type === 'radio' || field.type === 'checkbox'){
      if(field.required & !field.checked) {
        return setErrors({
          ...errors,
          [fieldName]: `Field "${fieldName}" must be selected`
        })
      }
    }
    else if (field.type === 'email'){
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{2,9}[\.][a-z]{2,5}/g;
      if(!pattern.test(field.value))
      return setErrors({
        ...errors,
        [fieldName]: `Enter correct "${fieldName}"`
      })
    }
    const {[fieldName]: removed, ...rest} = errors;
    setErrors({...rest});
  }

  function isDisabled() {
    return Object.entries(touched).length > 0 || Object.entries(errors).length > 0;
  }

  return (
    <>
    <form onSubmit={handleSubmit} ref={myForm}>
        <div style={errors.name ? {...styles.alert} : {}}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" min={3} max={20} value={name} onBlur={fieldValid} onChange={handleNameChange} required/>
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div style={errors.email ? {...styles.alert} : {}}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onBlur={fieldValid} onChange={handleEmailChange}/>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div style={errors.bio ? {...styles.alert} : {}}>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" rows="4" value={bio} onBlur={fieldValid} onChange={handleBioChange} required/>
          {errors.bio && <p>{errors.bio}</p>}
        </div>
        <div style={errors.gender ? {...styles.alert} : {}}>
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value="0" onBlur={fieldValid} onChange={handleGenderChange} checked={gender==="0"} required/> Male
          <input type="radio" name="gender" value="1" onBlur={fieldValid} onChange={handleGenderChange} checked={gender==="1"} required/> Female
          {errors.gender && <p>{errors.gender}</p>}
        </div>
        <div style={errors.regulations ? {...styles.alert} : {}}>
          <label htmlFor="regulations">Regulations</label>
          <input type="checkbox" name="regulations" onBlur={fieldValid} onChange={handleAcceptedChange} checked={accept} required/>
          {errors.regulations && <p>{errors.regulations}</p>}
        </div>
        <button type="submit" disabled={isDisabled()}>Send</button>
      </form>
      {isSubmitted && <p>Thanks for sending message</p>}
    </>
  )
}

export default FormValid;
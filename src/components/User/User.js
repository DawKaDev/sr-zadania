import React from 'react';

function checkExist(field, message){
  return field ? field : message ? message : "empty";
}

function makeDate(date){
  const newDate = new Date(date);
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('en-EN', options).format(newDate);
}

export default function User({user}) {
  return (
    <div className="user">
      <div className="user__image">
        <img src={user.picture.medium} alt="User avatar"/>
      </div>
      <div className="user__name">
        <span className="first">
          First name: {user.name ? checkExist(user.name.first, "no name was given") : "empty"}
        </span>
        <span className="last">
          Last name: {user.name ? checkExist(user.name.last, "no surname was given") : "empty"}
        </span>
      </div>
      <div className="user__email">
        E-mail: {checkExist(user.email)}
      </div>
      <div className="user__address">
        <span className="address__city">City: {checkExist(user.location.city)} </span>
        <span className="address__postcode">Postcode: {checkExist(user.location.postcode)} </span>
        <span className="address__street">Street: {user.location.street.name} {user.location.street.number}</span>
      </div>
      <div className="user__register">
        <span className="register__date">{makeDate(user.registered.date)}</span>
      </div>
    </div>
  )
}
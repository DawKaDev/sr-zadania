import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from 'components/utils';

function checkExist(field, message){
  return field ? field : message ? message : "empty";
}

export default function User({user}) {
  return (
    <div className="user">
      <div className="user__image">
        <img src={user.picture.medium} alt="User avatar"/>
      </div>
      <div className="user__info">
        <div className="user__name">
          <span className="first">
            <strong>First name:</strong> {user.name ? checkExist(user.name.first, "no name was given") : "empty"}
          </span>
          <span className="last">
            <strong>Last name:</strong> {user.name ? checkExist(user.name.last, "no surname was given") : "empty"}
          </span>
        </div>
        <div className="user__email">
          <strong>E-mail:</strong> {checkExist(user.email)}
        </div>
        <div className="user__address">
          <span className="address__city">City: {checkExist(user.location.city)} </span>
          <span className="address__postcode">Postcode: {checkExist(user.location.postcode)} </span>
          <span className="address__street">Street: {user.location.street.name} {user.location.street.number}</span>
        </div>
        <div className="user__register">
          <span className="register__date">{formatDate(user.registered.date)}</span>
        </div>
        <Link className="user__button" to={{
          pathname: `/users/${user.login.uuid}`,
          state: {
            user
          }
        }}>Show profile</Link>
      </div>
    </div>
  )
}
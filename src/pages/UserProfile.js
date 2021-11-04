import React from "react";
import { useLocation } from "react-router-dom";

export default function UserProfile() {
  const location = useLocation();
  const user = location.state.user;
  return (
    <>
      <h4>User Profile</h4>
      <p><strong>First name:</strong> {user.firstName}</p>
      <p><strong>Last name:</strong> {user.lastName}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </>
  )
}
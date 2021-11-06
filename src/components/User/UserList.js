import React, { useState, useEffect } from 'react';
import User from './User';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://randomuser.me/api/?results=10")
      .then(result => result.json())
      .then(data => setUsers(data.results))
    }
    fetchData();
  },[]);

  return (
    <>
    <div className="users__box">
      {users.map(user => (
        <User key={`u-${user.login.uuid}`} user={user}/>
      ))}
    </div>
    </>
  )
}
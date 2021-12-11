import React, { useState, useEffect } from 'react';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import User from './User';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timer = null;
    const fetchData = async () => {
      await fetch("https://randomuser.me/api/?results=10")
      .then(result => result.json())
      .then(data => setUsers(data.results))
    }
    fetchData();
    timer = setTimeout(()=>{
      setIsReady(true);
    }, 2000)
    return () => clearTimeout(timer)
  },[]);

  return (
    <>
    <div className="users__box">
      {users.map(user => (
        <ReactPlaceholder key={`u-${user.login.uuid}`} style={{boxSizing: "border-box", width: "50%", padding: 15}} type="media" ready={isReady} showLoadingAnimation rows={6}>
          <User user={user}/>
        </ReactPlaceholder>
      ))}
    </div>
    </>
  )
}
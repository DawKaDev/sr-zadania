import React from 'react';

export default function Users(props) {
  const { users, fetchUsers, add } = props;
  return (
    <>
      {users.length && users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
      <button onClick={()=> fetchUsers()}>Fetch</button>
      <button onClick={() => add("Mark")}>Add new</button>
    </>
  )
}
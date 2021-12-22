import React from 'react';

export default function Users(props) {
  const { users, fetchAll, add, fetchTest} = props;

  const mockHandler = async () => {
    await fetch('/users',{
      headers: {
        'Content-Type': 'application.json'
      }
    }).then(response => response.json())
    .then(data => console.log(data))
  }
  return (
    <>
      {users.length && users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
      <button onClick={() => fetchAll()}>Fetch</button>
      <button onClick={() => add("Mark")}>Add new</button>
      <button onClick={() => mockHandler()}>Mock</button>
      <button onClick={() => fetchTest()}>Test</button>
    </>
  )
}
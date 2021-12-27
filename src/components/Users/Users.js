import React, { useEffect } from 'react';

export default function Users(props) {
  const { users, fetchUsers, remove, results, isLoading, isError } = props;

  useEffect(() => {
    if(!users.length){
      fetchUsers(results)
    }
  },[])

  return (
    <>
    {isLoading && <p>Loading...</p>}
      {users.length && users.map((user) => (
        <p key={user.index}>{user.name}</p>
      ))}
      <button onClick={() => fetchUsers(results)}>Fetch</button>
      <button onClick={() => fetchUsers()}>Add</button>
      <button onClick={() => remove()}>Clear</button>
    </>
  )
}
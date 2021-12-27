import React, { useEffect } from 'react';

export default function Users(props) {
  const { users, fetchUsers, remove, results, isLoading, isError, addMessage } = props;

  useEffect(() => {
    if(!users.length){
      fetchUsers(results)
    }
  },[])

  const handleFetchUsers = items => {
    fetchUsers(items);
    addMessage({
      type: 'success',
      message: 'Get data from api'
    })
  }

  const handleRemoveUsers = () => {
    remove();
    addMessage({
      type: 'info',
      message: "Users list is empty"
    })
  }

  return (
    <>
    {isLoading && <p>Loading...</p>}
      {users.length && users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={()=>handleFetchUsers(results)}>Fetch</button>
      <button onClick={()=>handleFetchUsers(1)}>Add</button>
      <button onClick={()=>handleRemoveUsers()}>Clear</button>
    </>
  )
}
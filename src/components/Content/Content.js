import React, { useContext } from 'react';
import { AccessContext } from 'contexts';

export default function Content() {
  const { logOut } = useContext(AccessContext);
  return (
    <>
      <h3>Welcome! You are logged in</h3>
      <button onClick={logOut}>Log out</button>
    </>
  )
}
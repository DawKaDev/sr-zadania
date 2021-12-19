import React, { useContext } from 'react';
import { UserContext } from '../../contexts';

function WithUser(Component) {
  function WithUserComponent(props) {
    const { email } = useContext(UserContext);
    return <Component email={email} {...props}></Component>
  }
  return WithUserComponent;
}

export default WithUser;
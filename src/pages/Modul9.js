import React, { useContext } from 'react';
import { AccessContext } from '../contexts';

import LoginForm from 'components/LoginForm';
import Content from 'components/Content';

export default function Modul9() {
  const context = useContext(AccessContext);
  return (
    context.isLogin 
    ? <Content/>
    : <LoginForm/>
  )
}
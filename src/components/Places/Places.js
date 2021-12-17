import React from 'react';
import WithUser from 'components/withUser/withUser';

function Places(props) {
  return (
    <div className='container places'>
      <h3>Places {props.email}</h3>
    </div>
  )
}

export default WithUser(Places);
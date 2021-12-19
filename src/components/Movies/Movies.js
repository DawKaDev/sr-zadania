import React from 'react';
import WithUser from 'hocs/withUser/withUser';

function Movies(props) {
  return (
    <div className='container movies'>
      <h3>Movies {props.email}</h3>
    </div>
  )
}

export default WithUser(Movies);
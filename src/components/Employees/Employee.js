import React from 'react';

function Employee({active, item, action}) {
  return (
      <div onClick={action} id={item.id} style={active==item.id ? {color:"red"} : {}}>
        {item.name.first} {item.name.last}
      </div>
  );
}

export default Employee;
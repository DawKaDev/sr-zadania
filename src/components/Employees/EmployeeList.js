import React from "react";
import data from "./data.json";
import Employee from "./Employee";

function EmployeeList({activeItem, action}) {
  return (
    <div>
      {data.map((employee) => (
        <Employee key={employee.id} item={employee} action={action} active={activeItem}/>
      ))}
    </div>
  )
}

export default EmployeeList;
import React, { useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "./EmployeeList";

function EmployeesBox() {
  const [employee, setEmployee] = useState({});
  const handleClick = (e) => {
    setEmployee(e.currentTarget.id);
  } 
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <EmployeeList action={handleClick} activeItem={employee}/>
      <EmployeeInfo item={employee}/>
    </div>
  )
}

export default EmployeesBox;
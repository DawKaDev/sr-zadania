import React from "react";
import data from "./data.json";

function EmployeeInfo({item}) {
  const empInfo = data.find(newItem => (newItem.id === item));
  return (
    <div style={{padding:"0 15px"}}>
      {empInfo 
      ?
      <div style={{textAlign:"left"}}> 
        <p>Age: {empInfo.age}</p>
        <p>Salary: {empInfo.salary}</p>
        <p>Worplace: {empInfo.workplace}</p>
      </div>
      : "Select employee from list"
      }
    </div>
  )
}

export default EmployeeInfo;
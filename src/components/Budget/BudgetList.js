import React from "react";
import BudgetItem from "./BudgetItem";
import "./styles.scss";

export function BudgetList({title, data, showSum, removeAction}) {
  return (
    <div>
      <h4>{title}</h4>
      <ul className="list">
    {data.map((item) => (
      <BudgetItem key={item.id} item={item} removeAction={removeAction}/>
    ))}
    </ul>
    {showSum && <ListSum data={data} field="sum"/>}
    </div>
  )
}

export function Sum(data, field){
  const sum = data.reduce(function(a, b){
    return a + b[field];
  },0);
  return sum;
}

export function ListSum({data, field}){
  const sumData = Sum(data, field);
  return (
    <p className={`sum ${sumData < 0 ? 'minus' : 'plus'}`}>
      <span className="sum__title">SUM</span>
      <span className="sum__value">${sumData}</span>
    </p>
  )
}
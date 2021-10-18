import React, { useContext } from "react";
import { BudgetContext } from "contexts";
import "./styles.scss";

export default function BudgetItem({item, removeAction}) {
  const {categories} = useContext(BudgetContext);
  return (
    <>
      <li className={`list__item color-${item.category}`}>
        <div className="content">
          <p className="name">{item.name}</p>
          <p className="category">
            {categories.find(category => category.id === item.category).name}
          </p>
        </div>
        <div className="sum">${item.sum}</div>
        <div className="actions">
          <button className="btn btn-remove" onClick={()=>removeAction(item.id)}>X</button>
        </div>
      </li>
    </>
  )
}
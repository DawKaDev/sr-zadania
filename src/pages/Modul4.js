import React, { useState, useEffect, createRef } from "react";
import BillFunc from "components/BillForm/BillFunc";
import BillClass from "components/BillForm/BillClass";
import { RefButton } from "components/Form/Button";
import FormValid from "components/FormValid/FormValid";
import FormValidHook from "components/FormValid/FormValidHook";
import Budget from "components/Budget";
import { BudgetContext } from "contexts";
import { categories as data } from "components/Budget/data.json";

function Modul4() {
  const [budget, setBudget] = useState(() => {
    const initValue = JSON.parse(localStorage.getItem("budget"));
    return initValue || [];
  });

  const addToBudget = (data) => {
    setBudget([...budget, data]);
  }

  const removeFromBudget = (id) => {
    setBudget([...budget.filter(item => item.id !== id)]);
  }

  useEffect(() => {
    localStorage.setItem("budget",JSON.stringify(budget));
  },[budget]);

  const ref = createRef();
  const handleMouseOver = () => {
    const currentButton = ref.current;
    currentButton.style.background="#f00";
    currentButton.style.color="#fff";
  }

  return (
    <div>
      <h3>Tip component (function)</h3>
      <BillFunc/>
      <h3>Tip component (class)</h3>
      <BillClass/>
      <h3>Form Valid</h3>
      <FormValid/>
      <h3>Form Valid (RHF)</h3>
      <FormValidHook/>
      <h3>Budget</h3>
      <BudgetContext.Provider value={{categories: data}}>
        <Budget.Form addAction={addToBudget}/>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
          <div style={{width: "50%"}}>
            <Budget.List 
              title="CashIn"
              data={budget.filter((item)=> item.type === 0)} 
              showSum
              removeAction={removeFromBudget}
            />
          </div>
          <div style={{width: "50%"}}>
            <Budget.List
              title="CashOut"
              data={budget.filter((item)=> item.type === 1)} 
              showSum
              removeAction={removeFromBudget}
            />
          </div> 
          <div style={{width: "100%"}}>
          <Budget.List
            title="Cash In&Out (in one list)"
            data={budget}
            removeAction={removeFromBudget}
          />
          </div>       
        </div>
        <div className="total">
          <Budget.Sum data={budget} field="sum"/>
        </div>
      </BudgetContext.Provider>
      <RefButton ref={ref} label="Label from prop" bgColor="belize hole" handleMouseOver={handleMouseOver}/>
    </div>
  )
}

export default Modul4;
import React, { useState } from "react";

function BillFunc() {
  const tips = [5, 10, 15, 20];
  const [net, setNet] = useState(0);
  const [newTip, setNewTip] = useState(tips[0]);
  const [bill, setBill] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    setNet(e.currentTarget.value);
  }

  const tipSelect = (e) => {
    setNewTip(e.currentTarget.value);
  }

  const handleSubmit = () => {
    const bill = parseFloat(net) + parseFloat(net) * parseFloat(newTip) / 100;
    setBill(parseFloat(bill + (bill*23/100)).toFixed(2));
    setIsSubmit(true);
  }

  return (
    <>
    {isSubmit
    ? <div>
      <p>Net price: ${net}</p>
      <p>tip: ${parseFloat(net) * parseFloat(newTip) / 100}</p>
      <p>total incl. Tax(23%): ${bill}</p>
    </div>
    : <form onSubmit={handleSubmit}>
      <div>
        <label>
          Net price: 
          <input type="number" value={net} name="net" onChange={handleChange}/>
        </label>
      </div>
      <div>
        <label>
          Tip: 
          <select onChange={tipSelect} value={newTip}>
            {tips.map(tip => (
              <option key={tip} value={tip}>{tip} %</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Calculate</button>
      </div>
    </form>
    }
    </>
  )
}

export default BillFunc;
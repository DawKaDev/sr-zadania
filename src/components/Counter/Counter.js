import React, { useState } from 'react';

export default function Counter({start}) {
  const [counter, setCounter] = useState(start);
  const [newCounter, setNewCounter] = useState(0);

  const handleIncreaseClick = () => {
    setCounter(counter + 1);
  }
  const handleDecreaseClick = () => {
    setCounter(counter - 1);
  }
  const handleSetCounter = () => {
    setCounter(newCounter);
  }
  const handleSetStartChange = (e) => {
    setNewCounter(e.target.value);
  }
  const handleResetCounter = () => {
    setCounter(start);
  }
  return (
    <div className='counter'>
      <button type='button' className='button counter__decrease' onClick={handleDecreaseClick}>-</button>
      <span className='counter__result'>{counter}</span>
      <button type='button' className='button counter__increase' onClick={handleIncreaseClick}>+</button>
      <input type="number" name='counter' value={newCounter} className='counter__input' onChange={handleSetStartChange}/>
      <button type='button' className='button counter__set' onClick={handleSetCounter}>Set</button>
      <button type='button' className='button counter__reset' onClick={handleResetCounter}>Reset</button>
    </div>
  )
}

Counter.defaultProps = {
  start: 0
}
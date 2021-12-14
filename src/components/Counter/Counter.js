import React, { useState } from 'react';

export default function Counter({start}) {
  const [counter, setCounter] = useState(start);
  const [newCounter, setNewCounter] = useState();

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  }
  const handleDecrementClick = () => {
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
      <button type='button' className='button counter__decrement' onClick={handleDecrementClick}>-</button>
      <span className='counter__result'>{counter}</span>
      <button type='button' className='button counter__increment' onClick={handleIncrementClick}>+</button>
      <input type="number" name='counter' className='counter__input' onChange={handleSetStartChange}/>
      <button type='button' className='button counter__set' onClick={handleSetCounter}>Set</button>
      <button type='button' className='button counter__reset' onClick={handleResetCounter}>Reset</button>
    </div>
  )
}

Counter.defaultProps = {
  start: 0
}
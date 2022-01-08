import React, { useState, useEffect } from 'react';

import Message from 'components/Message';
import useArrayPosition from 'hooks/useArrayPosition';

import './styles.scss';

export default function Notifier(props) {
  const { messages, removeItem } = props;
  const [activeItem, setActiveItem] = useState({});
  const [isFirst, isLast, position] = useArrayPosition(activeItem, messages);

  const handleClickNext = () => {
    setActiveItem(messages[position + 1]);
  }

  const handleClickPrev = () => {
    setActiveItem(messages[position - 1]);
  }

  const handleCloseAction = () => {
    removeItem(activeItem);
  }

  useEffect(() => {
    const element = messages.length !== 0 ? messages.length - 1 : 0;
    setActiveItem(messages[element] || {})
  },[messages])
  
  return (
    <>
    {messages.length > 0 &&
      <div className={`notifier notifier--${activeItem.type}`}>
        <div className='notifier__menu'>
          <button className='button notifier__button' onClick={handleClickPrev} disabled={isFirst}>{'<'}</button>
          <p className='notifier__info'>{position + 1} of {messages.length}</p>
          <button className='button notifier__button' onClick={handleClickNext} disabled={isLast}>{'>'}</button>
        </div>
        <Message data={activeItem} closeAction={handleCloseAction}/>
      </div>
    }
    </>
  )
}
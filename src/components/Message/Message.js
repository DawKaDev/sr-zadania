import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Message(props) {
  const { data, closeAction, delay } = props;
  const { type, message } = data;
  let timer = null;

  function handleAction() {
    closeAction();
  }

  useEffect(() => {
    if(delay && typeof delay === 'number'){
      timer = setTimeout(() => {
        handleAction();
      },delay);
      return () => clearTimeout(timer);
    }
  },[data]);

  return (
    <div className={`message message--${type}`}>
      <p className='message__text'>{message}</p>
      <div className='message__buttons'>
        {closeAction && typeof closeAction === 'function' &&
        <button className='button button--close' onClick={()=>handleAction()}>x</button>
        }
      </div>
    </div>
  )
}

Message.defaultProps = {
  type: 'info'
}

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  closeAction: PropTypes.func,
  delay: PropTypes.number
}

export default Message;
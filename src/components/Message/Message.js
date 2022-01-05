import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Message(props) {
  const { messages } = props;
  return (
    messages.map(({type, message}) => (
      <div className={`message message--${type}`}>
        <p className='message__text'>{message}</p>
      </div>
    ))
  )
}

Message.defaultProps = {
  type: 'info'
}

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired
}

export default Message;
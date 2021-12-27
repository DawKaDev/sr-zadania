import React from 'react';
import PropTypes from 'prop-types';

function Message({type, message}) {
  return (
    <div className={`message message--${type}`}>
      <p className='message__text'>{message}</p>
    </div>
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
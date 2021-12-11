import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function ListItem({className, children, onClick}) {
  return (
    <li onClick={onClick} className={clsx("list__item", className)}>{children}</li>
  )
}

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func
}
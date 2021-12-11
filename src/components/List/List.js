import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({type, className, children}) {
  return (
    <>
      {
        type === "unordered"
        ? <ul className={clsx("list list--unordered", className)}>{children}</ul>
        : <ol className={clsx("list list--ordered", className)}>{children}</ol>
      }
    </>
  )
}

List.Item = ListItem;

export default List;

List.propTypes = {
  type: PropTypes.oneOf(["unordered", "ordered"]),
  className: PropTypes.string,
  children: PropTypes.array
}

List.defaultProps = {
  type: "unordered"
}
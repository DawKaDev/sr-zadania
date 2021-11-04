import React from "react";

function Menu({ className, children }) {
  return (
    <ul className={`menu ${className}`}>{children}</ul>
  )
}

export default Menu;
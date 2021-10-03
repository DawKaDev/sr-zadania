import React from "react";

function MenuItem({ to, children, isActive }) {
  return (
    <li className="menu__item">
      <a href={to} style={{color: isActive ? "red" : "blue"}}>{children}</a>
    </li>
  )
}

export default MenuItem;
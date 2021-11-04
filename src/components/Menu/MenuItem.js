import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ to, children }) {
  return (
    <li className="menu__item">
      <NavLink to={to} activeClassName="active">{children}</NavLink>
    </li>
  )
}

export default MenuItem;
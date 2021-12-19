import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import Icon from "components/Icon";
import { ViewContext } from "../../contexts";

function MenuItem({ to, label, icon }) {
  const { isMobile } = useContext(ViewContext);
  return (
    <li className={clsx("menu__item", isMobile ? "menu__item--mobile" : "menu__item--desktop")}>
      <NavLink to={to} activeClassName="active">
        {
          isMobile
          ? <MobileNavItem icon={icon}/>
          : <DesktopNavItem label={label} icon={icon}/>
        }
      </NavLink>
    </li>
  )
}

export function DesktopNavItem({label, icon}) {
  return (
    <>
      <MobileNavItem icon={icon}/>
      <span>{label}</span>
    </>
  )
}

export function MobileNavItem({icon}) {
  return (
    <Icon icon={icon}/>
  )
}

export default MenuItem;

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string
}

MenuItem.defaultProps = {
  icon: "link"
}
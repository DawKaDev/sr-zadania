import React, { useRef, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "config";

library.add(fas);

export function Button({ label, bgColor = "wisteria", color = "clouds", icon, children, onClick, ...rest }) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: 0,
    padding: 15,
    margin: 15,
    cursor: "pointer"
  }
  const button = useRef();

  return (
    <button ref={button} style={style} onClick={onClick} {...rest}>
      { icon ? (<><FontAwesomeIcon icon={icon}/>{" "}</>) : "" }
      { label ? label : children }
    </button>
  )
}

export const RefButton = forwardRef(({ label, bgColor = "wisteria", color = "clouds", icon, children, onClick, handleMouseOver }, ref ) => {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: 0,
    padding: 15,
    margin: 15,
    cursor: "pointer"
  }
  return (
    <button ref={ref} style={style} onClick={onClick} onMouseOver={handleMouseOver}>
      { icon ? (<><FontAwesomeIcon icon={icon}/>{" "}</>) : "" }
      { label ? label : children }
    </button>
  )
})
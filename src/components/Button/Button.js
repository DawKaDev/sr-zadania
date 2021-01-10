import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "../../config";

function Button({ label, bgColor = "wisteria", color = "clouds", icon, children }) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: 0,
    padding: "15px",
    margin: "15px",
    cursor: "pointer"
  }
  return (
    <>
    <button style={style}>
      { icon ? (<><FontAwesomeIcon icon={icon}/>{" "}</>) : "" }
      { label ? label : children }
    </button>
    </>
  )
}

export default Button;
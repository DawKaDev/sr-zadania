import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const COLORS = {
  "green sea": "#16a085",
  "nephritis": "#27ae60",
  "belize hole": "#2980b9",
  "wisteria": "#8e44ad",
  "midnight blue": "#2c3e50",
  "clouds": "#ecf0f1"
}

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
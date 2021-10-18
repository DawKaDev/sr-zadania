import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "config";

library.add(fas);

function Button({ label, bgColor = "wisteria", color = "clouds", icon, children, onClick }) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    border: 0,
    padding: 15,
    margin: 15,
    cursor: "pointer"
  }
  const button = useRef();

  useEffect(() => {
    const currentButton = button.current;
    currentButton.style.backgroundColor="#f00";
    currentButton.style.color="#fff";
  },[])
  return (
    <>
    <button ref={button} style={style} onClick={onClick}>
      { icon ? (<><FontAwesomeIcon icon={icon}/>{" "}</>) : "" }
      { label ? label : children }
    </button>
    </>
  )
}

export default Button;
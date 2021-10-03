import React from "react";
import { COLORS } from "config";

function Input({ bgColor, color, borderSize, borderRadius, borderColor}) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    borderWidth: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor
  }

  return (
    <input type="text" style={style}/>
  );
}

export default Input;
import React from "react";
import { COLORS } from "config";

function Input({ value, bgColor, color, borderSize, borderRadius, borderColor}) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    borderWidth: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor
  }

  return (
    <input type="text" value={value} style={style}/>
  );
}

export default Input;
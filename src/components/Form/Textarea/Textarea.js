import React from "react";
import { COLORS } from "config";

function Textarea({ value, bgColor, color, borderSize, borderRadius, borderColor}) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    borderWidth: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor
  }

  return (
    <textarea value={value} style={style} readOnly/>
  );
}

export default Textarea;
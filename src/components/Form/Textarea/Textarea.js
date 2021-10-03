import React from "react";
import { COLORS } from "config";

function Textarea({ bgColor, color, borderSize, borderRadius, borderColor}) {
  const style = {
    backgroundColor: COLORS[bgColor],
    color: COLORS[color],
    borderWidth: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor
  }

  return (
    <textarea type="text" style={style}/>
  );
}

export default Textarea;
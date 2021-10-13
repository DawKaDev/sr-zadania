import React from "react";
function Uuid() {
  const uid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const char = Math.random() * 16 | 0;
    const variant = Math.floor(Math.random() * 4 + 8); // available 8,9,a,b
    let v = c === 'x' ? char : variant;
    return v.toString(16);
  })}
    return (
      <>
      {uid()}
      </>
    )
}

export default Uuid;
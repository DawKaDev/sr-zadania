import React, { useState, useEffect } from "react";

export default function FunctionTimer() {
  const [time, setTime] = useState(0);

  const updateTime = () => {
    setTime(time + 1);
  }

  useEffect(() => {
    const newTime = setTimeout(updateTime, 1000);
    return () => {clearTimeout(newTime)};
  });

  return (
    <div>(Function) You spent {time} seconds on this page</div>
  )
}
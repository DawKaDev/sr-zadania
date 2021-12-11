import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles.scss";

export default function Snackbar({children, type, id, buttons, position = "top right", animation = "slideRight", hideAction}) {
  const snackbarRef = useRef();  
  const text = `snackbar__container ${position}`;
  let timer = null;
  
  const element = () => {
    if(!document.getElementsByClassName(text)[0]){
      let t = position.split(" ");
      const el = document.createElement("div");
      el.classList.add("snackbar__container", t[0], t[1]);
      document.getElementById("modals").appendChild(el);
      return el;
    } else {
      return document.getElementsByClassName(text)[0];
    }
  }
  
  const newElement = element();

  const clearTime = (snackbar) => {
    clearTimeout(timer);
    closeAction(snackbar);
  }
  const closeAction = (snackbar) => {
      const animIn = animation + "-in";
      const animOut = animation + "-out";
      snackbar.classList.remove(animIn);
      snackbar.classList.add(animOut);
      setTimeout(()=>{
        hideAction(id);
      },1000);
  }

  useEffect(()=> {
    const snackbar = snackbarRef.current;
    timer = setTimeout(()=>{
      closeAction(snackbar);
    }, 6000);
    return () => {
      clearTimeout(timer);
      return newElement.children.length ? null : newElement.remove();
    }
  },[])

  return createPortal(
    <div className={`snackbar ${animation}-in`} ref={snackbarRef}>
      <div className={`snackbar__box ${type}`}>
        <div className="snackbar__header">
          <div className="snackbar__message">{children}</div>
          {hideAction && <button className="snackbar__button" onClick={()=>clearTime(snackbarRef.current)}>x</button>}
        </div>
        {buttons
        &&
        <div className="snackbar__buttons">
          {buttons.map(({title, action}, index) => (
            <button key={index} onClick={()=>action()}>{title}</button>
          ))}
        </div>
        }
      </div>
    </div>,
    newElement
  )
}


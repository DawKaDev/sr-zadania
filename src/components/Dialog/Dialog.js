import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.scss";

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  }

  const closeDialog = () => {
    setIsOpen(false);
  }

  return [
    isOpen,
    openDialog,
    closeDialog
  ]
}

export const Dialog = ({outsideClickAction, keyCloseAction, children}) => {
  const dialogRef = useRef();

  useEffect(() => {
    const clickOutside = e => {
      if(dialogRef.current && !dialogRef.current.contains(e.target)){
        outsideClickAction();
      }
    }

    const keyClosePress = e => {
      if(keyCloseAction.keyCode && keyCloseAction.keyCode.toString() === e.keyCode.toString()){
        const action = keyCloseAction.action;
        action();
      }
    }

    if(outsideClickAction && typeof outsideClickAction === "function"){
      document.addEventListener('mousedown', clickOutside);
    }
    if(keyCloseAction && typeof keyCloseAction === "object"){
      document.addEventListener("keydown", keyClosePress);
    }

      return () => {
        document.removeEventListener("mousedown", clickOutside);
        document.removeEventListener("keydown", keyClosePress);
      }
  },[])

  return createPortal(
    <div className="dialog__mask">
      <div className="dialog__window" ref={dialogRef}>
        {children}
      </div>
    </div>,
    document.getElementById("modals")
  )
}

Dialog.Header = ({onClose, children}) => {
  return (
    <div className="dialog__header">
      <div className="dialog__title">
        {children}
      </div>
      {onClose && <button className="dialog__close" onClick={()=>onClose()}>x</button>}
    </div>
  )
}

Dialog.Body = ({children}) => {
  return (
    <div className="dialog__body">
      {children}
    </div>
  )
}

Dialog.Footer = ({children}) => {
  return (
    <div className="dialog__footer">
      {children}
    </div>
  )
}
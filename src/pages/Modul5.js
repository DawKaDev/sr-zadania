import React, { useState } from "react";
import { Dialog, useDialog } from "components/Dialog/Dialog";
import Snackbar from "components/Snackbar/Snackbar";
import { UsersContainer } from "components/UsersContainer/UsersContainer";
import { Link } from "react-router-dom";

export default function Modul5() {
  const [isOpen, openDialog, closeDialog] = useDialog();
  const [isOpenInfo, openDialogInfo, closeDialogInfo] = useDialog();
  const [isOpenSnackbarDialog, openSnackbarDialog, closeSnackbarDialog] = useDialog();
  const [answer, setAnswer] = useState(false);

  const [showSnackbar, setShowSnackbar] = useState(true);
  const [showSnackbar1, setShowSnackbar1] = useState(false);
  const [showSnackbar2, setShowSnackbar2] = useState(false);

  const handleAccept = () => {
    setAnswer(true);
    closeDialog();
  }

  const handleAbort = () => {
    setAnswer(false);
    closeDialog();
  }

  const handleGoTo = () => {
    openSnackbarDialog();
  }

  return (
    <>
    <h3>Dialog</h3>
    <button onClick={()=>openDialog()}>Confirm dialog</button>
    <button onClick={()=>openDialogInfo()}>Simple dialog</button>
    {isOpen
    &&
    <Dialog outsideClickAction={closeDialog} keyCloseAction={{keyCode:27, action: closeDialog}}>
      <Dialog.Header onClose={closeDialog}>Confirmation</Dialog.Header>
      <Dialog.Body>Do you realy want to remove this item?</Dialog.Body>
      <Dialog.Footer>
        <button onClick={()=>handleAccept()}>Accept</button>
        <button onClick={()=>handleAbort()}>Abort</button>
        <button onClick={()=>closeDialog()}>Close</button>
      </Dialog.Footer>
    </Dialog>}
    {isOpenSnackbarDialog
    &&
    <Dialog outsideClickAction={closeSnackbarDialog} keyCloseAction={{keyCode:27, action: closeSnackbarDialog}}>
      <Dialog.Header onClose={closeSnackbarDialog}>Dialog from Snackbar</Dialog.Header>
      <Dialog.Body>Hello from Snackbar :)</Dialog.Body>
    </Dialog>}
    {isOpenInfo
    &&
    <Dialog>
      <Dialog.Header onClose={closeDialogInfo}>Information</Dialog.Header>
      <Dialog.Body>This is a information for you</Dialog.Body>
    </Dialog>}
    <p>Your answer: {answer ? "Accept" : "Abort"}</p>
    <h3>Snackbars</h3>
      {showSnackbar 
      && <Snackbar 
          type="error" 
          position="top right" 
          animation="slideRight" 
          hideAction={setShowSnackbar}
          buttons={[{
            title: "See more",
            action: handleGoTo
          }]}>
            Something going wrong!
        </Snackbar>}
      {showSnackbar1 && <Snackbar type="info" position="top left" animation="slideLeft" hideAction={setShowSnackbar1}>New information</Snackbar>}
      {showSnackbar2 && <Snackbar type="warning" position="top right" animation="slideRight" hideAction={setShowSnackbar2}>Make some action?</Snackbar>}
    
    <button onClick={setShowSnackbar}>Show alert with action</button>
    <button onClick={setShowSnackbar1}>Show info</button>
    <button onClick={setShowSnackbar2}>Show warning</button>
    <h3>Users</h3>
    <UsersContainer/>
    <Link to="/users">Go to users page</Link>
    </>
  )
}
import React, { useState, useEffect, useRef } from 'react';
import { UserList } from 'components/User';
import { SubscribersList, SubscribersForm, CampaignsList, CampaignsForm } from 'components/Mailer';
import { Dialog, useDialog } from 'components/Dialog/Dialog';
import Snackbar from 'components/Snackbar';
import { Button } from 'components/Form';
import { Campaigns, Subscribers, Utils } from '../services';
import { uid } from 'components/UUIDGen';
import { ACTION_TYPE, CONTEXT, INIT_PASSWORD } from '../constants';

export const Modul7 = () => {
  const [isOpenDialog, openDialog, closeDialog] = useDialog();
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [activeItem, setActiveItem] = useState({});
  const [formType, setFormType] = useState("");
  const [dataType, setDataType] = useState("");
  const [snackbars, setSnackbars] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("snackbars"));
    return initialValue || [];
  });

  const subscriberFormRef = useRef();
  const campaignFormRef = useRef();
  const passwordRef = useRef();

  const removeItem = async () => {
    const removed = await Utils.remove(dataType, activeItem.id);
    if(removed) {
      addSnackbar("Deleted successful!", "success");
      getCampaigns();
    } else {
      addSnackbar("Error: Watch consol log", "error");
    }
    setActiveItem({});
    closeDialog();
  }

  const getSubscribers = async () => {
    const newSubscribers = await Subscribers.getAll();
    setSubscribers(newSubscribers);
  }
  const getCampaigns = async () => {
    const newCampaigns = await Campaigns.getAll();
    setCampaigns(newCampaigns);
  }

  useEffect(() => {
    getSubscribers();
    getCampaigns();
  },[]);

  useEffect(() => {
    localStorage.setItem("snackbars", JSON.stringify(snackbars));
  },[snackbars]);
  
  function addSnackbar(text, type = 'success') {
    setSnackbars([...snackbars, {
      id: uid(),
      type,
      text
    }])
  }
  const handleOpenDialog = (type, context, item) => {
    setFormType(type);
    setDataType(context);
    setActiveItem(item || {});
    openDialog();
  }

  function setMessage(action) {
    let message = "";
    let infoType = "success";
    switch (action) {
      case ACTION_TYPE.ADD:
        message = `New ${dataType} added successful`;
        break;
      case ACTION_TYPE.EDIT:
        message = `${dataType} updated successful`;
        infoType = "info";
        break;
      case ACTION_TYPE.REMOVE:
        message = `${dataType} deleted successful`;
        break;
      case ACTION_TYPE.SEND:
        message = `${dataType} send successful`;
        break;    
      default:
        message = "";    }
    addSnackbar(message, infoType);
  }

  const handleDialogAction = async (action) => {
    const currentRef = dataType === CONTEXT.CAMPAIGN ? campaignFormRef.current : subscriberFormRef.current;
    if(action === ACTION_TYPE.ADD) {
      await currentRef.add();
    } else if (action === ACTION_TYPE.EDIT) {
        if(currentRef.isDirty) {
          await currentRef.update();
        }
    } else if (action === ACTION_TYPE.SEND) {
      await currentRef.send();
    }
    if(currentRef.isSubmit & currentRef.isValid){
      setMessage(action);
      closeDialog();
      dataType === CONTEXT.CAMPAIGN ? getCampaigns() : getSubscribers();
    }
  }

  const updateSnackbars = (id) => {
    setSnackbars([...JSON.parse(localStorage.getItem("snackbars")).filter(item => item.id !== id)]);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if(passwordRef.current.value === INIT_PASSWORD) {
      setIsLogged(true);
      addSnackbar("Password correct, welcome", "success");
    } else {
      addSnackbar("Nice try ;) Inwalid password", "error");
      passwordRef.current.focus();
    }
  }

  return (
    <div>
      <h3>Users List (API Random User)</h3>
      <UserList/>
      {
        snackbars.map((snackbar) => (
          <Snackbar key={`snackbar-${snackbar.id}`} type={snackbar.type} data={snackbars} position={snackbar.position} animation={snackbar.animation} id={snackbar.id} hideAction={updateSnackbars}>{snackbar.text}</Snackbar>
        ))
      }
      <h3>System do wysyłki maili</h3>
      {isLogged ?
      <div className="container mailer">
        <SubscribersList onClick={handleOpenDialog} data={subscribers}/>
        <CampaignsList onClick={handleOpenDialog} data={campaigns}/>
        <div className="row">
          <Button onClick={() => handleOpenDialog(ACTION_TYPE.ADD, CONTEXT.SUBSCRIBER)}>Add new</Button>
          <Button onClick={() => handleOpenDialog(ACTION_TYPE.ADD, CONTEXT.CAMPAIGN)}>Add new campaign</Button>
        </div>

        {isOpenDialog
        && 
        <Dialog>
          <Dialog.Header onClose={closeDialog}>
            {
              Object.keys(activeItem).length === 0
              ? `Add new ${dataType}`
              : formType === ACTION_TYPE.REMOVE
                ? `Remove ${dataType}?` 
                : `${dataType} info`
            }
          </Dialog.Header>
          <Dialog.Body>
            {
              formType === ACTION_TYPE.REMOVE 
              ? <p>Do you really wan't to delete <strong>{activeItem.subject}</strong> campaign?</p>
              : dataType === CONTEXT.SUBSCRIBER
                ? <SubscribersForm data={activeItem} ref={subscriberFormRef} hideButtons/>
                : <CampaignsForm data={activeItem} ref={campaignFormRef} hideButtons/>
            }
          </Dialog.Body>
          <Dialog.Footer>
            {
              dataType === CONTEXT.SUBSCRIBER
              &&
              <>
                {
                  Object.keys(activeItem).length === 0
                  ? <button onClick={()=>handleDialogAction(ACTION_TYPE.ADD)}>Add</button>
                  : <button type="submit" onClick={()=>handleDialogAction(ACTION_TYPE.EDIT)}>Update</button>
                }
              </>
            }
            {
              dataType === CONTEXT.CAMPAIGN
              && formType !== ACTION_TYPE.REMOVE
              &&
              <>
              {
                !activeItem.status
                &&
                <>
                  <button onClick={()=>handleDialogAction(ACTION_TYPE.SEND)}>Save & Send</button>
                  <button onClick={()=>handleDialogAction(Object.keys(activeItem).length === 0 ? ACTION_TYPE.ADD : ACTION_TYPE.EDIT)}>Save</button>
                </>
              }
              </>
            }
            {
              formType === ACTION_TYPE.REMOVE
              &&
              <button onClick={()=>removeItem()}>Yes</button>
            }
            <button type="button" onClick={closeDialog}>Cancel</button>
          </Dialog.Footer>
        </Dialog>
        }
      </div>
      :
      <div className="mailer__box">
        <div className="login__box">
          <h3>Mailer App</h3>
          <form className="form form--vertical" onSubmit={(e)=>handleLoginSubmit(e)}>
            <div className="form__control">
              <label>Password</label>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef}/>
            </div>
            <div className="form__control">
              <button type="submit" onClick={(e)=> handleLoginSubmit(e)}>Log in</button>
            </div>
          </form>
        </div>
      </div>
      }
    </div>
  )
}
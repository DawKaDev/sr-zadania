import { ADD_MESSAGE, REMOVE_MESSAGE } from "redux/types/ui";

export const addMessage = (payload) => ({type: ADD_MESSAGE, payload: payload});
export const removeMessage = (payload) => ({type: REMOVE_MESSAGE, payload: payload});
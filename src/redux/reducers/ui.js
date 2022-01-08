import { ADD_MESSAGE, REMOVE_MESSAGE } from "redux/types/ui";

const INITIAL_STATE = {
    messages: []
}

export default function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {...state, messages: [...state.messages, action.payload]};
    case REMOVE_MESSAGE:
      const newMessages = state.messages.filter(message => message !== action.payload)
      return {...state, messages: newMessages}
    default:
      return state;
  }
}
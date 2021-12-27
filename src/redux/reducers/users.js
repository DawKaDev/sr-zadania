import { ADD_USERS, REMOVE_USERS, DATA_REQUESTED, DATA_ERROR } from "../types/users";
import "../actions/users";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: [],
  config: {
    results: 10
  }
}

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USERS:
      return {...state, isLoading: false, isError: false, data: [...state.data, ...action.payload]};
    case REMOVE_USERS:
      return INITIAL_STATE;
    case DATA_REQUESTED:
      return {...state, isLoading: true, isError: false};
    case DATA_ERROR:
      return { ...state, isLoading: false, isError: true};
    default:
      return state;
  }
}
import { FETCH_USERS, ADD_USERS } from "../types/users";
import "../actions/users";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      const users = state.users;
      return [...state, {name: "Dave"}];
    case ADD_USERS:
      return [...state, {name: action.payload}];
    default:
      return state;
  }
}
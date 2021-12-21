import { createStore, combineReducers } from "redux";
import usersReducer from "./reducers/users";

const INITIAL_STORE = {
  users: [
    {name: "Frank"}
  ]
};

const reducer = combineReducers({
  users: usersReducer
})
const store = createStore(reducer, INITIAL_STORE);

export default store;
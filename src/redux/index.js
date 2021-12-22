import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";

const INITIAL_STORE = {
  users: [
    {name: "Frank"}
  ]
};

const reducer = combineReducers({
  users: usersReducer
})
const store = createStore(reducer, INITIAL_STORE, applyMiddleware(thunk));

export default store;
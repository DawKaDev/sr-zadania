import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const reducer = combineReducers({
  users: usersReducer
});

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import uiReducer from "./reducers/ui";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const reducer = combineReducers({
  users: usersReducer,
  ui: uiReducer
});

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store;
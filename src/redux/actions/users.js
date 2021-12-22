import { FETCH_USERS, ADD_USERS } from "redux/types/users";

export const fetch = () => ({type: FETCH_USERS});
export const add = (payload) => ({type: ADD_USERS, payload: payload})

export const fetchUsers = () => {
  return function(dispatch) {
    return fetch("/users")
      .then(res => console.log(res))
  }
};
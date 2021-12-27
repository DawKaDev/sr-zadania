import { ADD_USERS, REMOVE_USERS, DATA_REQUESTED, DATA_ERROR } from "redux/types/users";

export const addUsers = (payload) => ({type: ADD_USERS, payload: payload});
export const removeUsers = () => ({type: REMOVE_USERS});
const dataRequested = () => ({ type: DATA_REQUESTED});
const dataError = () => ({type: DATA_ERROR});

export const fetchUsers = (results = 1) => {
  return function(dispatch) {
    dispatch(dataRequested());
    fetch(`https://randomuser.me/api/?results=${results}`)
      .then(res => res.json())
      .then(data => {
        const newData = [];
        data.results.forEach((user) => {
          newData.push({
            id: user.login.uuid,
            name: user.name.first,
            gender: user.gender
          })
        })
        dispatch(addUsers(newData));
      })
      .catch(e => {
        dispatch(dataError());
        console.error(e);
      })
  }
};
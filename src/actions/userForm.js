import axios from 'axios';

import {fetchUsers} from './users';

export const USER_FORM_INPUT_CHANGE = 'USER_FORM_INPUT_CHANGE';
export const UPDATE_USERS_SUCCESS = 'UPDATE_USERS_SUCCESS';

export const changeUserFormInput = (name, value) => ({
  type: USER_FORM_INPUT_CHANGE,
  payload: {name, value},
});

export const updateUser = user => dispatch => {
  axios.put(`http://localhost:3001/users/${user.id}`, user).then(() => {
    dispatch({type: UPDATE_USERS_SUCCESS, payload: user});
  });
};

export const createUser = user => dispatch => {
  axios
    .post('http://localhost:3001/users', user)
    .then(() => fetchUsers()(dispatch));
};

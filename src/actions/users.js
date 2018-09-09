import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const SELECT_USER = 'SELECT_USER';

export const fetchUsers = () => dispatch => {
  axios.get('http://localhost:3001/users').then(res => {
    dispatch({type: FETCH_USERS_SUCCESS, payload: res.data});
  });
};

export const deleteUserById = id => dispatch => {
  axios.delete(`http://localhost:3001/users/${id}`).then(() => {
    dispatch({type: DELETE_USERS_SUCCESS, payload: id});
  });
};

export const selectUser = user => ({type: SELECT_USER, payload: user});

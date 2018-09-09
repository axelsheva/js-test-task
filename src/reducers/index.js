import {combineReducers} from 'redux';
import users from './users';
import userForm from './userForm';

export default combineReducers({
  users,
  userForm,
});

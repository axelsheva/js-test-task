import {SELECT_USER} from '../actions/users';
import {
  UPDATE_USERS_SUCCESS,
  USER_FORM_INPUT_CHANGE,
} from '../actions/userForm';

const initialState = {
  id: '',
  first_name: '',
  last_name: '',
  dob: '',
  location: '',
};

const userForm = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    case UPDATE_USERS_SUCCESS:
      return {...state, id: ''};
    case USER_FORM_INPUT_CHANGE:
      return {...state, [action.payload.name]: action.payload.value};
    default:
      return state;
  }
};

export default userForm;

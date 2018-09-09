import {FETCH_USERS_SUCCESS, DELETE_USERS_SUCCESS} from '../actions/users';
import {UPDATE_USERS_SUCCESS} from '../actions/userForm';

const initialState = [];

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    case DELETE_USERS_SUCCESS:
      return state.filter(user => user.id !== action.payload);
    case UPDATE_USERS_SUCCESS:
      return state.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
    default:
      return state;
  }
};

export default usersList;

import { isDefined } from 'src/utils/typeguards';
import {
  REMOVE_USER,
  SEARCH_USER,
  SELECT_USER,
  SET_LOADING_USERS,
  SET_USERS_DATA,
} from 'src/redux/actions/userActions';
import { Action, UsersState } from 'src/redux/types';

const initialState: UsersState = {
  users: [],
  loading: false,
  searchText: '',
  selectedUser: null,
};

export const usersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return { ...state, users: action.payload };
    }
    case SET_LOADING_USERS: {
      return { ...state, loading: action.payload };
    }
    case REMOVE_USER: {
      const users = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users };
    }
    case SEARCH_USER: {
      return { ...state, searchText: action.payload };
    }
    case SELECT_USER: {
      const selectedUserValue = isDefined(action.payload) ? state.users.find(({ id }) => id === action.payload) : null;
      return { ...state, selectedUser: selectedUserValue ?? null };
    }
    default:
      return state;
  }
};

import { User } from 'src/models';
import {
  REMOVE_USER,
  SEARCH_USER,
  SELECT_USER,
  SET_LOADING_USERS,
  SET_USERS_DATA,
} from 'src/redux/actions/userActions';

interface SetUsersDataAction {
  type: typeof SET_USERS_DATA;
  payload: User[];
}

interface SetLoadingUsersAction {
  type: typeof SET_LOADING_USERS;
  payload: boolean;
}

interface RemoveUserAction {
  type: typeof REMOVE_USER;
  payload: number;
}

interface SearchUserAction {
  type: typeof SEARCH_USER;
  payload: string;
}

interface SelectUserAction {
  type: typeof SELECT_USER;
  payload: number | null;
}

export type Action =
  | SetUsersDataAction
  | SetLoadingUsersAction
  | RemoveUserAction
  | SearchUserAction
  | SelectUserAction;

export interface UsersState {
  users: User[];
  loading: boolean;
  searchText: string;
  selectedUser: User | null;
}

export interface UsersResponse {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

import { User } from 'src/models';

export const FETCH_USERS = 'FETCH_USERS';
export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SET_LOADING_USERS = 'SET_LOADING_USERS';
export const SET_ERROR_ON_LOAD = 'SET_ERROR_ON_LOAD';
export const REMOVE_USER = 'REMOVE_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const SELECT_USER = 'SELECT_USER';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setUsersData = (payload: User[]) => ({
  type: SET_USERS_DATA,
  payload,
});

export const setLoadingUsers = (payload: boolean) => ({
  type: SET_LOADING_USERS,
  payload,
});

export const removeUser = (payload: number) => ({
  type: REMOVE_USER,
  payload,
});

export const searchUser = (payload: string) => ({
  type: SEARCH_USER,
  payload,
});

export const selectUser = (payload: number | null) => ({
  type: SELECT_USER,
  payload,
});

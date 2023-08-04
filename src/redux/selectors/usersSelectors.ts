import { RootState } from 'src/redux/store';

export const getUsers = (state: RootState) => state.usersReducer;

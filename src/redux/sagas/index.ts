import { all } from 'redux-saga/effects';
import { fetchUsersWatcher } from 'src/redux/sagas/users/usersSaga';

export function* rootWatcher() {
  yield all([fetchUsersWatcher()]);
}

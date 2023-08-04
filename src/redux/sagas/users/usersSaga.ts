import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_USERS, setLoadingUsers, setUsersData } from 'src/redux/actions/userActions';
import { normalizeUsers } from 'src/utils/normalizeUsers';
import { UsersResponse } from 'src/redux/types';

const FETCH_USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsersFromApi = async (): Promise<UsersResponse[]> => {
  const response = await fetch(FETCH_USERS_URL);
  return response.json();
};

function* fetchUsersWorker() {
  try {
    const usersData: UsersResponse[] = yield call(fetchUsersFromApi);
    yield put(setLoadingUsers(true));
    const normalizedUsers = normalizeUsers(usersData);
    yield put(setUsersData(normalizedUsers));
  } catch (error) {
    throw new Error(JSON.stringify(error));
  } finally {
    yield put(setLoadingUsers(false));
  }
}

export function* fetchUsersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}

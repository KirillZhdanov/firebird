import { combineReducers } from 'redux';
import { usersReducer } from 'src/redux/reducers/users/usersReducer';

const rootReducer = combineReducers({
  usersReducer,
});

export default rootReducer;

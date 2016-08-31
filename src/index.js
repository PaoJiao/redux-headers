import { combineReducers } from 'redux';
import * as cookies from './cookies';

const reducer = combineReducers({
  cookies: cookies.reducer
});

export default reducer;

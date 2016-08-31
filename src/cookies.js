/******************************************************************
 * const
 */

export const REDUX_HEADERS_COOKIES_SET_REQUEST = 'REDUX_HEADERS_COOKIES_SET_REQUEST';
export const REDUX_HEADERS_COOKIES_SET_RESPONSE = 'REDUX_HEADERS_COOKIES_SET_RESPONSE';


/******************************************************************
 * action creator
 */

export function cookiesSetRequest(cookies) {
  return {
    type: REDUX_HEADERS_COOKIES_SET_REQUEST,
    cookies
  }
}

export function cookiesSetResponse(cookies) {
  return {
    type: REDUX_HEADERS_COOKIES_SET_RESPONSE,
    cookies
  }
}

/******************************************************************
 * reducer
 */

const initialState = {
  request: "",
  response: "",
};

export function reducer(state=initialState, action) {
  switch (action.type) {
    case REDUX_HEADERS_COOKIES_SET_REQUEST:
      return object.assign({}, state, {
        request: action.cookies
      });
    case REDUX_HEADERS_COOKIES_SET_RESPONSE:
      return object.assign({}, state, {
        response: action.cookies
      });
    default:
      return state;
  }
}

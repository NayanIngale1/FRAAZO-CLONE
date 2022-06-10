import {
  LOGIN_LODING,
  LOGIN_ERROR,
  ADD_USER_DATA,
  ADD_USER_TOKEN,
  REMOVE_TOKEN,
  SET_LOGGEDIN,
} from "./action.js";
const initial = {
  loading: false,
  error: false,
  user: {},
  token: "",
  isLoggedIn: false,
};

export const userReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case LOGIN_LODING:
      return { ...state, loading: payload };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: payload };
    case ADD_USER_DATA:
      return { ...state, user: payload };
    case ADD_USER_TOKEN:
      return { ...state, token: payload.token,user:payload.user };
    case REMOVE_TOKEN:
      return { ...state, isLoggedIn: false, token: "", user: {} };
    case SET_LOGGEDIN:
      return { ...state, loading: false, isLoggedIn: payload };
    default:
      return state;
  }
};

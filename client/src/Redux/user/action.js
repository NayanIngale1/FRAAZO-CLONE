//Action type

export const LOGIN_LODING = "LOGIN_LODING";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const ADD_USER_DATA = "ADD_USER_DATA";

export const ADD_USER_TOKEN = "ADD_TOKEN";

export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const SET_LOGGEDIN = "SET_LOGGEDIN";

//action creator

export const setLoginLoading = (payload) => {
  return {
    type: LOGIN_LODING,
    payload: payload,
  };
};

export const setLoginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload: payload,
  };
};

export const setUserData = (payload) => {
  return {
    type: ADD_USER_DATA,
    payload: payload,
  };
};

export const addUserData = (payload) => {
  return {
    type: ADD_USER_TOKEN,
    payload: payload,
  };
};

export const removeToken = () => {
  return { type: REMOVE_TOKEN };
};

export const setLoggedIn = (payload) => {
  return {
    type: SET_LOGGEDIN,
    payload: payload,
  };
};

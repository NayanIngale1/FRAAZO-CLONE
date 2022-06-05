//Action type

export const LOGIN_LODING = "LOGIN_LODING";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const ADD_USER_DATA = "ADD_USER_DATA";

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

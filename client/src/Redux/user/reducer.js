const initial = {
  loading: false,
  error: false,
  user: {},
};

export const userReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case LOGIN_LODING:
      return { ...state, loading: payload };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: payload };
    case ADD_USER_DATA:
      return { ...state, loading: false, user: payload };
    case defaults:
      return state;
  }
};


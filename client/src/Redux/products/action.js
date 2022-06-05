//Action types
export const PROD_LOADING = "PROD_LOADING";

export const PROD_ERROR = "PROD_ERROR";

export const ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS";

// Action creators

export const setProdLoading = (payload) => {
  return {
    type: PROD_LOADING,
    payload: payload,
  };
};

export const setProdError = (err) => {
  return {
    type: PROD_ERROR,
    payload: err,
  };
};

export const setAllProducts = (data) => {
  return {
    type: ADD_ALL_PRODUCTS,
    payload: data,
  };
};

/// this is gonna action creator which return a function which will have access to dispath function

export const getProducts = () => (dispatch) => {
  dispatch(setProdLoading(true));

  fetch("https://fraazo-clone.herokuapp.com/fraazo")
    .then((res) => res.json())
    .then((res) => dispatch(setAllProducts(res)))
    .catch((err) => dispatch(setProdError(err)));
};

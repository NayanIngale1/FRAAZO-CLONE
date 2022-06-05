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



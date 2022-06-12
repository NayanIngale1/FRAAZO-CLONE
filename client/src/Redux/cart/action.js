//Action Type

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const INC_CART_PROD = "INC_CART_PROD";

export const DESC_CART_PROD = "DESC_CART_PROD";

export const CART_LOADING = "CART_LOADING";

export const EMPTY_CART = "EMPTY_CART"

//action creator

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: { ...payload, cart: 1 },
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload:payload
  }
}

export const incCartProd = (payload) => {
  return {
    type: INC_CART_PROD,
    payload: payload,
  };
};

export const descCartProd = (payload) => {
  return {
    type: DESC_CART_PROD,
    payload: payload,
  };
};

export const cartLoading = (payload) => {
  return {
    type: CART_LOADING,
    payload: payload,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  }
}


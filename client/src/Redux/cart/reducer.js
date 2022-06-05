import {
  ADD_TO_CART,
  CART_LOADING,
  DESC_CART_PROD,
  INC_CART_PROD,
} from "./action";

const initial = {
  cartItems: [],
  loading: false,
};

export const cartReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case CART_LOADING:
      return { ...state, loading: true };
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, payload] };
    case INC_CART_PROD:
      let data = state.cartItems.map((el) =>
        el._id === payload._id
          ? el.cart !== undefined
            ? (el.cart = el.cart + 1)
            : (el.cart = 1)
          : el
      );
      return { ...state, cartItems: data };
    case DESC_CART_PROD:
      data = state.cartItems.map((el) => {
        if (el._id == payload._id) {
          if (el.cart == 1) {
            delete el.cart;
            return null;
          } else {
            el.cart = el.cart - 1;
          }
        } else {
          return el;
        }
      });
      return { ...state, cartItems: data };
    default:
      return state;
  }
};

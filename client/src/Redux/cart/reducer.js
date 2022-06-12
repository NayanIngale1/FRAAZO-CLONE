import {
  ADD_TO_CART,
  CART_LOADING,
  DESC_CART_PROD,
  INC_CART_PROD,
  EMPTY_CART,
  REMOVE_FROM_CART
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
      let flag = false;
      let arr = state.cartItems.map((el) => {
        if (el._id === payload._id) {
          el.cart = el.cart + 1;
          flag = true;
          return el;
        } else {
          return el;
        }
      });
      if (flag) {
        return { ...state, cartItems: arr };
      }
      return { ...state, cartItems: [...state.cartItems, payload] };
      case REMOVE_FROM_CART :return {...state,cartItems:state.cartItems.filter(el=>el._id!=payload._id)}
    case INC_CART_PROD:
      let data = state.cartItems.map((el) => {
        if (el._id === payload._id) {
          if(el.cart===5){
            return el;
          }
          el.cart = el.cart + 1;
          return el;
        } else {
          return el;
        }
      });
      return { ...state, cartItems: data };
    case DESC_CART_PROD:
      let new_data = state.cartItems.map((el) => {
        if (el._id == payload._id) {
          el.cart = el.cart - 1;
          return el;
        } else {
          return el;
        }
      });
      data = new_data.filter((el) => el.cart !== 0);
      return { ...state, cartItems: data };
      case EMPTY_CART:return {...state,cartItems:[]}
    default:
      return state;
  }
};

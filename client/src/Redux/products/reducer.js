import { ADD_ALL_PRODUCTS, PROD_ERROR, PROD_LOADING } from "./action";

const initial = {
  loading: false,
  error: false,
  data: [],
};
export const productReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case PROD_LOADING:
      return { ...state, loading: payload };
    case PROD_ERROR:
      return { ...state, loading: false, error: payload };
    case ADD_ALL_PRODUCTS:
      return { ...state, loading: false, error: false, data: payload };
    default:
      return state;
  }
};

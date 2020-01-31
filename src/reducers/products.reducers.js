import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../actions/types";
import { AsyncStorage } from "react-native";

const initialState = {
  productList: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productList: state.productList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case EDIT_PRODUCT: {
        let { product } = action.data;
        let clone = JSON.parse(JSON.stringify(state.productList));
        const index = clone.findIndex((item) => item.key === product.key);
        if (index !== -1) clone[index] = product;
        return { ...state, productList: clone };
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter(item => item.key !== action.key)
      };
    default:
      return state;
  }
};

export default productReducer;

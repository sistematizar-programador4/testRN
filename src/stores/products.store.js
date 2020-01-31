import { createStore, combineReducers } from "redux";
import productReducer from "../reducers/products.reducers";

const rootReducer = combineReducers({
  productReducer: productReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
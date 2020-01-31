import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./types";

export const addProduct = product => ({
  type: ADD_PRODUCT,
  data: product
});

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  data: product
});

export const deleteProduct = key => ({
  type: DELETE_PRODUCT,
  key: key
});

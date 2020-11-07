import axios from "axios";

import {
  GETONE_PRODUCT_ATTEMPT,
  GETONE_PRODUCT_SUCCESS,
  GETONE_PRODUCT_FAILURE,
  GET_SUBCATEGORY_FAILURE,
  GET_SUBCATEGORY_ATTEMPT,
  GET_SUBCATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_ATTEMPT,
  GET_CATEGORY_SUCCESS,
} from "./actionTypes";

const getProductAttempt = (payload) => ({
  type: GETONE_PRODUCT_ATTEMPT,
  payload,
});

const getProductSuccess = (payload) => ({
  type: GETONE_PRODUCT_SUCCESS,
  payload,
});

const getProductFailure = (payload) => ({
  type: GETONE_PRODUCT_FAILURE,
  payload,
});

const getSubcategoryAttempt = (payload) => ({
  type: GET_SUBCATEGORY_ATTEMPT,
  payload,
});

const getSubcategorySuccess = (payload) => ({
  type: GET_SUBCATEGORY_SUCCESS,
  payload,
});

const getSubcategoryFailure = (payload) => ({
  type: GET_SUBCATEGORY_FAILURE,
  payload,
});

const getCategoryAttempt = (payload) => ({
  type: GET_CATEGORY_ATTEMPT,
  payload,
});

const getCategorySuccess = (payload) => ({
  type: GET_CATEGORY_SUCCESS,
  payload,
});

const getCategoryFailure = (payload) => ({
  type: GET_CATEGORY_FAILURE,
  payload,
});

export const getSingleProduct = (payload) => async (dispatch) => {
  dispatch(getProductAttempt(payload));

  var config = {
    method: "get",
    url: `http://localhost:5000/api/categories/product?_id=${payload}`,
  };
  try {
    const result = await axios(config);
    dispatch(getProductSuccess(result.data));
  } catch (err) {
    dispatch(getProductFailure(err.response.data));
  }
};
export const getSubcategoryProduct = (payload) => async (dispatch) => {
  dispatch(getSubcategoryAttempt(payload));

  var config = {
    method: "get",
    url: `http://localhost:5000/api/categories/sub-category?sub_category=${payload}`,
  };
  try {
    const result = await axios(config);
    dispatch(getSubcategorySuccess(result.data));
  } catch (err) {
    dispatch(getSubcategoryFailure(err.response.data));
  }
};

export const getCategoryProduct = (payload) => async (dispatch) => {
  dispatch(getCategoryAttempt(payload));

  var config = {
    method: "get",
    url: `http://localhost:5000/api/categories/category?category=${payload}`,
  };
  try {
    const result = await axios(config);
    dispatch(getCategorySuccess(result.data));
  } catch (err) {
    dispatch(getCategoryFailure(err.response.data));
  }
};

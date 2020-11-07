import axios from "axios";

import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";

const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginUser = (payload) => async (dispatch) => {
  dispatch(loginAttempt());
  var config = {
    method: "post",
    url: "http://localhost:5000/api/user/login",
    payload,
  };
  try {
    const result = await axios(config);
    dispatch(loginSuccess(result.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

const regAttempt = (payload) => ({
  type: REG_ATTEMPT,
  payload,
});

const regSuccess = (payload) => ({
  type: REG_SUCCESS,
  payload,
});

const regFailure = (payload) => ({
  type: REG_FAILURE,
  payload,
});

export const registerUser = (payload) => async (dispatch) => {
  dispatch(regAttempt());
  var config = {
    method: "post",
    url: "http://localhost:5000/api/user/register",
    payload,
  };
  try {
    const result = await axios(config);
    dispatch(regSuccess(result.data));
  } catch (err) {
    dispatch(regFailure(err.response.data));
  }
};

export const logout = () => ({
  type: LOGOUT,
});

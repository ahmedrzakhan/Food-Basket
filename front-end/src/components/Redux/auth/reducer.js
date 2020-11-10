import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";
import { saveUser ,saveStatus} from '../../localStorage'

const initialState = {
  loginStatus: false,
  isError: false,
  name: "",
  user_id: "",
  message: "",
  validation: "",
  userData:""
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ATTEMPT: {

      return { ...state, isLoading: true, message: "", validation: "" };
    }
    case LOGIN_SUCCESS: {
      saveStatus('status',true)
      return { ...state, isLoading: false, loginStatus: true };
    }
    case LOGIN_FAILURE: {
      const { message, validation } = payload;
      return { ...state, isLoading: false, isError: true, message, validation };
    }
    case REG_ATTEMPT: {
      return {
        ...state,
        message: "",
        validation: "",
        isError: false,
      };
    }
    case REG_SUCCESS: {
      saveUser("user", payload)
      saveStatus("status", true )
      return { ...state, loginStatus: true ,userData:payload};
    }
    case REG_FAILURE: {
      const { validation, message } = payload;

      return { ...state, isError: true, validation, message: payload };
    }
    case LOGOUT:
      saveStatus("status", false)
      return {
        ...state,
        loginStatus: false,
      };
    default:
      return state;
  }
};
export default authReducer;

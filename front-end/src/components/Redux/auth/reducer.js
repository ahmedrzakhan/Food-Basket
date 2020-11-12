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
      saveStatus("status",true)
      return { ...state, isLoading: false, loginStatus: true };
    }
    case LOGIN_FAILURE: {
      const { message, validation } = payload;
      return { ...state, isLoading: false, message, validation };
    }
    case REG_ATTEMPT: {
      return {
        ...state,
        message: "",
        validation: ""
      };
    }
    case REG_SUCCESS: {
    console.log(payload)
      saveUser("user", payload)
      saveStatus("status", true )
      return { ...state, loginStatus: true ,userData:payload};
    }
    case REG_FAILURE: {
      const { validation} = payload;

      return { ...state, validation,message: payload };
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

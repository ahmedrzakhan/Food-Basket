import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  loginStatus: false,
  isError: false,
  name: "",
  user_id: "",
  message: "",
  validation: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ATTEMPT: {
      return { ...state, isLoading: true, message: "", validation: "" };
    }
    case LOGIN_SUCCESS: {
      const { name, user_id } = payload;
      return { ...state, isLoading: false, loginStatus: true, name, user_id };
    }
    case LOGIN_FAILURE: {
      const { message, validation } = payload;
      return { ...state, isLoading: false, isError: true, message, validation };
    }
    case REG_ATTEMPT: {
      console.log(payload);
      return {
        ...state,
        message: "",
        validation: "",
        isError: false,
      };
    }
    case REG_SUCCESS: {
      return { ...state, loginStatus: true };
    }
    case REG_FAILURE: {
      const { validation, message } = payload;

      return { ...state, isError: true, validation, message: payload };
    }
    case LOGOUT:
      return {
        ...state,
        loginStatus: false,
      };
    default:
      return state;
  }
};
export default authReducer;

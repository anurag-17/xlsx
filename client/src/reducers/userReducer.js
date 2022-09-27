import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constant/userconstant";

export const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
      case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
  }
};

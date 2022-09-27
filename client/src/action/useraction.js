import {
    CLEAR_ERRORS,
  DETAIL_USER_FAIL,
  DETAIL_USER_REQUEST,
  DETAIL_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constant/userconstant";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`/api/auth/login`, {
      email,
      password,
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    console.log(data);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const loaduser = () => async (dispatch) => {
    try {
      dispatch({ type: DETAIL_USER_REQUEST });
      const { data } = await axios.get(`/api/auth/me`);
  
      dispatch({ type: DETAIL_USER_SUCCESS, payload: data.user });
  
      // console.log(data.user);
    } catch (error) {
      dispatch({ type: DETAIL_USER_FAIL });
    }
  };




//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
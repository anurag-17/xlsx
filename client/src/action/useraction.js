import {
    CLEAR_ERRORS,
  DETAIL_USER_FAIL,
  DETAIL_USER_REQUEST,
  DETAIL_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "../constant/userconstant";
import axios from "axios";
const bashurl="http://localhost:5000";
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


  export const logout = () => async (dispatch) => {
    try {
      dispatch({ type: LOGOUT_USER_REQUEST });
      await axios.get(`/api/auth/logout`);
      
      dispatch({ type: LOGOUT_USER_SUCCESS });
   
      
    } catch (error) {
      dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
    }
  };

//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
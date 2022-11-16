import { registerNewUser } from "../../utils/api";
import { baseUrl } from "../../utils/variables";


export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SECCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export const SEND_USER_DATA = 'SEND_USER_DATA';
export const SEND_USER_DATA_SUCCESS = 'SEND_USER_DATA_SUCCESS';
export const SEND_USER_DATA_FAILED = 'SEND_USER_DATA_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const SET_FORGOT_PASSWORD_STATE = 'SET_FORGOT_PASSWORD_STATE';


export function registration(email, password, name) {
  return function(dispatch) {
    dispatch({
      type: REGISTRATION
    })

    registerNewUser(baseUrl, email, name, password)
    .then((res) => {
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.accessToken })
      localStorage.setItem('refreshToken', res.refreshToken)
    })
    .catch((err) => {
      dispatch({ type: REGISTRATION_FAILED })
      console.log(err)
    })
  }

}

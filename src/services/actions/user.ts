import {
  forgotPassword,
  refreshToken,
  registerNewUser,
  resetPassword,
  updateUserData,
} from "../../utils/api";
import { baseUrl } from "../../utils/variables";
import { deleteCookie, setCookie } from "../../utils/cookie";
import { loginUser, logout, getUserData } from "../../utils/api";
import { AppDispatch, AppThunk } from "../types";

export const REGISTRATION : "REGISTRATION" = "REGISTRATION";
export const REGISTRATION_SUCCESS : "REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED : "REGISTRATION_FAILED" = "REGISTRATION_FAILED";

export const LOGIN : "LOGIN" = "LOGIN";
export const LOGIN_SUCCESS : "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED : "LOGIN_FAILED" = "LOGIN_FAILED";

export const FORGOT_PASSWORD : "FORGOT_PASSWORD" = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS : "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED : "FORGOT_PASSWORD_FAILED" = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD : "RESET_PASSWORD" = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS : "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED : "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED";

export const GET_USER_DATA : "GET_USER_DATA" = "GET_USER_DATA";
export const GET_USER_DATA_SUCCESS : "GET_USER_DATA_SUCCESS" = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILED : "GET_USER_DATA_FAILED" = "GET_USER_DATA_FAILED";

export const SEND_USER_DATA : "SEND_USER_DATA" = "SEND_USER_DATA";
export const SEND_USER_DATA_SUCCESS : "SEND_USER_DATA_SUCCESS" = "SEND_USER_DATA_SUCCESS";
export const SEND_USER_DATA_FAILED : "SEND_USER_DATA_FAILED" = "SEND_USER_DATA_FAILED";

export const LOGOUT : "LOGOUT" = "LOGOUT";
export const LOGOUT_SUCCESS : "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED : "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const REFRESH_TOKEN : "REFRESH_TOKEN" = "REFRESH_TOKEN";
export const REFRESH_TOKEN_SUCCESS : "REFRESH_TOKEN_SUCCESS" = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED : "REFRESH_TOKEN_FAILED" = "REFRESH_TOKEN_FAILED";




export const registration : AppThunk = (email : string, password : string, name : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({
      type: REGISTRATION,
    });

    registerNewUser(baseUrl, email, name, password)
      .then((res) => {
        dispatch({ type: REGISTRATION_SUCCESS, payload: res.user });
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
        dispatch({ type: LOGIN_SUCCESS, payload: res.user });
      })
      .catch((err) => {
        dispatch({ type: REGISTRATION_FAILED });
        console.log(err);
      });
  };
}

export const signIn : AppThunk = (email : string, password : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({
      type: LOGIN,
    });

    loginUser(baseUrl, email, password)
      .then((res) => {
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.user,
        });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILED });
        console.log(err.status);
      });
  }
}

export const logOut : AppThunk = (refreshToken : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: LOGOUT });

    logout(baseUrl, refreshToken)
      .then(() => {
        deleteCookie("refreshToken");
        deleteCookie("accessToken");
        dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: LOGOUT_FAILED });
        console.log(err);
      });
  }
}

export const getUser = (token : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: LOGIN });

    getUserData(baseUrl, token)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.user });
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILED });
      })
      .catch(()=> {
        refreshToken(baseUrl)
        .then((res) => {
          console.log(res)
          dispatch({ type: REFRESH_TOKEN_SUCCESS });
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
        })
      })
  }
}


export const forgotPasswords : AppThunk = (email : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: FORGOT_PASSWORD });

    forgotPassword(baseUrl, email)
      .then((res) => {
        if (res.success) {
          dispatch({ type: FORGOT_PASSWORD_SUCCESS });
        }
      })
      .catch((err) => {
        dispatch({ type: FORGOT_PASSWORD_FAILED });
        console.log(err);
      });
  }
}

export const resetPasswords : AppThunk = (password : string, token : string) => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: RESET_PASSWORD });

    resetPassword(baseUrl, password, token)
      .then((res) => {
        dispatch({ type: RESET_PASSWORD_SUCCESS });
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: RESET_PASSWORD_FAILED });
        console.log(err);
      });
  }
}

export const updateToken : AppThunk = () => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: REFRESH_TOKEN });

    refreshToken(baseUrl)
      .then((res) => {
        dispatch({ type: REFRESH_TOKEN_SUCCESS });
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: REFRESH_TOKEN_FAILED });
      });
  }
}

export const updateProfile : AppThunk = (token: string, email: string, name: string, password: string) => {
  return (dispatch : AppDispatch) => {
    dispatch({ type: SEND_USER_DATA });

    updateUserData(baseUrl, token, email, name, password)
      .then((res) => {
        dispatch({
          type: SEND_USER_DATA_SUCCESS,
          payload: res.user,
        });
      })
      .catch((err) => {
        dispatch({ type: SEND_USER_DATA_FAILED });
        console.log(err);
      });
  }
}

// export const refreshAndSend : AppThunk = (email: string, name: string, password: string) => {
//   return (dispatch : AppDispatch) => {
//     const token : string = getCookie("accessToken")!
//     getUserData(baseUrl, token)
//       .then(() => {
//         dispatch(
//           updateProfile(token, email, name, password)
//         );
//       })
//       .catch(() => {
//         refreshToken(baseUrl)
//           .then((res) => {
//             setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
//             setCookie("refreshToken", res.refreshToken);
//           })
//           .then(() => {
//             dispatch(
//               updateProfile(token, email, name, password)
//             );
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       });
//   }
// }
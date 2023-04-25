import {
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED,
    GET_USER_DATA,
    GET_USER_DATA_SUCCESS,
    GET_USER_DATA_FAILED,
    SEND_USER_DATA,
    SEND_USER_DATA_SUCCESS,
    SEND_USER_DATA_FAILED,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILED
} from '../actions/user'

export interface IRegistration {
    readonly type: typeof REGISTRATION
  }
  
  export interface IRegistrationSuccess {
    readonly type: typeof REGISTRATION_SUCCESS
    readonly payload: TUser
  }
  
  export interface IRegistrationFailed {
    readonly type: typeof REGISTRATION_FAILED
  }
  
  export interface ILogin {
    readonly type: typeof LOGIN
  }
  
  export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS
    readonly payload: TUser
  }
  
  export interface ILoginFailed {
    readonly type: typeof LOGIN_FAILED
  }
  
  export interface IForgotPassword {
    readonly type: typeof FORGOT_PASSWORD
  }
  
  export interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS
  }
  
  export interface IForgotPasswordFailed {
    readonly type: typeof FORGOT_PASSWORD_FAILED
  }
  
  export interface IResetPassword {
    readonly type: typeof RESET_PASSWORD
  }
  
  export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS
  }
  
  export interface IResetPasswordFailed {
    readonly type: typeof RESET_PASSWORD_FAILED
  }
  
  export interface IGetUserData {
    readonly type: typeof GET_USER_DATA
  }
  
  export interface IGetUserDataSuccess {
    readonly type: typeof GET_USER_DATA_SUCCESS
    readonly payload: TUser
  }
  
  export interface IGetUserDataFailed {
    readonly type: typeof GET_USER_DATA_FAILED
  }
  
  export interface ISendUserData {
    readonly type: typeof SEND_USER_DATA
  }
  
  export interface ISendUserDataSuccess {
    readonly type: typeof SEND_USER_DATA_SUCCESS
    readonly payload: TUser
  }
  
  export interface ISendUserDataFailed {
    readonly type: typeof SEND_USER_DATA_FAILED
  }
  
  export interface ILogout {
    readonly type: typeof LOGOUT
  }
  
  export interface ILogoutSuccess {
    readonly type: typeof LOGOUT_SUCCESS
  }
  
  export interface ILogoutFailed {
    readonly type: typeof LOGOUT_FAILED
  }
  
  export interface IRefreshToken {
    readonly type: typeof REFRESH_TOKEN
  }
  
  export interface IRefreshTokenSuccess {
    readonly type: typeof REFRESH_TOKEN_SUCCESS
  }
  
  export interface IRefreshTokenFailed {
    readonly type: typeof REFRESH_TOKEN_FAILED
  }

  export type TUserActions = 
    IRegistration |
    IRegistrationSuccess |
    IRegistrationFailed |
    ILogin |
    ILoginSuccess |
    ILoginFailed |
    IForgotPassword |
    IForgotPasswordSuccess |
    IForgotPasswordFailed |
    IResetPassword |
    IResetPasswordSuccess |
    IResetPasswordFailed |
    IGetUserData |
    IGetUserDataSuccess |
    IGetUserDataFailed |
    ISendUserData |
    ISendUserDataSuccess |
    ISendUserDataFailed |
    ILogout |
    ILogoutSuccess |
    ILogoutFailed |
    IRefreshToken |
    IRefreshTokenSuccess |
    IRefreshTokenFailed

    export type TUser = {
      email: string,
      name: string
    }

    export type TAuth = {
      success: boolean,
      accessToken: string,
      refreshToken: string,
      user: TUser
    }
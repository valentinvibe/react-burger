import { getCookie } from "./cookie";

const checkResponse = (res : Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status} ${res.statusText}`);
};

const getIngredients = (url : string) => {
  return fetch(`${url}/ingredients`).then((res) => checkResponse(res));
};

const addNewOrder = (url : string, order : Array<string>) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie('accessToken'),
    },
    body: JSON.stringify({
      ingredients: order,
    }),
  }).then((res) => checkResponse(res));
};

const forgotPassword = (url : string, email : string) => {
  return fetch(`${url}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  }).then((res) => checkResponse(res));
};

const resetPassword = (url : string, password : string, token : string) => {
  return fetch(`${url}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  }).then((res) => checkResponse(res));
};

//Регистрация пользователя
const registerNewUser = (url : string, email : string, name : string, password : string) => {
  return fetch(`${url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then((res) => checkResponse(res));
};

//Авторизация пользователя
const loginUser = (url : string , email : string, password : string) => {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => checkResponse(res));
};

//Обновление токена
const refreshToken = (url : string, refreshToken : string) => {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then((res) => checkResponse(res));
};

//Выход из системы
const logout = (url : string, refreshToken : string) => {
  return fetch(`${url}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then((res) => checkResponse(res));
};

//Получение данных о пользователе
const getUserData = (url : string, token : string) => {
  return fetch(`${url}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  }).then((res) => checkResponse(res));
};

//Изменение данных о пользователе
const updateUserData = (url : string, token : string, email : string, name : string, password : string) => {
  return fetch(`${url}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  }).then((res) => checkResponse(res));
};

export {
  getIngredients,
  addNewOrder,
  forgotPassword,
  resetPassword,
  registerNewUser,
  loginUser,
  refreshToken,
  logout,
  getUserData,
  updateUserData,
};

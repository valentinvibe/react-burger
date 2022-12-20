const checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
}

const getIngredients = (url) => {
    return fetch(`${url}ingredients`)
    .then((res) => checkResponse(res))
}

const addNewOrder = (url, order) => {
  return fetch(`${url}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'ingredients': order
    })
  })
  .then((res) => checkResponse(res))
}

const forgotPassword = (url, email) => {
  return fetch(`${url}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  })
  .then((res) => checkResponse(res))
}

const resetPassword = (url, password, token) => {
  return fetch(`${url}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password,
      token
    })
  })
  .then((res) => checkResponse(res))
}

//Регистрация пользователя
const registerNewUser = (url, email, name, password) => {
  return fetch(`${url}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': email,
      'password' : password,
      'name' : name
    })
  })
  .then((res) => checkResponse(res))
}

//Авторизация пользователя
const loginUser = (url, email, password) => {
  return fetch(`${url}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password
    }),
  }).then((res) => checkResponse(res));
}

//Обновление токена
const refreshToken = (url, refreshToken) => {
  return fetch(`${url}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  }).then((res) => checkResponse(res));
}

//Выход из системы
const logout = (url, refreshToken) => {
  return fetch(`${url}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  }).then((res) => checkResponse(res));
}

//Получение данных о пользователе
const getUserData = (url, token) => {
  return fetch(`${url}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    }
  }).then((res) => checkResponse(res));
}

//Изменение данных о пользователе
const updateUserData = (url, token, email, name, password) => {
  return fetch(`${url}auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      'email': email,
      'name': name,
      'password': password
    })
  }).then((res) => checkResponse(res));
}


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
  updateUserData
}




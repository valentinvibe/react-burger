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
      "ingredients": order
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
      "email": email
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
      "password": password,
      "token": token
    })
  })
  .then((res) => checkResponse(res))
}

const registerNewUser = (url, name, email, password) => {
  return fetch(`${url}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name
    })
  })
  .then((res) => checkResponse(res))
}

export {
  getIngredients,
  addNewOrder,
  forgotPassword,
  resetPassword,
  registerNewUser
}




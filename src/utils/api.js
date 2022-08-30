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

export {
  getIngredients,
  addNewOrder
}




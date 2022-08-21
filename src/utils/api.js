const checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
}

const getIngredients = (url) => {
    return fetch(`${url}`)
    .then((res) => checkResponse(res))
    .catch(err => {
        console.log(err);
    })
}


  export {
    getIngredients
  }

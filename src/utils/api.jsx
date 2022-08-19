import { url } from "./data.js";

const Api = () => {
  let result = {};
  const checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
  }
  const getIngredients = (url) => {
    return fetch({url})
      .then((res) => checkResponse(res))
  }
  result = getIngredients();

  return( <p>{result}</p> )
}

export default Api

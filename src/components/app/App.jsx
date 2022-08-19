import React, { useEffect, useState} from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
// import { data } from '../../utils/data';
import Api from '../../utils/api';


const App = (props) => {
  const [data, setData] = useState({})

  const checkResponse = (res: Response) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)
  }

  const getIngredients = () => {
    return fetch(`${props.url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => checkResponse(res))
  }

  useEffect(() => {
    setData(getIngredients())

    console.log(data)
  },[])

  return (
    <>
      <AppHeader/>
      <main className={styles.content}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </>

  );
}



export default App;

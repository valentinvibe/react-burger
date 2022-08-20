import { useEffect, useState} from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/api';
import { url } from '../../utils/variables';


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
   getIngredients(url)
    .then(item => {
      setData(Array.from(item.data))
      
    })
    .catch(err => {
      console.log(err);
  })
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

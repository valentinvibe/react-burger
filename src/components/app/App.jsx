import { useEffect, useState} from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/api';
import { url } from '../../utils/variables';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { DataContext, IngredientContext} from '../services/data-context';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [ingredient, setIngredient] = useState();

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleOrderModal = () => {
    setOrderModal(!orderModal)
  }

  useEffect(() => {
   setLoading(true);
   getIngredients(url)
    .then((item) => {
      setData(item.data)
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false)
    })
  },[])


  return (
    <>
      <AppHeader/>
      <DataContext.Provider value={{data}}>
        <IngredientContext.Provider value={{setIngredient}}>
          <main className={styles.content}>
            {loading && <p>Loading</p>}
            {!loading && <BurgerIngredients toggleModal={toggleModal}/>}
            {!loading && <BurgerConstructor toggleModal={toggleOrderModal}/>}
          </main>
          {modal &&
          <Modal title='Детали ингредиента' toggleModal={toggleModal}>
            <IngredientDetails ingredient={ingredient}/>
          </Modal>}
          {orderModal &&
          <Modal toggleModal={toggleOrderModal}>
            <OrderDetails/>
          </Modal>}
        </IngredientContext.Provider>
      </DataContext.Provider>
    </>

  );
}



export default App;

import { useEffect, useState} from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/api';
import { url } from '../../utils/variables';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';


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
      <main className={styles.content}>
        {loading && <p>Loading</p>}
        {!loading && <BurgerIngredients data={data} toggleModal={toggleModal} setIngredient={setIngredient}/>}
        {!loading && <BurgerConstructor data={data} toggleModal={toggleOrderModal}/>}
      </main>
      {modal &&
      <Modal title='Детали ингредиента' toggleModal={toggleModal}>
        <IngredientDetails ingredient={ingredient}/>
      </Modal>}
      {orderModal &&
      <Modal toggleModal={toggleOrderModal}>

        Order
      </Modal>}
    </>

  );
}



export default App;

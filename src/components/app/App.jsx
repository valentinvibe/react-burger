import { useEffect, useState} from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients, addNewOrder } from '../../utils/api';
import { baseUrl } from '../../utils/variables';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { IngredientContext} from '../services/data-context';
import { OrderContext } from "../services/order-context";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../services/actions/actions';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [ingredient, setIngredient] = useState();
  const [order, setOrder] = useState();
  const [newOrder, setNewOrder] = useState(null);

  const dispatch = useDispatch();

  // const data = useSelector(store => store.data.ingredients);

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleOrderModal = () => {
    setOrderModal(!orderModal)
  }

  const handleOrderModalClick = () => {
    toggleOrderModal();
      addNewOrder(baseUrl, order)
      .then((res) => {
        setNewOrder(res.order.number)
      })
      .catch(err => {
        console.log(err)
      })
    }



  useEffect(() => {
   setLoading(true);
   getIngredients(baseUrl)
    .then((item) => {
      dispatch(getItems());
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
        <IngredientContext.Provider value={{setIngredient}}>
          <OrderContext.Provider value={{order,setOrder}}>
            <main className={styles.content}>
              {loading && <p>Loading</p>}
              {!loading && <BurgerIngredients toggleModal={toggleModal}/>}
              {!loading && <BurgerConstructor toggleModal={handleOrderModalClick}/>}
            </main>
            {orderModal &&
            <Modal toggleModal={toggleOrderModal}>
              <OrderDetails order={newOrder}/>
            </Modal>}
          </OrderContext.Provider>
          {modal &&
          <Modal title='Детали ингредиента' toggleModal={toggleModal}>
            <IngredientDetails ingredient={ingredient}/>
          </Modal>}
        </IngredientContext.Provider>
    </>

  );
}

export default App;

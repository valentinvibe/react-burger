import { useEffect } from 'react';

import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../services/actions/actions';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const App = () => {
  const {modal, orderModal } = useSelector(store => ({
    modal: store.modal.ingredientModal,
    orderModal: store.modal.orderModal
  }))

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getItems());
  },[dispatch])

  return (
    <>
      <AppHeader/>
      <main className={styles.content}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </main>
      {orderModal &&
      <Modal>
        <OrderDetails/>
      </Modal>}
      {modal &&
      <Modal title='Детали ингредиента'>
        <IngredientDetails/>
      </Modal>}
    </>

  );
}

export default App;

import { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../services/actions/get-data'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Switch, Route} from 'react-router-dom';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import ProfilePage from '../../pages/profile-page/profile-page';

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
      <Switch>
        <Route exact path="/">
          <main className={styles.content}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </DndProvider>
          </main>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/register">
          <RegisterPage/>
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword/>
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        <Route exact path="/ingredients/:id">
          {/* <IngredientPage/> */}
        </Route>
        <Route>
          <NotFound404/>
        </Route>
      </Switch>

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

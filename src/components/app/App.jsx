import { useEffect, useState } from 'react';
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

import { ProtectedRoute } from '../protected-route/protected-route';
import { getCookie } from '../../utils/cookie';
import { getUser } from '../../services/actions/user';
import ContentSwitch  from '../content-switch/content-switch'

const App = () => {
  const { modal, orderModal } = useSelector(store => ({
    modal: store.modal.ingredientModal,
    orderModal: store.modal.orderModal
  }))

  const accessToken = getCookie('accessToken');
  const dispatch = useDispatch();

  const isLoad = useSelector((store) => store.data.ingredientsRequest);

  useEffect(() => {
    dispatch(getItems());
    dispatch(getUser(accessToken));

  },[dispatch, accessToken])

  return (
    <>
      {!isLoad && (
        <>
        <AppHeader/>
        <ContentSwitch/>
        </>
        )}
    </>

  );
}

export default App;

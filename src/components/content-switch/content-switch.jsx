import styles from "../app/app.module.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../protected-route/protected-route";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import LoginPage from "../../pages/login-page/login-page";
import RegisterPage from "../../pages/register-page/register-page";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile-page/profile-page";
import NotFound404 from "../../pages/not-found-404/not-found-404";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
import Feed from "../../pages/feed-page/feed-page";

import SingleOrder from "../../pages/single-order/single-order";

import {
  homePage,
  loginPage,
  registerPage,
  forgotPasswordPage,
  resetPasswordPage,
  profilePage,
  ingredientsPage,
  feedPage,
  ordersPage,
} from "../../utils/variables";

import { getOrderModal } from "../../utils/functions";

const ContentSwitch = () => {
  const orderModal = useSelector(getOrderModal);
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={homePage}>
          <main className={styles.content}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </main>
        </Route>
        <Route exact path={loginPage}>
          <LoginPage />
        </Route>
        <Route exact path={registerPage}>
          <RegisterPage />
        </Route>
        <ProtectedRoute exact path={forgotPasswordPage} onlyUnAuth={false}>
          <ForgotPassword />
        </ProtectedRoute>
        <Route exact path={resetPasswordPage}>
          <ResetPassword />
        </Route>

        <Route exact path={`${ingredientsPage}/:id`}>
          <IngredientDetails title="Детали ингредиента" />
        </Route>

        <Route exact path={feedPage}>
          <Feed />
        </Route>

        <Route exact path={`${feedPage}/:id`}>
          <SingleOrder />
        </Route>

        <ProtectedRoute exact path={`${profilePage}/${ordersPage}/:id`} onlyUnAuth={false}>
          <SingleOrder />
        </ProtectedRoute>

        <ProtectedRoute path={profilePage} onlyUnAuth={false}>
          <ProfilePage />
        </ProtectedRoute>

        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {orderModal && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}

      {background && (
        <Route exact path={`${ingredientsPage}/:id`}>
          <Modal title="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      { background  && (
      <Route path={`${feedPage}/:id`}>
        <Modal>
          <SingleOrder/>
        </Modal>
      </Route>
      )}

      { background && (
      <ProtectedRoute exact path={`${profilePage}/${ordersPage}/:id`} onlyUnAuth={false}>
        <Modal>
          <SingleOrder/>
        </Modal>
      </ProtectedRoute>
      )}
    </>
  );
};

export default ContentSwitch;

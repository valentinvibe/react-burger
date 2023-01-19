import styles from "../app/app.module.css";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
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
  orders
} from "../../utils/variables";

import { 
  getOrderModal, 
  getIsOpen 
} from "../../utils/functions";


const ContentSwitch = () => {
  const orderModal = useSelector(getOrderModal);
  const isOpen = useSelector(getIsOpen)
  const location = useLocation();
  const from = location.state && location.state.from;

  const { path } = useRouteMatch();
  

  return (
    <>
      <Switch location={from || location}>
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
        <ProtectedRoute path={profilePage} onlyUnAuth={false}>
          <ProfilePage />
        </ProtectedRoute>
        <Route exact path={`${ingredientsPage}/:id`}>
          <IngredientDetails title="Детали ингредиента"/>
        </Route>
        <Route exact path={feedPage}>
          <Feed/>
        </Route>
        <Route exact path={`${feedPage}/:id`}>
          <p>Test data</p>
        </Route>

        <Route exact path={`${path}/${orders}/:id`}>
          <SingleOrder/>
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>

      {orderModal && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}

      {isOpen && (
        <Route exact path={`${ingredientsPage}/:id`}>
          <Modal title="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
        
      )}
    </>
  );
};

export default ContentSwitch;

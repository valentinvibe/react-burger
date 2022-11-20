import styles from "./profile-page.module.css";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import EditData from "./components/edit-data/edit-data";
import OrdersHistory from "./components/orders-history/orders-history";
import { useDispatch } from "react-redux";
import { logOut } from "../../services/actions/user";
import { getCookie } from "../../utils/cookie";

const linkClass = `${styles.link} text text_type_main-medium pt-4 pb-5 text_color_inactive`;

const ProfilePage = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    const refreshToken = getCookie('refreshToken');
    dispatch(logOut(refreshToken));
  }

  return (
    <main className={styles.wrapper}>
      <nav className={styles.nav}>
        <NavLink
        exact
          to={`${url}`}
          className={linkClass}
          activeClassName={styles.active}
        >
          Профиль
        </NavLink>
        <NavLink
        exact
          to={`${url}/orders/`}
          className={linkClass}
          activeClassName={styles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          to="/login"
          className={linkClass}
          activeClassName={styles.active}
          onClick={handleLogoutClick}
        >
          Выход
        </NavLink>
        <p
          className={`text text_type_main-default text_color_inactive mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>

      <Route exact path={`${path}`}>
        <EditData />
      </Route>
      <Route exact path={`${path}/orders`}>
        <OrdersHistory />
      </Route>
      <Route path="/profile/orders/:id"></Route>
    </main>
  );
};

export default ProfilePage;

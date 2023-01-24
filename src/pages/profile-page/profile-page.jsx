import styles from './profile-page.module.css';
import { NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom';
import EditData from './components/edit-data/edit-data';
import OrdersHistory from './components/orders-history/orders-history';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/actions/user';
import { getCookie } from '../../utils/cookie';
import { LOGOUT_SUCCESS } from '../../services/actions/user';
import { 
  loginPage,
  orders
} from '../../utils/variables';

const linkClass = `${styles.link} text text_type_main-medium pt-4 pb-5 text_color_inactive`;

const ProfilePage = () => {
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();


  const handleLogoutClick = () => {
    const refreshToken = getCookie('refreshToken');
    dispatch(logOut(refreshToken));
    dispatch({type: LOGOUT_SUCCESS });
    history.replace({pathname: loginPage })
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
          to={`${url}/${orders}`}
          className={linkClass}
          activeClassName={styles.active}
        >
          История заказов
        </NavLink>
        <NavLink
          exact
          to={loginPage}
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
      <Route  path={`${path}/${orders}`}>
        <OrdersHistory />
      </Route>
    </main>
  );
};

export default ProfilePage;

import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { homePage, profilePage, orderFeed } from "../../utils/variables";

const link = `${styles.header__link} p-5 text text_type_main-default`;

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-3`}>
      <nav className={styles.header__navigation}>
        <ul className={styles.header__list}>
          <li className={styles.menuItem}>
            <NavLink
              exact
              to={homePage}
              className={link}
              activeClassName={styles.active}
            >
              <BurgerIcon type="primary" />
              Конструктор
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to={orderFeed}
              className={link}
              activeClassName={styles.active}
            >
              <ListIcon type="primary" />
              Лента заказов
            </NavLink>
          </li>
        </ul>
        <NavLink to={homePage} className={styles.header__logoWrapper}>
          <Logo />
        </NavLink>
        <div className={styles.menuItem}>
          <NavLink
            to={profilePage}
            className={link}
            activeClassName={styles.active}
          >
            <ProfileIcon type="primary" />
            Личный кабинет
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;

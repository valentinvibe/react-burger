import styles from './style.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
const classes = styles.header__link + ' ' + styles.active;
const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navigation}>
        <ul className={styles.header__list}>
          <li className={styles.menuItem}>
            <a href='#' className={classes}>
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href='#' className={styles.header__link}>
              <ListIcon type="primary" />
              Лента заказов
            </a>
          </li>
        </ul>
        <Logo/>
        <div className={styles.menuItem}>
          <a href='#' className={styles.header__link}>
            <ProfileIcon type="primary" />
            Личный кабинет
          </a>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader

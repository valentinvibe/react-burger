import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
const link = `${styles.header__link} p-5 text text_type_main-default`
const classes = link + ' ' + styles.active;
const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-3`}>
      <nav className={styles.header__navigation}>
        <ul className={styles.header__list}>
          <li className={styles.menuItem}>
            <a href='/#' className={classes}>
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href='/#' className={link}>
              <ListIcon type="primary" />
              Лента заказов
            </a>
          </li>
        </ul>
        <a href="/#" className={styles.header__logoWrapper}>
          <Logo/>
        </a>
        <div className={styles.menuItem}>
          <a href='/#' className={link}>
            <ProfileIcon type="primary" />
            Личный кабинет
          </a>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader

import styles from './styles.module.css';

const BurgerIngredients = () => {
  return (
    <div className={styles.constructor}>
      <h1 className={styles.title}>Соберите бургер</h1>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Булки</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Соусы</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Начинки</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BurgerIngredients

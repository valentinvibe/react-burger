import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../ingredient/burger-ingredient";

const BurgerIngredients = (props) => {
  const [current, setCurrent] = React.useState('bun');
  const buns = props.data.filter(item => item.type === 'bun');
  const sauces = props.data.filter(item => item.type === 'sauce');
  const mains = props.data.filter(item => item.type === 'main');

  return (
    <section className={`${styles.constructor} mt-10 ml-5`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className="mt-5">
        <div className={styles.menu}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </nav>

      <ul className={styles.categories}>
        <li id="bun" className={styles.category}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Булки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {buns.map(element => <Ingredient key={element._id} data={element}/>)}
          </ul>
        </li>
        <li id="sauce" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Соусы</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {sauces.map(element => <Ingredient key={element._id} data={element}/>)}
          </ul>
        </li>
        <li id="main" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Начинки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {mains.map(element => <Ingredient key={element._id} data={element}/>)}
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default BurgerIngredients

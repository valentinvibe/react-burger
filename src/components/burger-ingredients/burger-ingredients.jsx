import React, { useContext, useEffect, useMemo } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../ingredient/burger-ingredient";
import PropTypes from 'prop-types'
import { burgerPropTypes } from '../../utils/prop-types';
import { DataContext } from '../services/data-context';

const BurgerIngredients = ({ toggleModal }) => {
  const { data } = useContext(DataContext);

  const [current, setCurrent] = React.useState('bun');
  const buns = useMemo(() => data.filter(item => item.type === 'bun'),[data]);
  const sauces = useMemo(()=> data.filter(item => item.type === 'sauce'),[data]);
  const mains = useMemo(()=> data.filter(item => item.type === 'main'),[data]);

  // const tabRef = useRef(null);

  const handleTabClick = (e) => {
    setCurrent(e);
    document.querySelector(`#${e}`).scrollIntoView({ block: "start", behavior: "smooth" });
  }

  useEffect(()=>{console.log(`dfdf`)},[])

  return (
    <section className={`${styles.constructor} mt-10 ml-5`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className="mt-5">
        <div className={styles.menu}>
          <Tab value="bun" active={current === 'bun'} onClick={handleTabClick}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={handleTabClick}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={handleTabClick}>
            Начинки
          </Tab>
        </div>
      </nav>

      <ul className={styles.categories}>
        <li id="bun" className={styles.category}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Булки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {buns.map(element => <Ingredient key={element._id} data={element} toggleModal={toggleModal}/>)}
          </ul>
        </li>
        <li id="sauce" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Соусы</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {sauces.map(element => <Ingredient key={element._id} data={element} toggleModal={toggleModal}/>)}
          </ul>
        </li>
        <li id="main" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Начинки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {mains.map(element => <Ingredient key={element._id} data={element} toggleModal={toggleModal}/>)}
          </ul>
        </li>
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  toggleModal: PropTypes.func.isRequired
}

export default BurgerIngredients

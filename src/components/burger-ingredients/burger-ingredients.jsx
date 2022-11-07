import React, { useMemo, useRef } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from "../ingredient/burger-ingredient";
import {useSelector} from 'react-redux';
import { baseRefHeight } from '../../utils/variables';

const BurgerIngredients = () => {
  const data = useSelector(store => store.data.ingredients);

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const [current, setCurrent] = React.useState('bun');
  const buns = useMemo(() => data.filter(item => item.type === 'bun'),[data]);
  const sauces = useMemo(()=> data.filter(item => item.type === 'sauce'),[data]);
  const mains = useMemo(()=> data.filter(item => item.type === 'main'),[data]);


  const handleTabClick = (e) => {
    setCurrent(e);
    document.querySelector(`#${e}`).scrollIntoView({ block: "start", behavior: "smooth" });
  }

  const scrollHandler = () => {
    const bun = bunRef.current.getBoundingClientRect().top;
    const sauce = sauceRef.current.getBoundingClientRect().top;
    const main = mainRef.current.getBoundingClientRect().top;

    if (bun <= baseRefHeight) {
      setCurrent('bun')
    }
    if (sauce <= baseRefHeight) {
      setCurrent('sauce')
    }
    if (main <= baseRefHeight) {
      setCurrent('main')
    }
  }


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

      <ul onScroll={scrollHandler} className={styles.categories}>
        <li ref={bunRef} id="bun" className={styles.category}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Булки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {buns.map(element => <Ingredient key={element._id} data={element}/>)}
          </ul>
        </li>
        <li ref={sauceRef} id="sauce" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Соусы</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {sauces.map(element => <Ingredient key={element._id} data={element}/>)}
          </ul>
        </li>
        <li ref={mainRef} id="main" className={styles.categoty}>
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

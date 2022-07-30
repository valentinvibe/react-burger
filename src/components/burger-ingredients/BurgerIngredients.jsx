import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import cratorBread from "../../images/crator-bread.png";
import breadR2D3 from "../../images/breadR2D3.png";
import currency from "../../images/currency.png";
import spicyx from "../../images/sauce-spicy-X.png";
import sause04 from "../../images/sauce-04.png";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className={styles.constructor}>
      <h1 className={styles.title}>Соберите бургер</h1>
      <nav className={styles.navigation}>
        <div className={styles.menu}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </nav>

      <ul className={styles.categories}>
        <li id="bun" className={styles.category}>
          <h2 className={styles.subtitle}>Булки</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <Counter count={1} size="default" />
              <img className={styles.card__image} src={cratorBread} alt="#"/>
              <div className={styles.priceContainer}>
                <span className={styles.price}>20</span>
                <img className={styles.currency} src={currency}/>
              </div>
              <p className={styles.description}>Краторная булка N-200i</p>
            </div>

            <div className={styles.card}>
              <img className={styles.card__image} src={breadR2D3} alt="#"/>
              <div className={styles.priceContainer}>
                <span className={styles.price}>20</span>
                <img className={styles.currency} src={currency}/>
              </div>
              <p className={styles.description}>Флюоресцентная булка R2-D3</p>
              </div>
          </div>
        </li>
        <li id="sauce" className={styles.categoty}>
          <h2 className={styles.subtitle}>Соусы</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <img className={styles.card__image} src={spicyx} alt="#"/>
              <div className={styles.priceContainer}>
                <span className={styles.price}>30</span>
                <img className={styles.currency} src={currency}  alt="#"/>
              </div>
              <p className={styles.description}>Соус Spicy-X</p>
            </div>

            <div className={styles.card}>
              <img className={styles.card__image} src={sause04} alt="#"/>
              <div className={styles.priceContainer}>
                <span className={styles.price}>30</span>
                <img className={styles.currency} src={currency} alt="#"/>
              </div>
              <p className={styles.description}>Соус фирменный Space Sauce</p>
            </div>
          </div>
        </li>
        <li id="main" className={styles.categoty}>
          <h2 className={styles.subtitle}>Начинки</h2>
          <div className={styles.cardsContainer}>

          </div>
        </li>
      </ul>
    </section>
  )
}

export default BurgerIngredients

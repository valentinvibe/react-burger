import React, { FC, useMemo, useRef } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "../ingredient/burger-ingredient";
import { useSelector } from "../../services/types/hooks";
import { baseRefHeight } from "../../utils/variables";
import { getData } from "../../utils/functions";
import { TIngredient } from "../../services/types";

const BurgerIngredients : FC = () => {
  const data = useSelector(getData);
  const bunRef = useRef<HTMLLIElement>(null);
  const sauceRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

  const [current, setCurrent] = React.useState("bun");
  const buns = useMemo(
    () => data.filter((item : TIngredient) => item.type === "bun"),
    [data]
  );
  const sauces = useMemo(
    () => data.filter((item : TIngredient) => item.type === "sauce"),
    [data]
  );
  const mains = useMemo(
    () => data.filter((item : TIngredient) => item.type === "main"),
    [data]
  );

  const handleTabClick = (e : string) => {
    setCurrent(e);
    document
      .querySelector<HTMLElement>(`#${e}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const scrollHandler = () => {
    if (bunRef.current) {
      const bun = bunRef.current.getBoundingClientRect().top;
      if (bun <= baseRefHeight) {
        setCurrent("bun");
      }
    }
    if (sauceRef.current) {
      const sauce = sauceRef.current.getBoundingClientRect().top;
      if (sauce <= baseRefHeight) {
        setCurrent("sauce");
      }
    }
    if (mainRef.current) {
      const main = mainRef.current.getBoundingClientRect().top;
      if (main <= baseRefHeight) {
        setCurrent("main");
      }
    }
  };

  return (
    <section className={`${styles.constructor} mt-10 ml-5`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className="mt-5">
        <div className={styles.menu}>
          <Tab value="bun" active={current === "bun"} onClick={handleTabClick}>
            Булки
          </Tab>
          <Tab
            value="sauce"
            active={current === "sauce"}
            onClick={handleTabClick}
          >
            Соусы
          </Tab>
          <Tab
            value="main"
            active={current === "main"}
            onClick={handleTabClick}
          >
            Начинки
          </Tab>
        </div>
      </nav>

      <ul onScroll={scrollHandler} className={styles.categories}>
        <li ref={bunRef} id="bun" className={styles.category}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Булки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {buns.map((element : TIngredient) => (
              <Ingredient key={element._id} data={element} />
            ))}
          </ul>
        </li>
        <li ref={sauceRef} id="sauce" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Соусы</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {sauces.map((element : TIngredient) => (
              <Ingredient key={element._id} data={element} />
            ))}
          </ul>
        </li>
        <li ref={mainRef} id="main" className={styles.categoty}>
          <h2 className="text text_type_main-medium mt-11 mb-6">Начинки</h2>
          <ul className={`${styles.cardsContainer} ml-4 mb-10`}>
            {mains.map((element : TIngredient) => (
              <Ingredient key={element._id} data={element} />
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;

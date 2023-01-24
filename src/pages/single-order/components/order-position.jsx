import styles from "./order-position.module.css";
import IngredientImage from "../../../components/orders/components/ingredient-image/ingredient-image";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { getData } from "../../../utils/functions";
import { useMemo } from "react";
import { uniq } from "../../../utils/functions";

const OrderPosition = ({ ingredients }) => {
  const data = useSelector(getData);
  
  const count = (elem) => {
    let count = ingredients.filter((item) => {
      return item === elem;
    }).length;
    return count;
  }

  const orderIngredient = useMemo(() => {
    return ingredients.map((elem) => {
      return data.find((item) => {
        return elem._id === item._id;
      });
    });
  }, [ingredients, data]);

  const orderIngredients = uniq(orderIngredient)

  return( 
    <ul className={styles.ingredientList}>
      {orderIngredients.map((item,index) => { 
        return(
      <li className={styles.wrapper} key={index}>
        <div className={styles.container}>
        <IngredientImage image={item.image} alt={item.name}/>
        <p className="text text_type_main-default ml-4">{item.name}</p>
        </div>
        <div className={styles.container}>
          <p className="text text_type_digits-default">{`${count(item)} x ${item.price}`}</p>
          <CurrencyIcon type="primary" />
        </div>
      </li>
        )
      })}
    </ul>
  )
};

export default OrderPosition;

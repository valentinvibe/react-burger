import styles from "./order-position.module.css";
import IngredientImage from "../orders/components/ingredient-image/ingredient-image";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/types/hooks";
import { getData } from "../../utils/functions";
import { useEffect, useMemo, useState } from "react";
import { uniq } from "../../utils/functions";
import { FC} from "react";
import { TIngredient } from "../../services/types";

interface IOrderPositions {
  ingredients: Array<TIngredient>
}

const OrderPositions : FC<IOrderPositions> = ({ ingredients }) => {
  const data = useSelector(getData);
  const [renderData, setRenderData] = useState<Array<TIngredient> | Array<undefined> | undefined>();
  
  const count = (elem : TIngredient | undefined) => {
    let count = ingredients.filter((item) => {
      return item === elem;
    }).length;
    return count;
  }

  const orderIngredient = useMemo(() => {
    return ingredients.map((elem) => {
      return data.find((item) => {
        return elem._id === item._id;
      })!;
    });
  }, [ingredients, data]);

  useEffect(()=> {
    const temp = uniq(orderIngredient)
    setRenderData(temp)
  }, [orderIngredient])

  return( 
    <ul className={styles.ingredientList}>
      {renderData && renderData.map((item,index) => { 
      return(
      <li className={styles.wrapper} key={index}>
        <div className={styles.container}>
        <IngredientImage image={item?.image} alt={item?.name}/>
        <p className="text text_type_main-default ml-4">{item?.name}</p>
        </div>
        <div className={styles.container}>
          <p className="text text_type_digits-default pr-2">
            {item?.type === "bun"
              ? `${count(item) * 2} x ${item.price}`
              : `${count(item)} x ${item?.price}`}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </li>
        )
      })}
    </ul>
  )
};

export default OrderPositions;

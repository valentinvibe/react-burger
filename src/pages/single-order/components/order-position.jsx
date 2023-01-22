import styles from "./order-position.module.css";
import IngredientImage from "../../../components/orders/components/ingredient-image/ingredient-image";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderPosition = ({ ingredient }) => {
    
  return( 
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <IngredientImage image={ingredient.image} alt={ingredient.name}/>
        <p className="text text_type_main-default ml-4">{ingredient.name}</p>
        </div>
        <div className={styles.container}>
          <p className="text text_type_digits-default">2 x 200</p>
          <CurrencyIcon type="primary" />
        </div>
    </div>
  )
};

export default OrderPosition;

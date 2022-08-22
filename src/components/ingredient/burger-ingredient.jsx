import styles from "./burger-ingredient.module.css";
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from "../../utils/prop-types";

const Ingredient = (props) => {
  const handleClick = () => {
    props.toggleModal();
    props.setIngredient(props.data);
  }

  return (
    <li className={styles.card} onClick={handleClick}>
      <img className="ml-4 mr-4" src={props.data.image} alt={props.data.name}/>
      <div className={`${styles.priceContainer} mt-2 mb-2`}>
        <span className="text text_type_digits-default pr-2">{props.data.price}</span>
        <img className={styles.currency} src={currency} alt="Валюта"/>
      </div>
      <p className="text text text_type_main-default">{props.data.name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  data: burgerPropTypes.isRequired
}

export default Ingredient

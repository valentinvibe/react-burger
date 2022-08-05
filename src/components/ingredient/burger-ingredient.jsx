import styles from "./burger-ingredient.module.css";
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from "../../utils/prop-types";

const Ingredient = (props) => {
  return (
    <li key={props.data._id} className={styles.card}>
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
  image: burgerPropTypes,
  name: burgerPropTypes,
  price: burgerPropTypes
}

export default Ingredient

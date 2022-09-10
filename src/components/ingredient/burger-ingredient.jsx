import styles from "./burger-ingredient.module.css";
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from "../../utils/prop-types";
import { useDispatch } from "react-redux";
import { OPEN_INGREDIENT_MODAL, SET_INGREDIENT_INFO } from '../../services/actions/actions'

const Ingredient = ({data}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: SET_INGREDIENT_INFO,
      item: data
    })
    dispatch({type: OPEN_INGREDIENT_MODAL})
  }

  return (
    <li className={styles.card} onClick={handleClick}>
      <img className="ml-4 mr-4" src={data.image} alt={data.name}/>
      <div className={`${styles.priceContainer} mt-2 mb-2`}>
        <span className="text text_type_digits-default pr-2">{data.price}</span>
        <img className={styles.currency} src={currency} alt="Валюта"/>
      </div>
      <p className="text text text_type_main-default">{data.name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  data : burgerPropTypes.isRequired
}

export default Ingredient

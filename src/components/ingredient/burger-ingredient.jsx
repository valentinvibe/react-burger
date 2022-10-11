import styles from "./burger-ingredient.module.css";
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_INGREDIENT_MODAL, SET_INGREDIENT_INFO } from '../../services/actions/actions';
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from 'react'

const Ingredient = ({data}) => {
  const ingredients = useSelector(store => store.construct)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: SET_INGREDIENT_INFO,
      item: data
    })
    dispatch({type: OPEN_INGREDIENT_MODAL})
  }

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {data},
  });

  const counter = useMemo(()=> {
    let result = null
    if (data.type === "bun" && ingredients.bun._id === data._id) {
      result = 1
    } else {
      result = ingredients.data.filter(item => item._id === data._id).length
    }

    return result
  },[data,ingredients])


  return (
    <li ref={dragRef} className={styles.card} onClick={handleClick}>
      <img className="ml-4 mr-4" src={data.image} alt={data.name}/>
      <div className={`${styles.priceContainer} mt-2 mb-2`}>
        <span className="text text_type_digits-default pr-2">{data.price}</span>
        <img className={styles.currency} src={currency} alt="Валюта"/>
      </div>
      <p className="text text text_type_main-default">{data.name}</p>
      { counter ? <Counter count={counter} size="default" /> : null}
    </li>
  )
}

Ingredient.propTypes = {
  data : burgerPropTypes.isRequired
}

export default Ingredient

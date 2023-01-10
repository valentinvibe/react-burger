import styles from "./burger-ingredient.module.css";
import currency from "../../images/currency.png";
import { burgerPropTypes } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL, SET_INGREDIENT_INFO } from '../../services/actions/actions';
import { useDrag } from "react-dnd";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from 'react'
import { Link, useLocation } from "react-router-dom";
import { ingredientsPage } from "../../utils/variables";
import { getIngredients } from "../../utils/functions";

const Ingredient = ({data}) => {
  const ingredients = useSelector(getIngredients)
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = () => {
    dispatch({
      type: SET_INGREDIENT_INFO,
      item: data
    })
    dispatch({type: OPEN_MODAL})
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
      <Link 
        className={styles.link} 
        to={{
          pathname: `${ingredientsPage}/${data._id}`,
          state: {from: location}
        }}>
        <img className="ml-4 mr-4" src={data.image} alt={data.name}/>
        <div className={`${styles.priceContainer} mt-2 mb-2`}>
          <span className="text text_type_digits-default pr-2">{data.price}</span>
          <img className={styles.currency} src={currency} alt="Валюта"/>
        </div>
        <p className="text text text_type_main-default">{data.name}</p>
        { counter ? <Counter count={counter} size="default" /> : null}
      </Link>
    </li>
  )
}

Ingredient.propTypes = {
  data : burgerPropTypes.isRequired
}

export default Ingredient

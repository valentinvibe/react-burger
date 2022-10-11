import {useEffect} from 'react';
import styles from "./order-details.module.css";
import doneImg from "../../images/done.svg";
import { useDispatch, useSelector } from "react-redux";
import { DEL_ORDER_NUMBER } from '../../services/actions/actions'

const OrderDetails = () => {
  const order = useSelector(store => store.order.order);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({type: DEL_ORDER_NUMBER})
    }
  },[])

  return(
    <div className={`${styles.content} pt-9`}>
      <h2 className={`${styles.title} text text_type_digits-large`}>{
      order > 0 ? order : null
      }</h2>
      <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <img className={`${styles.image} mt-15`} src={doneImg} alt="done"/>
      <div className={`${styles.details} mt-15`}>
        <p className={`text text_type_main-default`}>
          Ваш заказ начали готовить
        </p>
        <p className={`text text_type_main-default mt-2`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  )
}

export default OrderDetails

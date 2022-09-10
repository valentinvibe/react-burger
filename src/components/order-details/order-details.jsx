import styles from "./order-details.module.css";
import doneImg from "../../images/done.svg";
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const order = useSelector(store => store.data.order);

  return(
    <div className={`${styles.content} pt-9`}>
      <h2 className={`${styles.title} text text_type_digits-large`}>{
      order > 0 ? order : 'Error'
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

OrderDetails.propTypes = {
  order : PropTypes.number
}

export default OrderDetails

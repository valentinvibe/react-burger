import styles from "./order-details.module.css";
import doneImg from "../../images/done.svg";
import { useSelector } from "../../services/types/hooks";
import { getOrder, getOrderFailed } from "../../utils/functions";
import { FC } from "react";

const OrderDetails : FC = () => {
  const order = useSelector(getOrder);
  const orderFailed = useSelector(getOrderFailed);

  return !orderFailed ? (
    <div className={`${styles.content} pt-9`}>
      <h2 className={`${styles.title} text text_type_digits-large`}>
        {order ? order : (<p className={`text text_type_main-medium mt-8`}>"Обработка данных, подождите..."</p>)}
      </h2>
      <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <img className={`${styles.image} mt-15`} src={doneImg} alt="done" />
      <div className={`${styles.details} mt-15`}>
        <p className={`text text_type_main-default`}>
          Ваш заказ начали готовить
        </p>
        <p className={`text text_type_main-default mt-2`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  ) : (
    <>
      <p className={`text text_type_main-medium mt-8`}>
        Хьюстон! У нас проблемы. Попробуйте еще раз
      </p>
    </>
  );
};

export default OrderDetails;

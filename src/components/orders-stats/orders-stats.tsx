import { useSelector } from "../../services/types/hooks";
import styles from "./orders-stats.module.css";
import { filterOrders } from "../../utils/functions";
import { getWsFeed } from "../../utils/functions";
import { FC } from "react";

const OrdersStats : FC = () => {
  const { total, totalToday, orders } = useSelector(getWsFeed);
  let ordersStatus = orders ? filterOrders(orders) : null;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.ordersCount} mb-10`}>
        <div className={styles.ordersStatus}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <div className={styles.ordersNumbers}>
            {ordersStatus ? (ordersStatus.done.map((item, index) => (
              <p
                className={`${styles.orderNumber} text text_type_digits-default`}
                key={index}
              >
                {item}
              </p>
            )) ) : (null)}
          </div>
        </div>
        <div className={styles.ordersStatus}>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <div className={styles.ordersNumbers}>
            {ordersStatus ? (ordersStatus.pending.map((item,index) => (
              <p
                className="text text_type_digits-default"
                key={index}
              >
                {item}
              </p>
            ))) : (null)}
          </div>
        </div>
      </div>

      <div className={`${styles.doneAllTimes} mb-5`}>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p className={`${styles.totalCount} text text_type_digits-large`}>
          {total}
        </p>
      </div>

      <div className={`${styles.doneToday}`}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className={`${styles.totalCount} text text_type_digits-large`}>
          {totalToday}
        </p>
      </div>
    </div>
  );
};

export default OrdersStats;

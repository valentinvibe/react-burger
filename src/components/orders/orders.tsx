import styles from "./orders.module.css";
import OrderCard from "./components/order-card/order-card";
import { useSelector } from "../../services/types/hooks";
import { getWsFeed } from "../../utils/functions";
import { useLocation, Link } from "react-router-dom";
import { FC } from "react";


const Orders : FC = () => {
  const { orders } = useSelector(getWsFeed);
  const location = useLocation();

  return (
    <ul className={styles.ordersList}>
      {orders &&
        orders.map((item, index) => {
          return(
            <Link
              key={index}
              className={styles.link}
              to={{
                pathname: `${location.pathname}/${item._id}`,
                state: {background : location }
              }}>
              <OrderCard order={item} key={index} />
            </Link>

          )
        })}
    </ul>
  );
};

export default Orders;

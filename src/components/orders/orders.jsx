import styles from "./orders.module.css";
import OrderCard from "./components/order-card/order-card";
import { useSelector } from "react-redux";
import { getWsFeed } from "../../utils/functions";
import { useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const Orders = () => {
  const { orders } = useSelector(getWsFeed);
  const location = useLocation();

  return (
    <ul className={styles.ordersList}>
      {orders &&
        orders.map((item, index) => {
          return(
            <Link
              key={uuidv4()}
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

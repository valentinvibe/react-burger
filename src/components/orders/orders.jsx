import styles from "./orders.module.css";
import OrderCard from "./components/order-card/order-card";
import { useSelector } from "react-redux";
import { getWsFeed } from "../../utils/functions";

const Orders = () => {
  const { orders } = useSelector(getWsFeed);

  return (
    <ul className={styles.ordersList}>
      {orders &&
        orders.map((item, index) => <OrderCard order={item} key={index} />)}
    </ul>
  );
};

export default Orders;

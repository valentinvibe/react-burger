import styles from "./orders.module.css";
import OrderCard from "./components/order-card/order-card";
import { useSelector } from "react-redux";
import { getWsOrders } from "../../utils/functions";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

const Orders = () => {
  const { orders } = useSelector(getWsOrders);

  useEffect(()=> {

  },[orders])
  
  return (
    <ul className={styles.ordersList}>
      {orders && orders.map((item) => 
        <OrderCard order={item} key={uuidv4()}/>
      )}
    </ul>
  );
};

export default Orders;

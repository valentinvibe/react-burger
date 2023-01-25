import styles from "./orders-history.module.css";
import OrderCard from "../orders/components/order-card/order-card";
import { useDispatch, useSelector } from "react-redux";
import { getWsOrders } from "../../utils/functions";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../../services/actions/ws-actions-types";

const OrdersHistory = () => {
  const { orders } = useSelector(getWsOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_ORDERS_CONNECTION_START });

    return () => {
      dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  if (!orders) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles.wrapper}>
      {orders
        ? orders.map((order) => (
            <OrderCard viewStatus={true} key={uuidv4()} order={order} />
          ))
        : null}
    </div>
  );
};

export default OrdersHistory;

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
import { Link, useLocation } from "react-router-dom"
import { FC } from "react";

const OrdersHistory : FC = () => {
  const { orders } = useSelector(getWsOrders);
  const location = useLocation();

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

  if (orders.length === 0) {
    return <p>Нет заказов</p>;
  }


  return (
    <div className={styles.wrapper}>
      {orders
        ? orders.reverse().map((order) => {
          return(
            <Link
              key={uuidv4()}
              className={styles.link}
              to={{
                pathname: `${location.pathname}/${order._id}`,
                  state: {background : location }
              }}
            >
            <OrderCard viewStatus={true} key={uuidv4()} order={order} />
            </Link>
          )

        })
        : null}
    </div>
  );
};

export default OrdersHistory;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import OrdersStats from "../../components/orders-stats/orders-stats";
import Orders from "../../components/orders/orders";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START
} from "../../services/actions/ws-actions-types";
import styles from "./feed-page.module.css";

const Feed = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch({ type: WS_FEED_CONNECTION_START });

    return () => {
      dispatch({type: WS_FEED_CONNECTION_CLOSED})
    }
  }, [dispatch]);

  
  return (
    <main className={styles.wrapper}>
      <h2 className={`${styles.title} text text_type_main-large`}>
        Лента заказов
      </h2>
      <div className={styles.container}>
        <Orders />
        <OrdersStats />
      </div>
    </main>
  );
};

export default Feed;

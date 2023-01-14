import styles from './orders.module.css';
import OrderCard from './components/order-card/order-card';

const Orders = () => {
  return(
    <ul className={styles.ordersList}>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
    </ul>
  )
}

export default Orders;
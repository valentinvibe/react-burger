import styles from './orders-history.module.css';
import OrderCard from '../../../../components/orders/components/order-card/order-card';

const OrdersHistory = () => {
  return(
    <div className={styles.wrapper}>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
      <OrderCard viewStatus={true}/>
    </div>
  )
}

export default OrdersHistory;

import styles from './orders-history.module.css';
import OrderCard from '../../../../components/orders/components/order-card/order-card';
import { useSelector } from 'react-redux';
import { getWsOrders } from '../../../../utils/functions';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';


const OrdersHistory = () => {
  const { orders } = useSelector(getWsOrders);

  useEffect(()=>{
    console.log(orders)
  },[orders])

  
  return(
    <div className={styles.wrapper}>
      {orders ? (
        orders.map((order) => 
        <OrderCard viewStatus={true} key={uuidv4()} order={order}/>
        )
      ) : (null)}
    </div>
  )
}

export default OrdersHistory;

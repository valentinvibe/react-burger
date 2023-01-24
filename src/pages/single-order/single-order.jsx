import styles from './single-order.module.css';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import OrderPosition from './components/order-position';
import { getData, getWsFeed} from '../../utils/functions';
import { formatDate } from '../../utils/format-date';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const SingleOrder = () => {
  const { id } = useParams();
  const { orders } = useSelector(getWsFeed)
  const data = useSelector(getData);
  const order = useMemo(
    () => orders.filter((order) => order._id === id),[orders,id]
  )
  const orderIngredients = order[0].ingredients;

  const findIngredient = (arr, ingredientId) => {
    return arr.find((item) => item._id === ingredientId)
  }  

  const orderIngredientsData = useMemo(() => {
    return orderIngredients.map((id) => {
      return data.find((item) => {
        return id === item._id;
      });
    });
  }, [orderIngredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData.reduce((sum, item) => {
      if (item.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  useEffect(()=> {
    console.log(orderIngredientsData)
  })

  return(
    <div className={styles.wrapper}>
      <p className={`text text_type_digits-default ${styles.number}`}>#{order[0] ? order[0].number : null}</p>
      <p className="text text_type_main-medium mt-10">{order[0] ? order[0].name : null}</p>
      <p className={`text text_type_main-small mt-3 ${styles.status}`}>
        {order[0].status === "done"
        ? "Выполнен"
        : order[0].status === "pending"
        ? "Готовится"
        : order[0].status === "created"
        ? "Создан"
        : "Выполнен"}
      </p>
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <div className={`${styles.ingredientsContainer} mt-6 mb-10 pr-6`}>
      
      <OrderPosition ingredients={orderIngredientsData}/>
      
      </div>
      <div className={styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          {order[0] ? formatDate(order[0].createdAt) : null}
        </p>
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-default">{orderTotalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}

export default SingleOrder;
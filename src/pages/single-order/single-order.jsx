import styles from './single-order.module.css';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import OrderPosition from './components/order-position';
import { getData, getWsFeed} from '../../utils/functions';

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
        {orderIngredients.map((item,index) => {
          const result = findIngredient(data, item);
          return (
            <OrderPosition key={index} ingredient={result}/>
          )
        })}
        </div>
      </div>
    )
}

export default SingleOrder;
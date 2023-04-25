import styles from './single-order.module.css';
import { useParams, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from '../../services/types/hooks';
import { useEffect, useMemo, FC } from 'react';
import OrderPositions from '../../components/order-position-list/order-position';
import { getData } from '../../utils/functions';
import { formatDate } from '../../utils/format-date';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { WS_ORDERS_CONNECTION_START, WS_ORDERS_CONNECTION_CLOSED, WS_FEED_CONNECTION_START, WS_FEED_CONNECTION_CLOSED } from '../../services/actions/ws-actions-types';
import { feedPage, ordersPage, profilePage } from '../../utils/variables';
import { TIngredient } from '../../services/types';

const SingleOrder : FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  const profileOrders = useSelector((store) => store.wsOrders.orders);
  const feedOrders = useSelector((store) => store.wsFeed.orders);
  const data = useSelector(getData);
  const isProfileOrders = `${profilePage}/${ordersPage}/:id`;
  const isFeedOrders = `${feedPage}/:id`;
  const { path } = useRouteMatch();

  const orders = path === isProfileOrders ? profileOrders : feedOrders;

  const order = useMemo(
    () => orders.filter((order) => order._id === id)[0],[orders,id]
  )


  const orderIngredientsData = useMemo(() => {
    return order?.ingredients.map((id) => {
      return data.find((item) => {
        return id === item._id;
      })!;
    })
  }, [order,data]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData?.reduce((sum : number, item : TIngredient | undefined) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0)
  }, [orderIngredientsData]);

  useEffect(() => {
    if (path === isProfileOrders) {
      dispatch({ type: WS_ORDERS_CONNECTION_START });
    }
    if (path === isFeedOrders) {
      dispatch({ type: WS_FEED_CONNECTION_START });
    }

    return () => {
      if (path === isProfileOrders) {
        dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
      }
      if (path === isFeedOrders) {
        dispatch({ type: WS_FEED_CONNECTION_CLOSED });
      }
    };
  }, [dispatch, isProfileOrders, isFeedOrders, path]);


  return(
    <>
    { order &&
    <div className={styles.wrapper}>
      <p className={`text text_type_digits-default ${styles.number}`}>#{order ? order.number : null}</p>
      <p className="text text_type_main-medium mt-10">{order ? order.name : null}</p>
      <p className={`text text_type_main-small mt-3 ${styles.status}`}>
        {order.status === "done"
        ? "Выполнен"
        : order.status === "pending"
        ? "Готовится"
        : order.status === "created"
        ? "Создан"
        : "Выполнен"}
      </p>
      <p className="text text_type_main-medium mt-15">Состав:</p>
      <div className={`${styles.ingredientsContainer} mt-6 mb-10 pr-6`}>

      <OrderPositions ingredients={orderIngredientsData}/>

      </div>
      <div className={styles.footer}>
        <p className="text text_type_main-default text_color_inactive">
          {order ? formatDate(order.createdAt) : null}
        </p>
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-default">{orderTotalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default SingleOrder;

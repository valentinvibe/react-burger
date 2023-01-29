import styles from "./order-card.module.css";
import currency from "../../../../images/currency.png";
import IngredientImage from "../ingredient-image/ingredient-image";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getData } from "../../../../utils/functions";
import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../../../utils/format-date";
import { useRouteMatch } from "react-router-dom";

const OrderCard = ({ order, viewStatus }) => {
  const ingredients = useSelector(getData);
  const maxIngredients = 6;
  const arrIngredientsLength = order.ingredients.length;
  const hideIngredients = arrIngredientsLength - 6;
  const history = useHistory();
  const { path } = useRouteMatch();

  const orderIngredientsData = useMemo(() => {
    return order.ingredients.map((id) => {
      return ingredients.find((item) => {
        return id === item._id;
      });
    });
  }, [order.ingredients, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData.reduce((sum, item) => {

      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  const onClick = () => {
    history.replace({ pathname: `${path}/${order._id}` });
  };


  return (
    <li onClick={onClick} className={`${styles.wrapper}`}>
      <div className={styles.orderId}>
        <p className="text text_type_digits-default">
          #{order ? order.number : null}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          {order ? formatDate(order.createdAt) : null}
        </p>
      </div>
      <p className="mt-6 text text_type_main-medium">
        {order ? order.name : null}
      </p>
      {viewStatus && (
        <p className="text text_type_main-default">
          {order.status === "done"
            ? "Выполнен"
            : order.status === "pending"
            ? "Готовится"
            : order.status === "created"
            ? "Создан"
            : "Выполнен"}
        </p>
      )}
      <div className={styles.orderInfo}>
        <ul className={`${styles.ingredients} mt-6`}>
          {arrIngredientsLength <= 5 &&
            orderIngredientsData.map((item, index) => {
              let zIndex = maxIngredients - index;
              return (
                <li
                  className={styles.orderImage}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  <IngredientImage image={item?.image} alt={item?.name} />
                </li>
              );
            })}
          {orderIngredientsData &&
            arrIngredientsLength >= 6 &&
            orderIngredientsData.slice(0, 5).map((item, index) => {
              let zIndex = maxIngredients - index;
              return (
                <li
                  className={styles.orderImage}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && (
                    <IngredientImage image={item.image} alt={item.name} />
                  )}
                </li>
              );
            })}
          {orderIngredientsData &&
            arrIngredientsLength > 6 &&
            orderIngredientsData.slice(5, 6).map((item, index) => {
              let zIndex = -index;
              return (
                <li
                  className={styles.orderImage}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && (
                    <>
                      <div className={styles.hidePic}>
                        <IngredientImage
                          image={item.image}
                          alt={item.name}
                          hide="true"
                        />
                        <p
                          className={`text text_type_main-default ${styles.hideText}`}
                        >
                          {`+${hideIngredients}`}
                        </p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
        </ul>
        <div className={styles.totalPrice}>
          <span className="text text_type_digits-default">
            {orderTotalPrice}
          </span>
          <img className={styles.currency} src={currency} alt="Валюта" />
        </div>
      </div>
    </li>
  );
};

OrderCard.propTypes = {
  order: PropTypes.object,
  viewStatus: PropTypes.bool,
};

export default OrderCard;

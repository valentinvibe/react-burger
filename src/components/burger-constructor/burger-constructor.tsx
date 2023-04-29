import { FC } from 'react';
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import currency from "../../images/currency.png";
import { useEffect, useCallback, useState } from "react"
import { useSelector, useDispatch } from "../../services/types/hooks";
import {
  ADD_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  SORT_INGREDIENTS,
  DEL_ORDER_NUMBER,
  CLEAR_CHOOSEN_INGREDIENTS
} from "../../services/actions/actions";
import { addOrder } from "../../services/actions/order";
import { useDrop } from "react-dnd";

import ConstructorItem from "./components/constructor-item";
import { useHistory } from "react-router-dom";
import { loginPage } from "../../utils/variables";

import {
  getSelectedIngredients,
  getSelectedBun,
  getUserData,
} from "../../utils/functions";
import { TConstructorIngredient } from "../../services/types";

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

interface IDropItem {
  data: TConstructorIngredient
}

const BurgerConstructor : FC = () => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(getSelectedIngredients);
  const selectedBun = useSelector(getSelectedBun);
  const userData = useSelector(getUserData);
  const history = useHistory();
  const [totalSum, setTotalSum] = useState<number>(0)
  const [orderIngredients, setOrderIngredients] = useState<Array<string>>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);

  const moveListItem = useCallback(
    (dragIndex : number, hoverIndex : number) => {
      const dragItem = selectedIngredients[dragIndex];
      const hoverItem = selectedIngredients[hoverIndex];

      const updatedIngredients = [...selectedIngredients];
      updatedIngredients[dragIndex] = hoverItem;
      updatedIngredients[hoverIndex] = dragItem;

      dispatch({
        type: SORT_INGREDIENTS,
        data: updatedIngredients,
      });
    },
    [selectedIngredients, dispatch]
  );

  useEffect(()=> {
    let total;
    if (selectedIngredients) {
      total = selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price,
        selectedBun ? selectedBun.price * 2 : 0)
      setTotalSum(total)
    }
    
  },[selectedIngredients, selectedBun])

  

  const handleSubmitOrderClick = () => {
    if (selectedIngredients.length !== 0) {
      dispatch(addOrder(orderIngredients));
      setModalActive(true)
    }
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({ type: DEL_ORDER_NUMBER });
    dispatch({ type: CLEAR_CHOOSEN_INGREDIENTS });
  }

  const handleSignIn = () => {
    history.replace({ pathname: loginPage });
  };


  useEffect(()=> {
    if (selectedIngredients) {
    const temp = selectedIngredients.map((element) => element._id)
    setOrderIngredients(temp)
    }
  },[selectedIngredients])

  const addNewOrder = useCallback(() => {
    if (selectedBun) {
      orderIngredients.push(selectedBun._id);
    }
  }, [orderIngredients, selectedBun]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item : IDropItem) {
      if (item.data.type === 'bun') {
        dispatch({type: ADD_INGREDIENT_BUN_ORDER, data: item.data})
      } else {
        dispatch({type: ADD_INGREDIENT_ORDER, data: item.data})
      }
    },
  });

  useEffect(() => {
    addNewOrder();
  }, [addNewOrder]);

  useEffect(() => {

  },[userData])

  return (
    <section ref={dropTarget} className={`${styles.container} mr-5 pl-4`}>
       {modalActive && (
        <Modal title="" onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
      <ul className={`${styles.itemList} mt-25`}>
        {selectedBun ? (
          <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${selectedBun.name} (верх)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image_mobile}
            />
          </li>
        ) : (
          <li className={`${styles.item} mr-4`}>
            <div
              className={`${styles.bunNotSelected} ${styles.bunNotSelected_type_top}`}
            >
              Добавьте булочку
            </div>
          </li>
        )}

        <li>
          {selectedIngredients?.length === 0 ? (
            <div style={{ textAlign: "center" }} className="p-5">
              <p
                className={`${styles.nonIngredients} text text_type_main-small`}
              >
                Добавьте ингредиенты
              </p>
            </div>
          ) : (
            <ul className={`${styles.listScroll} mt-4 mb-4`}>
              {selectedIngredients?.length > 0
                ? selectedIngredients.map((element, index) => (
                    <ConstructorItem
                      key={element.uniqueId}
                      element={element}
                      index={index}
                      moveListItem={moveListItem}
                    />
                ))
                : null}
            </ul>
          )}
        </li>

        {selectedBun ? (
          <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image_mobile}
            />
          </li>
        ) : (
          <li className={`${styles.item} mr-4`}>
            <div
              className={`${styles.bunNotSelected} ${styles.bunNotSelected_type_bottom}`}
            >
              Добавьте булочку
            </div>
          </li>
        )}
      </ul>

      <div className={`${styles.order} mr-4 mt-10`}>
        <div className={styles.total}>
          <span className={styles.price}>{totalSum}</span>
          <img className={styles.currency} src={currency} alt="#" />
        </div>
        <Button
          type = "primary"
          size="large"
          onClick={userData ? handleSubmitOrderClick : handleSignIn}
          htmlType={"button"}
        >
          {userData ? "Оформить заказ" : "Войти"}
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;

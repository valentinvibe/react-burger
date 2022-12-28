import styles from './burger-constructor.module.css';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
  OPEN_ORDER_MODAL,
  ADD_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  SORT_INGREDIENTS
} from '../../services/actions/actions';
import { addOrder } from '../../services/actions/order';
import { useDrop } from 'react-dnd';

import ConstructorItem from './components/constructor-item';
import { useHistory } from 'react-router-dom';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(store => store.construct.data);
  const selectedBun = useSelector(store => store.construct.bun);
  let stateOrder = useSelector(store => store.construct.data)
  const userData = useSelector((store) => store.user.userData);
  const history = useHistory();

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = selectedIngredients[dragIndex]
      const hoverItem = selectedIngredients[hoverIndex]

      const updatedIngredients = [...selectedIngredients]
      updatedIngredients[dragIndex] = hoverItem
      updatedIngredients[hoverIndex] = dragItem

      dispatch({
        type: SORT_INGREDIENTS,
        payload: updatedIngredients
      })
    }, [selectedIngredients, dispatch]
  )

  const totalSum = useMemo(() =>
    selectedIngredients.reduce(
      (sum, ingredient) => sum + ingredient.price, selectedBun.price ? selectedBun.price * 2 : 0 ),
    [selectedIngredients, selectedBun]
  );

  const handleSubmitOrderClick = () => {
    if (stateOrder.length !== 0) {
      dispatch(addOrder(orderIngredients));
      dispatch({type: OPEN_ORDER_MODAL})
    }
  }

  const handleSignIn = () => {
    history.replace({pathname: '/login'})
  }

  const orderIngredients = useMemo(
    () =>
    selectedIngredients.map(element => element._id),
    [selectedIngredients]
  );

  const addNewOrder = useCallback(() => {
    if (selectedBun) {
      orderIngredients.push(selectedBun._id)
    }
  }, [orderIngredients,selectedBun])

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch({
        type: item.data.type === 'bun' ? ADD_INGREDIENT_BUN_ORDER : ADD_INGREDIENT_ORDER,
        payload: item
      })
    }
  });

  useEffect(() => {
    addNewOrder();
  }, [addNewOrder]);


  return (
    <section ref={dropTarget} className={`${styles.container} mr-5 pl-4`}>
      <ul className={`${styles.itemList} mt-25`}>
      { selectedBun._id ? (
        <li className={`${styles.item} mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectedBun.name} (верх)`}
            price={selectedBun.price ? selectedBun.price : null}
            thumbnail={selectedBun.image_mobile}
          />
        </li>
        ) : (
          <li className={`${styles.item} mr-4`}>
            <div className={`${styles.bunNotSelected} ${styles.bunNotSelected_type_top}`}>Добавьте булочку</div>
          </li>
        )}

        <li>
        {selectedIngredients.length === 0 ? (<div style={{ textAlign : "center" }} className="p-5">
          <p className={`${styles.nonIngredients} text text_type_main-small`}>Добавьте ингредиенты</p>
        </div>) : (
          <ul className={`${styles.listScroll} mt-4 mb-4`}>
            {selectedIngredients.length > 0 ? selectedIngredients.map((element,index) =>
              <ConstructorItem key={element._id+index} element={element} index={index} moveListItem={moveListItem}/>
            ) : null}
          </ul>
          )}
        </li>

        { selectedBun._id ? (
        <li className={`${styles.item} mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectedBun.name} (низ)`}
            price={selectedBun.price ? selectedBun.price : null}
            thumbnail={selectedBun.image_mobile}
          />
        </li>) : (
          <li className={`${styles.item} mr-4`}>
            <div className={`${styles.bunNotSelected} ${styles.bunNotSelected_type_bottom}`}>Добавьте булочку</div>
        </li>
        )}
      </ul>

      <div className={`${styles.order} mr-4 mt-10`}>
        <div className={styles.total}>
          <span className={styles.price}>{totalSum}</span>
          <img className={styles.currency} src={currency} alt="#"/>
      </div>
        <Button 
          type="primary" 
          size="large" 
          onClick={ userData ? handleSubmitOrderClick : handleSignIn }
          htmlType={'button'}
          >
          {userData ? 'Оформить заказ' : 'Войти'}
        </Button>
      </div>
    </section>
  )
}


export default BurgerConstructor

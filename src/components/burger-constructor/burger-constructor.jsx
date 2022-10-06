import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import { useMemo, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
  OPEN_ORDER_MODAL,
  addOrder,
  ADD_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  delOrderIngredient,
  SORT_INGREDIENTS
} from '../../services/actions/actions';
import { useDrop, useDrag } from 'react-dnd';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(store => store.data.selectedIngredient.data);
  const selectedBun = useSelector(store => store.data.selectedIngredient.bun);

  const totalSum = useMemo(() =>
      selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price, selectedBun.price ? selectedBun.price * 2 : 0 ),
    [selectedIngredients, selectedBun]
  );

  const handleSubmitOrderClick = () => {
    dispatch({type: OPEN_ORDER_MODAL});
    dispatch(addOrder(orderIngredients));
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
      if (item.data.type === 'bun') {
        dispatch({
          type: ADD_INGREDIENT_BUN_ORDER,
          payload: item
        })
      } else {
        dispatch({
          type: ADD_INGREDIENT_ORDER,
          payload: item
        })
      }
    }
  });

  const onHandleClose = (index) => {
   dispatch(delOrderIngredient(selectedIngredients, index))

  }

  const dragItem = useRef(null)
	const dragOverItem = useRef(null)

  const handleSort = () => {
    let selectedItems = [...selectedIngredients]
    const draggedItemContent = selectedItems.splice(dragItem.current, 1)[0]
    selectedItems.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current = null
    dragOverItem.current = null
    dispatch({
      type: SORT_INGREDIENTS,
      payload: selectedItems
    })
	}


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

              {selectedIngredients.length > 0 ? selectedIngredients.map((element,index) => {
                return(
                  <li 
                    key={index}
                    draggable
                    className={`${styles.item} mr-2`}
                    onDragStart={(e) => (dragItem.current = index)}
						        onDragEnter={(e) => (dragOverItem.current = index)}
						        onDragEnd={handleSort}
						        onDragOver={(e) => e.preventDefault()}
                    >
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={element.name}
                      price={element.price ? element.price : 0}
                      thumbnail={element.image_mobile}
                      handleClose={() => onHandleClose(index)}
                    />
                  </li>)
              }) : null}
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
            <span className={styles.price}>{totalSum ? totalSum : 0}</span>
            <img className={styles.currency} src={currency} alt="#"/>
        </div>
          <Button type="primary" size="large" onClick={handleSubmitOrderClick}>
            Оформить заказ
          </Button>
        </div>
      </section>
  )
}


export default BurgerConstructor

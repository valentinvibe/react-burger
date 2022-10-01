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
  delOrderIngredient
} from '../../services/actions/actions';
import { useDrop, useDrag } from 'react-dnd';

const BurgerConstructor = () => {
  // const data = useSelector(store => store.data.ingredients);
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
///////////////////////////////////////////////////////////////
const [{ isDragging }, adragRef] = useDrag({
  type: 'item',
  // item: dragDropRef.current,
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
})

const [spec, dropRef] = useDrop({
  accept: 'item',
  hover: (item, monitor) => {
    const dragIndex = item.key
    const hoverIndex = item.key
    const hoverBoundingRect = ref.current.getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top


    if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return

    if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

    // moveListItem(dragIndex, hoverIndex)
    item.index = hoverIndex
  },
})

const ref = useRef(null)
const dragDropRef = adragRef(dropRef(ref))
const opacity = isDragging ? 0 : 1


///////////////////////////////////////////////////////////////
  const onHandleClose = (index) => {
   dispatch(delOrderIngredient(selectedIngredients, index))
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
                  <li ref={dragDropRef} key={index} className={`${styles.item} mr-2`}>
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

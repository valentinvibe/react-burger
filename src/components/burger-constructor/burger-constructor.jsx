import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { OPEN_ORDER_MODAL, addOrder } from '../../services/actions/actions';

const BurgerConstructor = () => {
  const data = useSelector(store => store.data.ingredients);
  const dispatch = useDispatch();

  const selectedIngredients = useSelector(store => store.data.selectedIngredient);

  const selectBun = (ingredient) => {
    return ingredient.type == 'bun'
  }
  let selectedBun = selectedIngredients.find(selectBun);

  const totalSum = useMemo(
    () =>
      selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price,
        selectedBun ? selectedBun.price * 2 : 0
      ),
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

  const addNewOrder = () => {
    if (selectedBun) {
      orderIngredients.push(selectedBun._id)
    }
  }


  useEffect(() => {
    addNewOrder();
  }, []);

  return (
      <section className={`${styles.container} mr-5 pl-4`}>
        <ul className={`${styles.itemList} mt-25`}>
          {selectedBun === 'undefined' ? (
          <li className={`${styles.item} mr-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedBun.name} (верх)`}
                price={selectedBun.price ? data[0].price : 0}
                thumbnail={selectedBun.image_mobile}
              />
          </li>
          ) : (
            <li className={`${styles.item} mr-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`добавьте булочку`}
                price={undefined}
                thumbnail={undefined}
              />
          </li>
          )}

          <li>
          {selectedIngredients.length === 0 ? (<div style={{ textAlign : "center" }} className="p-5">
            <p className={`text text_type_main-small`}>Добавьте ингредиенты</p>
          </div>) : (
            <ul className={`${styles.listScroll} mt-4 mb-4`}>

              {selectedIngredients.length > 0 ? selectedIngredients.map(element => {
                return(
                  <li key={element._id} className={`${styles.item} mr-2`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={element.name}
                      price={element.price ? element.price : 0}
                      thumbnail={element.image_mobile}
                    />
                  </li>)
              }) : null}
            </ul>
            )}
          </li>

          {selectedBun === 'undefined' ? (
          <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price ? data[0].price : 0}
              thumbnail={selectedBun.image_mobile}
            />
          </li>) : (
            <li className={`${styles.item} mr-4`}>
              <ConstructorElement
                 type="bottom"
                isLocked={true}
                text={`добавьте булочку`}
                price={undefined}
                thumbnail={undefined}
              />
          </li>
          )}
        </ul>

        <div className={`${styles.order} mr-4 mt-10`}>
          <div className={styles.total}>
            <span className={styles.price}>{totalSum}</span>
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

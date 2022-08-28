import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from '../../utils/prop-types';
import { DataContext } from '../services/data-context';
import { useContext, useEffect, useMemo, useState } from 'react';
import { OrderContext } from "../services/order-context";

const BurgerConstructor = ({toggleModal}) => {
  const {data} = useContext(DataContext);
  const {setOrder} = useContext(OrderContext);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const selectBun = (ingredient) => {
    return ingredient.type == 'bun'
  }
  let selectedBun = data.find(selectBun);

  const totalSum = useMemo(
    () =>
      selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.price,
        selectedBun ? selectedBun.price * 2 : 0
      ),
    [selectedIngredients, selectedBun]
  );

  const addNewOrder = () => {
    let orderIngredients = data.filter(element => element.type !== 'bun');
    orderIngredients = orderIngredients.map(element => element._id);
    orderIngredients.push(selectedBun._id)
    return orderIngredients
  }


  useEffect(() => {
    setOrder(addNewOrder());
    setSelectedIngredients(data.filter(element => element.type !== 'bun'));

  }, []);

  return (
      <section className={`${styles.container} mr-5 pl-4`}>
        <ul className={`${styles.itemList} mt-25`}>
          <li className={`${styles.item} mr-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedBun.name} (верх)`}
                price={selectedBun.price ? data[0].price : 0}
                thumbnail={selectedBun.image_mobile}
              />
          </li>

          <li>
          {selectedIngredients.length === 0 ? (<div style={{ textAlign : "center" }} className="p-5">
            <p className={`text text_type_main-small`}>Добавьте ингредиенты</p>
          </div>) : (
            <ul className={`${styles.listScroll} mt-4 mb-4`}>

              {selectedIngredients ? selectedIngredients.map(element => {
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

          <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price ? data[0].price : 0}
              thumbnail={selectedBun.image_mobile}
            />
          </li>
        </ul>

        <div className={`${styles.order} mr-4 mt-10`}>
          <div className={styles.total}>
            <span className={styles.price}>{totalSum}</span>
            <img className={styles.currency} src={currency} alt="#"/>
        </div>
          <Button type="primary" size="large" onClick={toggleModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes),
  setOrder: PropTypes.func,
  selectedIngredients : PropTypes.array,
  setSelectedIngredients : PropTypes.func,
  toggleModal : PropTypes.func
}


export default BurgerConstructor

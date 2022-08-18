import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from '../../utils/prop-types';
import { selectedIngredients } from '../../utils/data';


const BurgerConstructor = (props) => {
  return (
      <section className={`${styles.container} mr-5 pl-4`}>
        <ul className={`${styles.itemList} mt-25`}>
        <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
            />
          </li>
          <li>
            <ul className={`${styles.listScroll} mt-4 mb-4`}>
              {selectedIngredients.map(element => {
                return(
                  <li key={element._id} className={`${styles.item} mr-2`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={element.name}
                      price={element.price}
                      thumbnail={element.image_mobile}
                    />
                  </li>)
              })}
            </ul>
          </li>

          <li className={`${styles.item} mr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={props.data[0].price}
              thumbnail={props.data[0].image_mobile}
            />
          </li>
        </ul>
        <div className={`${styles.order} mr-4 mt-10`}>
          <div className={styles.total}>
            <span className={styles.price}>2000</span>
            <img className={styles.currency} src={currency} alt="#"/>
        </div>
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes).isRequired
}


export default BurgerConstructor

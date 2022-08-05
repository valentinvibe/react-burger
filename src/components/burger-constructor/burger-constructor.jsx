import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from '../../utils/prop-types';

const BurgerConstructor = (props) => {
  return (
    <>
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
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[1].price}
                  thumbnail={props.data[1].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Биокотлета из марсианской Магнолии"
                  price={props.data[2].price}
                  thumbnail={props.data[2].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[3].price}
                  thumbnail={props.data[3].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[4].price}
                  thumbnail={props.data[4].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[5].price}
                  thumbnail={props.data[5].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[6].price}
                  thumbnail={props.data[6].image_mobile}
                />
              </li>
              <li className={`${styles.item} mr-2`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text="Говяжий метеорит (отбивная)"
                  price={props.data[7].price}
                  thumbnail={props.data[7].image_mobile}
                />
              </li>
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
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes)
}


export default BurgerConstructor

import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data.js';
import currency from "../../images/currency.png";

const BurgerConstructor = () => {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={20}
              thumbnail={data[0].image_mobile}
            />
          </li>
          <li className={styles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail={data[1].image_mobile}
            />
          </li>
          <li className={styles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail={data[1].image_mobile}
            />
          </li>
          <li className={styles.item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Говяжий метеорит (отбивная)"
              price={50}
              thumbnail={data[1].image_mobile}
            />
          </li>
          <li className={styles.item}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={20}
              thumbnail={data[0].image_mobile}
            />
          </li>
        </ul>






        <div className={styles.order}>
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

export default BurgerConstructor

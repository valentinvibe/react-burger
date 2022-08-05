import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import currency from "../../images/currency.png";
import PropTypes from 'prop-types';
import { burgerPropTypes } from '../../utils/prop-types';

const selectedIngredients = [
  {
    "_id":"60666c42cc7b410027a1a9b6",
    "name":"Биокотлета из марсианской Магнолии",
    "type":"main",
    "proteins":420,
    "fat":142,
    "carbohydrates":242,
    "calories":4242,
    "price":424,
    "image":"https://code.s3.yandex.net/react/code/meat-01.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
    "__v":0
   },
   {
    "_id":"60666c42cc7b410027a1a9b4",
    "name":"Мясо бессмертных моллюсков Protostomia",
    "type":"main",
    "proteins":433,
    "fat":244,
    "carbohydrates":33,
    "calories":420,
    "price":1337,
    "image":"https://code.s3.yandex.net/react/code/meat-02.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
    "__v":0
   },
   {
    "_id":"60666c42cc7b410027a1a9b9",
    "name":"Соус традиционный галактический",
    "type":"sauce",
    "proteins":42,
    "fat":24,
    "carbohydrates":42,
    "calories":99,
    "price":15,
    "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
    "__v":0
   },
   {
    "_id":"60666c42cc7b410027a1a9bc",
    "name":"Плоды Фалленианского дерева",
    "type":"main",
    "proteins":20,
    "fat":5,
    "carbohydrates":55,
    "calories":77,
    "price":874,
    "image":"https://code.s3.yandex.net/react/code/sp_1.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
    "__v":0
   },
   {
    "_id":"60666c42cc7b410027a1a9bb",
    "name":"Хрустящие минеральные кольца",
    "type":"main",
    "proteins":808,
    "fat":689,
    "carbohydrates":609,
    "calories":986,
    "price":300,
    "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    "__v":0
   }
]

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

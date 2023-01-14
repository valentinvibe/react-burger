import styles from './order-card.module.css';
import currency from '../../../../images/currency.png';
import IngredientImage from '../ingredient-image/ingredient-image';

const OrderCard = () => {
    return(
        <li className={`${styles.wrapper}`}>
          <div className={styles.orderId}>
            <p className='text text_type_digits-default'>#345345345</p>
            <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20</p>
          </div>
          <p className='mt-6 mb-6 text text_type_main-medium'>Death Star Starship Main бургер</p>
          <div className={styles.orderInfo}>
            <div className={styles.ingredients}>
                <IngredientImage/>
                <IngredientImage/>
                <IngredientImage/>
                <IngredientImage/>
                <IngredientImage/>
            </div>
            <div className={styles.totalPrice}>
                <span className='text text_type_digits-default'>480</span>
                <img className={styles.currency} src={currency} alt="Валюта"/>
            </div>
          </div>
        </li>
        
    )
}

export default OrderCard;
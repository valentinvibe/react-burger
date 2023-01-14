import styles from './orders-stats.module.css';

const OrdersStats = () => {
    return(
        <div className={styles.wrapper}>
          <div className={`${styles.ordersCount} mb-15`}>
            <div className={styles.ordersStatus}>
              <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
              <div className={styles.ordersNumbers}>
                <p className={`${styles.orderNumber} text text_type_digits-default`}>343434</p>
                <p className={`${styles.orderNumber} text text_type_digits-default`}>343435</p>
                <p className={`${styles.orderNumber} text text_type_digits-default`}>343435</p>
                <p className={`${styles.orderNumber} text text_type_digits-default`}>343437</p>
              </div>
            </div>
            <div className={styles.ordersStatus}>
              <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
              <div className={styles.ordersNumbers}>
                <p className='text text_type_digits-default'>034538</p>
                <p className='text text_type_digits-default'>034541</p>
                <p className='text text_type_digits-default'>034542</p>
                <p className='text text_type_digits-default'>034543</p>
              </div>
            </div>
          </div>

          <div className={`${styles.doneAllTimes} mb-15`}>
            <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
            <p className={`${styles.totalCount} text text_type_digits-large`}>28 752</p>
          </div>

          <div className={`${styles.doneToday}`}>
            <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
            <p className={`${styles.totalCount} text text_type_digits-large`}>138</p>
          </div>
        </div>
        
    )
}

export default OrdersStats;
import OrdersStats from '../../components/orders-stats/orders-stats';
import Orders from '../../components/orders/orders';
import styles from './feed-page.module.css';

const Feed = () => {
    return(
        <main className={styles.wrapper}>
        <h2 className={`${styles.title} text text_type_main-large`}>Лента заказов</h2>
        <div className={styles.container}>
            <Orders/>
            <OrdersStats/>
        </div>
        </main>
    )
}

export default Feed;
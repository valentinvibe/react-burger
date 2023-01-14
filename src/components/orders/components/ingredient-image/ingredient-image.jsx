import styles from './ingredient-image.module.css';

const IngredientImage = ({image, alt}) => {
    return (
      <div className={styles.content}>
        <div className={styles.item}>
          <img className={styles.image} src={image} alt={alt}/>
        </div>
      </div>
      );
}

export default IngredientImage;
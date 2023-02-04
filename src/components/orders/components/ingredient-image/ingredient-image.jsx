import styles from "./ingredient-image.module.css";

const IngredientImage = ({ image, alt, hide=false }) => {
  return (
    <div className={hide ? (`${styles.content} ${styles.hide}`) : (`${styles.content}`)}>
      <div className={styles.item}>
        <img className={styles.image} src={image} alt={alt} />
      </div>
    </div>
  );
};

export default IngredientImage;

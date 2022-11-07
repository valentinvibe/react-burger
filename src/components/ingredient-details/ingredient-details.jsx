import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const ingredient = useSelector(store => store.modal.detailsIngredient);

  return (
    <div className={styles.content}>
      <img
        className={`mt-3 ${styles.content__image}`}
        alt={ingredient.name}
        src={ingredient.image_large}
      />
      <p className="text text_type_main-medium mt-4 ">{ingredient.name}</p>
      <ul className={`mt-8 ${styles.content__nutritionList}`}>
        <li className={styles.content__nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.content__nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.content__nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </li>
        <li className={styles.content__nutritionItem}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails

import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getData } from "../../utils/functions";

const IngredientDetails = ({ title }) => {
  const { id } = useParams();
  const ingredients = useSelector(getData);
  const selectedIngredient = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  return (
    <>
      {selectedIngredient && (
        <div className={styles.content}>
          {title && (
            <h2 className={`${styles.title} text text_type_main-large`}>
              {title}
            </h2>
          )}
          <img
            className={`mt-3 ${styles.content__image}`}
            alt={selectedIngredient.name}
            src={selectedIngredient.image_large}
          />
          <p className="text text_type_main-medium mt-4 ">
            {selectedIngredient.name}
          </p>
          <ul className={`mt-8 ${styles.content__nutritionList}`}>
            <li className={styles.content__nutritionItem}>
              <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {selectedIngredient.calories}
              </p>
            </li>
            <li className={styles.content__nutritionItem}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {selectedIngredient.proteins}
              </p>
            </li>
            <li className={styles.content__nutritionItem}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {selectedIngredient.fat}
              </p>
            </li>
            <li className={styles.content__nutritionItem}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text text_type_digits-default text_color_inactive">
                {selectedIngredient.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

IngredientDetails.propTypes = {
  title: PropTypes.string,
};

export default IngredientDetails;

import { getIngredients } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "./actions";
import { baseUrl } from "../../utils/variables";

export function getItems() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    getIngredients(baseUrl).then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          items: res.data,
        });
      } else {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      }
    });
  };
}

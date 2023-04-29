import { getIngredients } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "./actions";
import { baseUrl } from "../../utils/variables";
import { AppDispatch } from "../types";
import { v4 as uuid } from "uuid";
import { TConstructorIngredient } from "../types";

  
export function getItems() {
  return function (dispatch : AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });

    getIngredients(baseUrl).then((res) => {
      if (res && res.success) {
        let temp : Array<TConstructorIngredient> = res.data;
        const data : Array<TConstructorIngredient> = temp.map((element) => {
          return element = {...element, 'uniqueId': uuid()}
        });
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          items: data,
        });
      } else {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      }
    })
    .catch((err) => {
      console.log(err)
    });
  };
}

import { baseUrl } from "../../utils/variables";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  REMOVE_INGREDIENT_ORDER,
} from "./actions";
import { addNewOrder } from "../../utils/api";
import { AppDispatch, TConstructorIngredient } from "../types";

export function addOrder(order : Array<string>) {
  return function (dispatch : AppDispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });
    addNewOrder(baseUrl, order)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: CREATE_ORDER_SUCCESS,
            item: res.order.number,
          });
        }
      })
      .catch(() => {
        dispatch({ type: CREATE_ORDER_FAILED });
      });
  };
}

export function delOrderIngredient(selectedIngredients : Array<TConstructorIngredient>, index : number) {
  return function (dispatch : AppDispatch) {
    const cloneArr = selectedIngredients.slice();
    cloneArr.splice(index, 1);
    dispatch({
      type: REMOVE_INGREDIENT_ORDER,
      data: cloneArr,
    });
  };
}

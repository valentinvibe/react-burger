import { baseUrl } from "../../utils/variables"
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  REMOVE_INGREDIENT_ORDER
} from './actions'
import { addNewOrder } from "../../utils/api"

export function addOrder(order) {
  return function(dispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST
    })
    addNewOrder(baseUrl, order)
      .then(res=> {
        if (res && res.success) {
          dispatch({
            type: CREATE_ORDER_SUCCESS,
            item: res.order.number
          })
        } else {
            dispatch({type: CREATE_ORDER_FAILED})
        }
      })
  }
}

export function delOrderIngredient(selectedIngredients, index) {
  return function(dispatch) {
    const cloneArr = selectedIngredients.slice();
    cloneArr.splice(index,1);
    dispatch({
      type: REMOVE_INGREDIENT_ORDER,
      payload: cloneArr
    })
  }
}

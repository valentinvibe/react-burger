import { getIngredients, addNewOrder} from "../../utils/api";
import { baseUrl } from "../../utils/variables";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const CLOSE_INGREDIENT_MODAL = 'CLOSE_INGREDIENT_MODAL';
export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';
export const SET_INGREDIENT_INFO = 'SET_INGREDIENT_INFO';
export const SET_ORDER_INFO = 'SET_ORDER_INFO';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const ADD_INGREDIENT_ORDER = 'ADD_INGREDIENT_ORDER';
export const REMOVE_INGREDIENT_ORDER = 'REMOVE_INGREDIENT_ORDER';
export const ADD_INGREDIENT_BUN_ORDER = 'ADD_INGREDIENT_BUN_ORDER';
export const DEL_ORDER_NUMBER = 'DEL_ORDER_NUMBER';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';





export function getItems() {
    return function(dispatch) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });

      getIngredients(baseUrl).then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data
        })
        } else {
            dispatch({type: GET_INGREDIENTS_FAILED})
        }
    })
    }
}

export function addOrder(order) {
  return function(dispatch) {
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
    let cloneArr = [...selectedIngredients]
    cloneArr.splice(index,1);
    dispatch({
      type: REMOVE_INGREDIENT_ORDER,
      payload: cloneArr
    })
  }
}

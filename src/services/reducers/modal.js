// import { initialState } from "./reducers"
import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  SET_INGREDIENT_INFO
} from '../actions/actions'

const initialState = {
  ingredientModal: false,
  detailsIngredient: [],
  orderModal: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientModal: true
      }
    }
    case CLOSE_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientModal: false,
        detailsIngredient: []
      }
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        orderModal: true
      }
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        orderModal: false
      }
    }
    case SET_INGREDIENT_INFO: {
      return {
        ...state,
        detailsIngredient: action.item
      }
    }
    default: {
      return state
    }
  }

}

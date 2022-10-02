import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  CLOSE_INGREDIENT_MODAL,
  OPEN_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  SET_INGREDIENT_INFO,
  CREATE_ORDER_SUCCESS,
  ADD_INGREDIENT_ORDER,
  REMOVE_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  DEL_ORDER_NUMBER,
  SORT_INGREDIENTS
} from '../actions/actions'

const initialState = {
  ingredients: [],
  selectedIngredient: {
    bun: {},
    data: []
  },
  detailsIngredient: [],
  order: null,
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientModal: false,
  orderModal: false
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.items
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true
      }
    }
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
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.item
      }
    }

    case ADD_INGREDIENT_ORDER: {
      return {
        ...state,
        selectedIngredient: {
          ...state.selectedIngredient,
          data: [
	          ...state.selectedIngredient.data,
	          action.payload.data
          ]
        }
      }
    }
    case ADD_INGREDIENT_BUN_ORDER: {
      return {
        ...state,
        selectedIngredient: {
          ...state.selectedIngredient,
          bun: action.payload.data
        }
      }
    }
    case REMOVE_INGREDIENT_ORDER: {
      return {
        ...state,
        selectedIngredient: {
          ...state.selectedIngredient,
          data: action.payload
        }
      }
    }
    case DEL_ORDER_NUMBER: {
      return {
        ...state,
        order: null
      }
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        selectedIngredient: {
          ...state.selectedIngredient,
          data: action.payload
        }
      }
    }
    default: {
      return state
    }
  }
}

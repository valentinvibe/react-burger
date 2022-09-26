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
  REMOVE_INGREDIENT_ORDER
} from '../actions/actions'

const initialState = {
  ingredients: [],
  selectedIngredient: [
    {
      "_id":"60666c42cc7b410027a1a9b2",
      "name":"Флюоресцентная булка R2-D3",
      "type":"bun",
      "proteins":44,
      "fat":26,
      "carbohydrates":85,
      "calories":643,
      "price":988,
      "image":"https://code.s3.yandex.net/react/code/bun-01.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
      "__v":0
     },
     {
      "_id":"60666c42cc7b410027a1a9b9",
      "name":"Соус традиционный галактический",
      "type":"sauce",
      "proteins":42,
      "fat":24,
      "carbohydrates":42,
      "calories":99,
      "price":15,
      "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
      "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
      "__v":0
     }
  ],
  detailsIngredient: [],
  order: 0,
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
        selectedIngredient: [
          ...state.selectedIngredient,
          action.payload.data
        ]
      }
    }
    default: {
      return state
    }
  }
}

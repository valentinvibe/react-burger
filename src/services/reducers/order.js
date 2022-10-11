import {
  CREATE_ORDER_SUCCESS,
  DEL_ORDER_NUMBER
} from '../actions/actions'

const initialState = {
  order: null
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.item
      }
    }
    case DEL_ORDER_NUMBER: {
      return {
        ...state,
        order: null
      }
    }
    default: {
      return state
    }
  }
}

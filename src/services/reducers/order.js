import {
  CREATE_ORDER_SUCCESS,
  DEL_ORDER_NUMBER,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAILED
} from '../actions/actions'

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        order: action.item
      }
    }
    case DEL_ORDER_NUMBER: {
      return {
        ...state,
        order: null
      }
    }
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    }
    default: {
      return state
    }
  }
}

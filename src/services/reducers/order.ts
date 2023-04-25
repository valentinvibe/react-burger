import {
  CREATE_ORDER_SUCCESS,
  DEL_ORDER_NUMBER,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAILED,
} from "../actions/actions";

import { TOrderActions } from "../types/order";

export interface TOrderState {
  order: number | null,
  orderRequest: boolean,
  orderFailed: boolean
}

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state : TOrderState = initialState, action : TOrderActions) => {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        order: action.item,
      };
    }
    case DEL_ORDER_NUMBER: {
      return {
        ...state,
        order: null,
      };
    }
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case CREATE_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};

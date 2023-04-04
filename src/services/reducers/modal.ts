import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
  SET_INGREDIENT_INFO,
  CLOSE_MODAL,
  OPEN_MODAL,
  OPEN_FEED_MODAL,
  CLOSE_FEED_MODAL,
  OPEN_PROFILE_MODAL,
  CLOSE_PROFILE_MODAL
} from "../actions/actions";

import { TModalActions } from "../types/modal-types";
import { TIngredient } from "../types";

export interface IinitialState {
  ingredientModal: boolean,
  detailsIngredient: Array<TIngredient>,
  orderModal: boolean,
  isOpen: boolean,
  isFeedOrderOpen: boolean,
  isProfileOrderOpen: boolean
}

const initialState = {
  ingredientModal: false,
  detailsIngredient: [],
  orderModal: false,
  isOpen: false,
  isFeedOrderOpen: false,
  isProfileOrderOpen: false
};

export const modalReducer = (state : IinitialState = initialState, action : TModalActions) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientModal: true,
      };
    }
    case CLOSE_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredientModal: false,
        detailsIngredient: [],
      };
    }
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        orderModal: true,
      };
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        orderModal: false,
      };
    }
    case SET_INGREDIENT_INFO: {
      return {
        ...state,
        detailsIngredient: action.item,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case OPEN_FEED_MODAL: {
      return {
       ...state,
        isFeedOrderOpen: true,
      };
    }
    case CLOSE_FEED_MODAL: {
      return {
      ...state,
      isFeedOrderOpen: false,
      };
    }
    case OPEN_PROFILE_MODAL: {
      return {
      ...state,
      isProfileOrderOpen: true,
      };
    }
    case CLOSE_PROFILE_MODAL: {
      return {
     ...state,
     isProfileOrderOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

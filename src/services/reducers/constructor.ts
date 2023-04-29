import {
  ADD_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  REMOVE_INGREDIENT_ORDER,
  SORT_INGREDIENTS,
  CLEAR_CHOOSEN_INGREDIENTS,
} from "../actions/actions";

import { TConstructorActions } from "../actions/constructor";
import { TConstructorIngredient, TIngredient } from "../types";

type IConstructorState = {
  data: Array<TConstructorIngredient>,
  bun: TIngredient | null,
}

const initialState : IConstructorState = {
  data: [],
  bun: null,
};

export const constructorReducer = (state = initialState, action : TConstructorActions) : IConstructorState => {
  switch (action.type) {
    case ADD_INGREDIENT_ORDER: {
      return {
        ...state,
        data: [...state.data, action.data],
      };
    }
    case ADD_INGREDIENT_BUN_ORDER: {
      return {
        ...state,
        bun: action.data,
      };
    }
    case REMOVE_INGREDIENT_ORDER: {
      return {
        ...state,
        data: action.data,
      };
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        data: action.data,
      };
    }
    case CLEAR_CHOOSEN_INGREDIENTS: {
      return {
        ...state,
        data: [],
        bun: null,
      };
    }
    default: {
      return state;
    }
  }
};

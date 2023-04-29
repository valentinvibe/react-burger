import { TConstructorIngredient, TIngredient } from '../types';
import {
  ADD_INGREDIENT_ORDER,
  ADD_INGREDIENT_BUN_ORDER,
  REMOVE_INGREDIENT_ORDER,
  SORT_INGREDIENTS,
  CLEAR_CHOOSEN_INGREDIENTS,
} from './actions';


export interface IAddIngredientOrder {
    readonly type: typeof ADD_INGREDIENT_ORDER,
    readonly data: TConstructorIngredient
}

export interface IAddIngredientBunOrder {
    readonly type: typeof ADD_INGREDIENT_BUN_ORDER,
    readonly data: TIngredient
}

export interface IRemoveIngredientOrder {
    readonly type: typeof REMOVE_INGREDIENT_ORDER
    readonly data: TConstructorIngredient[]
}

export interface ISortIngredients {
    readonly type: typeof SORT_INGREDIENTS
    readonly data: TConstructorIngredient[]
}

export interface IClearChoosenIngredients {
    readonly type: typeof CLEAR_CHOOSEN_INGREDIENTS,
    data: TConstructorIngredient[],
    bun: TIngredient | null
}

export type TConstructorActions = 
    IAddIngredientBunOrder |
    IAddIngredientOrder |
    IRemoveIngredientOrder |
    ISortIngredients |
    IClearChoosenIngredients
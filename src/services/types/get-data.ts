import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    
  } from "../actions/actions";


import { Tingredient } from "./index";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}
  
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: Array<Tingredient>
}
  
export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED
}
  
export type TIngredientsActions = 
    IGetIngredientsRequest |
    IGetIngredientsSuccess |
    IGetIngredientsFailed


export type TWSActions = {
  wsInit: string;
  wsSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}
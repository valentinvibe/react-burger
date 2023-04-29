import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    
  } from "../actions/actions";


import { TConstructorIngredient } from "./index";

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}
  
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly items: Array<TConstructorIngredient>
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

export type TFeed = {
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export type TFeedResponse = {
	success: boolean;
	total: number;
	totalToday: number;
	orders: Array<TFeed>;
}
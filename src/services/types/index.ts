import store from "../store";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { Dispatch } from "redux";

export type TIngredient = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
    _id: string
}

export type TConstructorIngredient = TIngredient & {
	id: string;
}

type TApplicationActions = TTodoActions;
export type RootState = ReturnType<typeof store.getState>; 
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

export type AppDispatch = Dispatch<TApplicationActions>; 

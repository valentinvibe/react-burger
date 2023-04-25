import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { rootReducer } from "../reducers";
import { TConstructorActions } from "../actions/constructor";
import { TIngredientsActions } from "./get-data";
import { TModalActions } from "./modal-types";
import { TUserActions } from "./user";
import { TWSFeedActions } from "./ws-feed";
import { TWSOrderActions } from "./ws-order";
import { TOrderActions } from "./order";

export type TLocationState = {
  background?: {
    pathname: string;
    search: string;
    hash: string;
    state: null
  }
  state?: object
  from: {
    pathname: string;
  }
};

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

export type TAppActions = 
  TConstructorActions |
  TIngredientsActions |
  TModalActions |
  TUserActions |
  TWSFeedActions |
  TWSOrderActions |
  TOrderActions


export type RootState = ReturnType<typeof rootReducer>; 
export type AppDispatch = Dispatch<TAppActions>; 
// export type AppThunk<ReturnType = void> = ActionCreator<
//   ThunkAction<ReturnType, Action, RootState, TAppActions>
// >; 

export type AppThunk<ReturnType = void> = ActionCreator<
	ThunkAction<ReturnType, Action, RootState, TAppActions>
>;


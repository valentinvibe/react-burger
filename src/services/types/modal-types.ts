import { type } from "os";
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

export interface IOpenIngredientModal {
  readonly type: typeof OPEN_INGREDIENT_MODAL
}

export interface ICloseIngredientModal {
  readonly type: typeof CLOSE_INGREDIENT_MODAL
}

export interface IOpenOrderModal {
  readonly type: typeof OPEN_ORDER_MODAL
}

export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL
}

export interface ISetIngredientInfo {
  readonly type: typeof SET_INGREDIENT_INFO
}

export interface ICloseModal {
  readonly type: typeof CLOSE_MODAL
}

export interface IOpenModal {
  readonly type: typeof OPEN_MODAL
}

export interface IOpenFeedModal {
  readonly type: typeof OPEN_FEED_MODAL
}

export interface ICloseFeedModal {
  readonly type: typeof CLOSE_FEED_MODAL
}

export interface IOpenProfileModal {
  readonly type: typeof OPEN_PROFILE_MODAL
}

export interface ICloseProfileModal {
  readonly type: typeof CLOSE_PROFILE_MODAL
}


export type TModalActions = 
  IOpenIngredientModal |
  ICloseIngredientModal |
  IOpenOrderModal |
  ICloseOrderModal |
  ISetIngredientInfo |
  ICloseModal |
  IOpenModal |
  IOpenFeedModal |
  ICloseFeedModal |
  IOpenProfileModal |
  ICloseProfileModal
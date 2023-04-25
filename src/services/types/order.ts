import {
    CREATE_ORDER_SUCCESS,
    DEL_ORDER_NUMBER,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAILED

} from '../actions/actions'

export interface ICreateOrderSuccess {
    readonly type: typeof CREATE_ORDER_SUCCESS
    readonly item: number
}

export interface IDelOrderNumber {
    readonly type: typeof DEL_ORDER_NUMBER
}

export interface ICreateOrderRequest {
    readonly type: typeof CREATE_ORDER_REQUEST
}

export interface ICreateOrderFailed {
    readonly type: typeof CREATE_ORDER_FAILED
}

export type TOrderActions = 
  ICreateOrderSuccess |
  IDelOrderNumber |
  ICreateOrderRequest |
  ICreateOrderFailed

export type TOrder = {
    createdAt: string;
    ingredients: Array<string>;
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
}


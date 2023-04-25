import {
  WS_ORDERS_CONNECTION_START,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_GET_MESSAGE,
  WS_ORDERS_SEND_MESSAGE
} from '../actions/ws-actions-types'
import { TFeedResponse } from './get-data'
import { TOrder } from './order'

export interface IWSOrderConnectionStart {
    readonly type: typeof WS_ORDERS_CONNECTION_START
  }
  
  export interface IWSOrderConnectionSuccess {
      readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS
  }
  
  export interface IWSOrderConnectionError {
      readonly type: typeof WS_ORDERS_CONNECTION_ERROR
      payload: MessageEvent
  }
  
  export interface IWSOrderConnectionClosed {
      readonly type: typeof WS_ORDERS_CONNECTION_CLOSED
  }
  
  export interface IWSOrderGetMessage {
      readonly type: typeof WS_ORDERS_GET_MESSAGE
      payload: TFeedResponse
  }
  
  export interface IWSOrderSendMessage {
      readonly type: typeof WS_ORDERS_SEND_MESSAGE
      payload: TOrder
  }

  export type TWSOrderActions =
    IWSOrderConnectionStart |
    IWSOrderConnectionSuccess |
    IWSOrderConnectionError |
    IWSOrderConnectionClosed |
    IWSOrderGetMessage |
    IWSOrderSendMessage
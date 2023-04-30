import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE
} from '../actions/ws-actions-types'
import { TFeedResponse } from './get-data'
import { TOrder } from './order'

export interface IWSFeedConnectionStart {
  readonly type: typeof WS_FEED_CONNECTION_START
}

export interface IWSFeedConnectionSuccess {
    readonly type: typeof WS_FEED_CONNECTION_SUCCESS
}

export interface IWSFeedConnectionError {
    readonly type: typeof WS_FEED_CONNECTION_ERROR
    payload: MessageEvent
}

export interface IWSFeedConnectionClosed {
    readonly type: typeof WS_FEED_CONNECTION_CLOSED
}

export interface IWSFeedGetMessage {
    readonly type: typeof WS_FEED_GET_MESSAGE
    payload: TFeedResponse
}

export interface IWSFeedSendMessage {
    readonly type: typeof WS_FEED_SEND_MESSAGE
    payload: TOrder
}

export type TWSFeedActions = 
  IWSFeedConnectionStart |
  IWSFeedConnectionSuccess |
  IWSFeedConnectionError |
  IWSFeedConnectionClosed |
  IWSFeedGetMessage |
  IWSFeedSendMessage


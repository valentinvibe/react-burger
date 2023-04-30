import { rootReducer } from "./reducers";
import { compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import {
  WS_FEED_CONNECTION_START,
  WS_FEED_SEND_MESSAGE,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_GET_MESSAGE,
  WS_ORDERS_CONNECTION_START,
  WS_ORDERS_SEND_MESSAGE,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_GET_MESSAGE
} from './actions/ws-actions-types';
import { wsUrlAll, wsOrdersUrl } from "../utils/variables";
import { TWSActions } from "./types/get-data";

const feedWsActions : TWSActions = {
    wsInit: WS_FEED_CONNECTION_START,
    wsSendMessage: WS_FEED_SEND_MESSAGE,
    onOpen: WS_FEED_CONNECTION_SUCCESS,
    onClose: WS_FEED_CONNECTION_CLOSED,
    onError: WS_FEED_CONNECTION_ERROR,
    onMessage: WS_FEED_GET_MESSAGE,
  };
  
const userOrdersWsActions : TWSActions = {
    wsInit: WS_ORDERS_CONNECTION_START,
    wsSendMessage: WS_ORDERS_SEND_MESSAGE,
    onOpen: WS_ORDERS_CONNECTION_SUCCESS,
    onClose: WS_ORDERS_CONNECTION_CLOSED,
    onError: WS_ORDERS_CONNECTION_ERROR,
    onMessage: WS_ORDERS_GET_MESSAGE,
};

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      socketMiddleware(wsUrlAll, feedWsActions, false),
      socketMiddleware(wsOrdersUrl, userOrdersWsActions, true)
    )
  );
  
const store = createStore(rootReducer, enhancer);

export default store
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import { wsUrlAll, wsOrdersUrl } from "./utils/variables";

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
} from './services/actions/ws-actions-types'

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const feedWsActions = {
  wsInit: WS_FEED_CONNECTION_START,
  wsSendMessage: WS_FEED_SEND_MESSAGE,
  onOpen: WS_FEED_CONNECTION_SUCCESS,
  onClose: WS_FEED_CONNECTION_CLOSED,
  onError: WS_FEED_CONNECTION_ERROR,
  onMessage: WS_FEED_GET_MESSAGE,
};

const userOrdersWsActions = {
  wsInit: WS_ORDERS_CONNECTION_START,
  wsSendMessage: WS_ORDERS_SEND_MESSAGE,
  onOpen: WS_ORDERS_CONNECTION_SUCCESS,
  onClose: WS_ORDERS_CONNECTION_CLOSED,
  onError: WS_ORDERS_CONNECTION_ERROR,
  onMessage: WS_ORDERS_GET_MESSAGE,
};

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrlAll, feedWsActions, false),
    socketMiddleware(wsOrdersUrl, userOrdersWsActions, true)
  )
);

const store = createStore(rootReducer, enhancer);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();

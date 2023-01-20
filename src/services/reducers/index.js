import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { constructorReducer } from "./constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { wsFeedReducer } from "./ws-feed-reducer";
import { wsOrdersReducer } from "./ws-orders-reducer";

export const rootReducer = combineReducers({
  data: ingredientsReducer,
  modal: modalReducer,
  construct: constructorReducer,
  order: orderReducer,
  user: userReducer,
  wsFeed: wsFeedReducer,
  wsOrders: wsOrdersReducer
});

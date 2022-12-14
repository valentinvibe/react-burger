import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { constructorReducer } from "./constructor";
import { orderReducer } from "./order";
import { userReducer } from "./user";


export const rootReducer = combineReducers({
    data: ingredientsReducer,
    modal: modalReducer,
    construct: constructorReducer,
    order: orderReducer,
    user: userReducer
})



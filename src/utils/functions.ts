import { RootState } from "../services/types";
import { TIngredient } from "../services/types";
import { TOrder } from "../services/types/order";

export const getOrderModal = (store : RootState) => store.modal.orderModal;
export const getIsOpen = (store : RootState) => store.modal;

export const getIsLoad = (store : RootState) => store.data.ingredientsRequest;

export const FailedAuth = (store : RootState) => store.user.loginRequestFailed;
export const getSelectedIngredients = (store : RootState) => store.construct.data;

export const getSelectedBun = (store : RootState) => store.construct.bun;
export const getUserData = (store : RootState) => store.user.userData;

export const getData = (store : RootState) => store.data.ingredients;

export const getIngredients = (store : RootState) => store.construct;

export const getOrder = (store : RootState) => store.order.order;
export const getOrderFailed = (store : RootState) => store.order.orderFailed;
export const getIsForgotPassword = (store : RootState) => store.user.isPasswordForgot;

export const getWsFeed = (store : RootState) => store.wsFeed;

export const getWsOrders = (store : RootState) => store.wsOrders;

type TResult = {
    done: Array<number>,
    pending: Array<number>
}

export const filterOrders = (orders : Array<TOrder>) => {
    if (!orders) {
        return null
    }
    const result : TResult = {done: [], pending: []}
    orders.filter((item : TOrder) => {
        return item.status === "done"
        ? result.done.push(item.number)
        : result.pending.push(item.number)
    })
    return result
}

export const uniq = (arr : Array<TIngredient> | undefined) => {
    let result : Array<TIngredient> = [];
    if (arr === undefined) {
        return result
    }
    for (let i=0;i<arr.length;i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result
}

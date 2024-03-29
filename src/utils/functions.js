export const getOrderModal = (store) => store.modal.orderModal;
export const getIsOpen = (store) => store.modal;

export const getIsLoad = (store) => store.data.ingredientsRequest;
export const getSelectedIngredients = (store) => store.construct.data;

export const getSelectedBun = (store) => store.construct.bun;
export const getUserData = (store) => store.user.userData;

export const getData = (store) => store.data.ingredients;

export const getIngredients = (store) => store.construct;

export const getOrder = (store) => store.order.order;
export const getOrderFailed = (store) => store.order.orderFailed;
export const getIsForgotPassword = (store) => store.user.isPasswordForgot;

export const getWsFeed = (store) => store.wsFeed;

export const getWsOrders = (store) => store.wsOrders;

export const filterOrders = (orders) => {
    if (!orders) {
        return null
    }
    const result = {done: [], pending: []}
    orders.filter((item) => {
        return item.status === "done"
        ? result.done.push(item.number)
        : result.pending.push(item.number)
    })
    return result
}

export const uniq = (arr) => {
    let result = [];
    for (let i=0;i<arr.length;i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result
}

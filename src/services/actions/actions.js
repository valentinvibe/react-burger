import { getIngredients } from "../../utils/api";
import { baseUrl } from "../../utils/variables";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';


export function getItems() {
    return function(dispatch) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });

      getIngredients(baseUrl).then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data
        })
        } else {
            dispatch({type: GET_INGREDIENTS_FAILED})
        }
    })
    } 
}

// export function getConstructorItems() {
//     return function(dispatch) {
//         dispatch
//     }
// }
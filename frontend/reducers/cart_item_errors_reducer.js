import {
    RECEIVE_CART_ITEM_ERRORS,
    RECEIVE_CART_ITEM
} from '../actions/cart_actions';

const CartItemErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CART_ITEM_ERRORS:
            return action.errors;
        case RECEIVE_CART_ITEM:
            return [];
        default:
            return state;
    }
}


export default CartItemErrorsReducer;
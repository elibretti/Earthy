import {RECEIVE_CART_ITEM, RECEIVE_ALL_CART_ITEMS, REMOVE_CART_ITEM} from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartItemsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CART_ITEM:
            return merge({}, state, {[action.cartItem.id]: action.cartItem});
        case RECEIVE_ALL_CART_ITEMS:
            return merge({}, action.cartItems);
        case REMOVE_CART_ITEM:
            let newState = merge({}, state);
            delete newState[action.cartItemId];
            return newState;
        default: 
            return state;
    }
}

export default CartItemsReducer;
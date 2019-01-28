import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const receiveAllCartItems = (cartItems) => {
    return {
        type: RECEIVE_ALL_CART_ITEMS,
        cartItems
    }
}

const receiveCartItemErrors = (errors) => {
    return {
        type: RECEIVE_CART_ITEM_ERRORS,
        errors
    }
}

const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId: id
    }
}

export const createCartItem = (cartItem) => dispatch =>{
    return CartItemAPIUtil.createCartItem(cartItem).then( (cartItem) =>{
        
        return dispatch(receiveCartItem(cartItem))
    }, (errors) => {
        return dispatch(receiveCartItemErrors(errors.responseJSON))
    })
}

export const deleteCartItem = (id) => dispatch => {
    return CartItemAPIUtil.deleteCartItem(id).then( () => {
        return dispatch(removeCartItem(id))
    }, (errors) => {
        return dispatch(receiveCartItemErrors(errors.responseJSON))
    })
}

export const fetchAllCartItems = (userId) => dispatch => {
    return CartItemAPIUtil.fetchAllCartItems(userId).then( (cartItems) => {
        return dispatch(receiveAllCartItems(cartItems))
    }, (errors) => {
        return dispatch(receiveCartItemErrors(errors.responseJSON))
    })
}

export const updateCartItem = (cartItem) => dispatch => {
    return CartItemAPIUtil.updateCartItem(cartItem).then( (cartItem) => {
        return dispatch(receiveCartItem(cartItem))
    }, (errors) => {
        return dispatch(receiveCartItemErrors(errors.responseJSON))
    })
}
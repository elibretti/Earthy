import {RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS, REMOVE_PRODUCT} from '../actions/product_actions';
import merge from 'lodash/merge';

const productsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_PRODUCT: 
            return merge({}, state, {[action.product.id]: action.product});
        case RECEIVE_ALL_PRODUCTS:
            return merge({}, action.products);
        case REMOVE_PRODUCT:
            let newState = merge({}, state);
            delete newState[action.productId];
            return newState;
        default: 
            return state;
    }
}

export default productsReducer;
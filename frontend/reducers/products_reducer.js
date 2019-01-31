import {RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS, REMOVE_PRODUCT, RECEIVE_PRODUCT_SEARCH} from '../actions/product_actions';
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
        case RECEIVE_PRODUCT_SEARCH: 
            if(!action.results){
                return {}
            } else {
                return action.results;
            }
        default: 
            return state;
    }
}

export default productsReducer;
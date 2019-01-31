import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ProductErrorsReducer from './product_errors_reducer';
import CartItemErrorsReducer from './cart_item_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';
const errorsReducer =  combineReducers({
    session: SessionErrorsReducer,
    products: ProductErrorsReducer,
    cartItems: CartItemErrorsReducer,
    reviews: ReviewErrorsReducer
    });

export default errorsReducer;
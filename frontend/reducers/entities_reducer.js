import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ProductsReducer from './products_reducer';
import CartItemsReducer from './cart_items_reducer';



const entitiesReducer =  combineReducers({
    users: UsersReducer, products: ProductsReducer,
    cartItems: CartItemsReducer
    });

export default entitiesReducer;
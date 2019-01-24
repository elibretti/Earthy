import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ProductsReducer from './products_reducer';



const entitiesReducer =  combineReducers({
    users: UsersReducer, products: ProductsReducer,
    });

export default entitiesReducer;
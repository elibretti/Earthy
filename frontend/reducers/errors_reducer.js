import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ProductErrorsReducer from './product_errors_reducer';


const errorsReducer =  combineReducers({
    session: SessionErrorsReducer,
    products: ProductErrorsReducer
    });

export default errorsReducer;
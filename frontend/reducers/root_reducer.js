import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer'


const rootReducer =  combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    });

export default rootReducer;
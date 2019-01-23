import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer'
import EntitiesReducer from './entities_reducer'
import UIReducer from './ui_reducer';
import ui_reducer from './ui_reducer';

const rootReducer =  combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
    ui: ui_reducer,
    });

export default rootReducer;
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, {[action.current_user.id]: action.current_user});
        case RECEIVE_USER: 
            return merge({}, state, {[action.user.id]: action.user});
        default: 
            return state;
    }
}

export default usersReducer;
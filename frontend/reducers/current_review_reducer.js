import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'

const CurrentReviewReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_REVIEW: 
            return action.review;
        case REMOVE_REVIEW: 
            return {};
        default: 
            return state;
    }
}

export default CurrentReviewReducer;
import {RECEIVE_REVIEW} from '../actions/review_actions'

const CurrentReviewReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_REVIEW: 
            return action.review;
        default: 
            return state;
    }
}

export default CurrentReviewReducer;
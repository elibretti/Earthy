import {RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW, RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_REVIEW:
            return merge({}, state, {[action.review.id]: action.review});
        case RECEIVE_ALL_REVIEWS:
            return merge({}, action.reviews)
        case REMOVE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.review.id];
            return newState;
        default:
        return state;
    }
}

export default ReviewsReducer;
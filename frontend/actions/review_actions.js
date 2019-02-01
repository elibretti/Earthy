import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        review,
    }
}

const receiveReviewErrors = (errors) => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

export const createReview = (review) => dispatch => {
    return ReviewAPIUtil.createReview(review).then( (review) => {
        return dispatch(receiveReview(review))
    }, (errors) => {
        return dispatch(receiveReviewErrors(errors.responseJSON))
    })
}

export const deleteReview = (review) => dispatch => {
    return ReviewAPIUtil.deleteReview(review).then( (review) => {
        return dispatch(removeReview(review))
    }, (errors) => {
        return dispatch(receiveReviewErrors(errors.responseJSON))
    })
}

export const fetchAllReviews = (product_id) => dispatch => {
    return ReviewAPIUtil.fetchAllReviews(product_id).then( (reviews) => {
        return dispatch(receiveAllReviews(reviews))
    }, (errors) => {
        return dispatch(receiveReviewErrors(errors.responseJSON))
    })
}

export const updateReview = (review) => dispatch => {
    return ReviewAPIUtil.updateReview(review).then( (review) => {
        return dispatch(receiveReview(review))
    }, (errors) => {
        return dispatch(receiveReviewErrors(errors.responseJSON))
    })
}
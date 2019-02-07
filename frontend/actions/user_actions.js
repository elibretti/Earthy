import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user: user,
    }
}

export const receiveUserErrors = (errors) => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

export const fetchUser = (id) => dispatch => {
    return UserAPIUtil.fetchUser(id).then( (user) => {
        return dispatch(receiveUser(user))
    }, (errors) => {
        return dispatch(receiveUserErrors(errors.responseJSON))
    }
    )
}

export const updateUser = (user) => dispatch => {
    return UserAPIUtil.updateUser(user).then( (user) => {
        return dispatch(receiveUser(user))
    }, (errors) => {
        return dispatch(receiveUserErrors(errors.responseJSON))
    }
    )
}

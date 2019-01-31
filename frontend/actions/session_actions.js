import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER ="RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        current_user: user,
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const login = (user) => dispatch => {
    return SessionApiUtil.login(user).then( (user) => {
        return dispatch(receiveCurrentUser(user))
    }, (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON))
    })
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user).then( (user) => {
        return dispatch(receiveCurrentUser(user))
    }, (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON))
    })
}


export const logout = (user) => dispatch => {
    return SessionApiUtil.logout(user).then( () => {
        return dispatch(logoutCurrentUser())
    }, (errors) => {
        return dispatch(receiveSessionErrors(errors.responseJSON))
    })
}
import {connect} from 'react-redux'
import {login, receiveSessionErrors} from '../../actions/session_actions';
import LoginForm from './login_form';
import {closeModal, openModal} from  '../../actions/modal_actions';

const msp = ({errors}) => {
    return {
        errors: errors.session,
        formType: "login"
    }
}

const mdp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal("signup")),
        clearErrors: () => dispatch(receiveSessionErrors([])),
    }
}

export default connect(msp,mdp)(LoginForm)
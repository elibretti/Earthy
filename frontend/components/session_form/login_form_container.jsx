import {connect} from 'react-redux'
import {login} from '../../actions/session_actions';
import LoginForm from './login_form';
import {closeModal} from  '../../actions/modal_actions';

const msp = ({errors}) => {
    return {
        errors: errors.session,
        formType: "login"
    }
}

const mdp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp,mdp)(LoginForm)
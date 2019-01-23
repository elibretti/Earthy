import {connect} from 'react-redux'
import {signup} from '../../actions/session_actions';
import SignUpForm from './signup_form';
import {closeModal} from  '../../actions/modal_actions';

const msp = ({errors}) => {
    return {
        errors: errors.session,
        formType: "signup"
    }
}

const mdp = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp,mdp)(SignUpForm)
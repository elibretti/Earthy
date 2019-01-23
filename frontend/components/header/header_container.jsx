import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import Header from './header';

const msp = (state) => {
    let current_user = state.session.id ? state.users[state.session.id] : null;
    return {
        current_user: current_user,
    }

}

const mdp = () => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    }

}

export default connect(msp,mdp)(Header)
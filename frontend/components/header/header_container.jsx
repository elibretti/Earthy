import {connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';
import Header from './header';

const msp = (state) => {
    let current_user = state.session.id ? state.entities.users[state.session.id] : null;
    return {
        current_user: current_user,
    }

}

const mdp = (dispatch) => {
    const demo = {
        email: "GoingGreenIn2019",
        password: "DemoUser"
    }
    return {
        openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
        login: () => dispatch(login(demo))
    }

}

export default connect(msp,mdp)(Header)
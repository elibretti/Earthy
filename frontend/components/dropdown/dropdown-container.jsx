import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import DropDown from './dropdown';

const msp = (state) => {
    let current_user = state.session.id ? state.entities.users[state.session.id] : null;
    return {
        current_user: current_user,
    }

}

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }

}

export default connect(msp,mdp)(DropDown)
import {updateUser, fetchUser} from '../../actions/user_actions';
import UpdateUser from './update_user';
import {connect} from 'react-redux';

const msp = (state) => {
    return {
        user: state.entities.users[state.session.id],
        errors: state.errors.user,
    }
}

const mdp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }

}

export default connect(msp, mdp)(UpdateUser)
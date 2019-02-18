import {fetchUser} from '../../actions/user_actions';
import UserShow from './user_show';
import {connect} from 'react-redux';

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        errors: state.errors.user,
        currentUser: state.session.id || {}
    }
}

const mdp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    }
}

export default connect(msp, mdp)(UserShow)
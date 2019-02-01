import {connect} from 'react-redux'
import {closeModal} from  '../../actions/modal_actions';
import ThankYou from './thank_you';
const mdp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(null,mdp)(ThankYou)
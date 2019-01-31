import {updateReview} from '../../actions/review_actions';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ReviewForm from './review_form';

const msp = (state) => {
    return {
        review: state.ui.review,
        user_id: state.session.id,
        product: state.ui.product,
        errors: state.errors.reviews,
    }
}

const mdp = (dispatch) => {
    return {
        action: (review) => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ReviewForm);
import {createReview} from '../../actions/review_actions';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ReviewForm from './review_form';

const msp = (state) => {
    const default_review = {
        user_id: state.session.id,
        product_id: state.ui.product.id,
        body: "",
        rating:0
    }
    return {
        review: default_review,
        user_id: state.session.id,
        product: state.ui.product,
        errors: state.errors.reviews,
    }
}

const mdp = (dispatch) => {
    return {
        action: (review) => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(ReviewForm);
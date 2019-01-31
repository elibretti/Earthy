import {fetchAllReviews, updateReview, deleteReview} from '../../actions/review_actions';
import {openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import ReviewIndex from './review_index';

const msp = (state, ownProps) => {
    return {
        reviews: Object.keys(state.entities.reviews).map((id)=> state.entities.reviews[id]),
        user_id: state.session.id,
        product_id: ownProps.product_id,
        user_review: state.ui.review
    }
}

const mdp = (dispatch) => {
    return {
        fetchAllReviews: (product_id) => dispatch(fetchAllReviews(product_id)),
        updateReview: (review) => dispatch(updateReview(review)),
        deleteReview: (review) => dispatch(deleteReview(review)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(ReviewIndex);
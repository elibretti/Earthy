import {createCartItem, updateCartItem, fetchAllCartItems} from '../../actions/cart_actions';
import {ItemInCart} from '../../reducers/selector';
import {connect} from 'react-redux';
import NewCartItem from './new_cart_item';

const msp = (state, ownProps) => {
    return {
        product_id: ownProps.product_id,
        user_id: state.session.id,
        ItemInCart: ItemInCart(state, ownProps.product_id),
        errors: state.errors.cartItems

    }
}

const mdp = (dispatch) => {
    return {
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
        fetchAllCartItems: (id) => dispatch(fetchAllCartItems(id))
    }
}

export default connect(msp, mdp)(NewCartItem)
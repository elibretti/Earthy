import {deleteCartItem, updateCartItem, fetchAllCartItems} from '../../actions/cart_actions';
import {connect} from 'react-redux';
import CartIndex from './cart_index';

const itemsSort = (items) => {
    return items.sort(function(a, b){
        if(a.seller_name < b.seller_name) { return -1; }
        if(a.seller_name > b.seller_name) { return 1; }
        return 0;
    })
}

const msp = (state) => {
        let items  = Object.keys(state.entities.cartItems).map((id) => state.entities.cartItems[id]);
        
    return {
        cartItems: itemsSort(items),
        user_id: state.session.id,
        errors: state.errors.cartItems
    }
}


const mdp = (dispatch) => {
    return {
        deleteCartItem: (id) => dispatch(deleteCartItem(id)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
        fetchAllCartItems: (user_id) => dispatch(fetchAllCartItems(user_id))

    }
}

export default connect(msp, mdp)(CartIndex);
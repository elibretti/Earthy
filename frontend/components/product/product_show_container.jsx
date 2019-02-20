import {fetchProduct} from '../../actions/product_actions';
import {fetchUser} from '../../actions/user_actions';
import {connect} from 'react-redux';
import ProductShow from './product_show';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const defaultProduct = {
        id: null,
        title: "",
        description: "",
        price: "",
        userId: null,
        photoFile:null,
        photoUrl: "" 
    
    }
    const defaultSeller = {
        id: null,
        averageReview: null,
        numReviews: null
    }
    let product = state.entities.products[ownProps.match.params.productId] || defaultProduct
    let seller 
    if (state.entities.users[product.user_id]){
        seller = state.entities.users[product.user_id]
    }else{
        seller = defaultSeller;
    }

    return {
        product: product,
        userId: state.session.id,
        seller: seller
    }
}

const mdp = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(msp, mdp)(ProductShow);
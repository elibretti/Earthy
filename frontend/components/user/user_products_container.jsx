import {fetchAllProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import UserProducts from './user_products';
const msp = (state, ownProps) => {
    return {
        userId: ownProps.userId,
        products: Object.keys(state.entities.products).map( id => state.entities.products[id] ),
        skipProd: ownProps.productId
    }
}

const mdp = (dispatch) => {
    return {
        fetchAllProducts: (userId) => dispatch(fetchAllProducts(userId))
    }
}

export default connect(msp,mdp)(UserProducts);
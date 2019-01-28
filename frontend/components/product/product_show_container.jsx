import {fetchProduct} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductShow from './product_show';


const msp = (state, ownProps) => {
    const defaultProduct = {
        id: "",
        title: "",
        description: "",
        price: "",
        userId: state.session.id,
        photoFile:null,
        photoUrl: "" 
    
    }
    let product = state.entities.products[ownProps.match.params.productId] || defaultProduct
    return {
        product: product,
        userId: state.session.id
    }
}

const mdp = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id))
    }
}

export default connect(msp, mdp)(ProductShow);
import {updateFormProduct, fetchProduct, deleteProduct} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductForm from './product_form';

const msp = (state, ownProps) => {
    const defaultProduct = {
        id: "",
        title: "",
        description: "",
        price: "",
        user_id: state.session.id,
        photoFile:"",
        photoUrl: "" 
    
    }
    let product = state.entities.products[ownProps.match.params.productId] || defaultProduct
    return {
        product: product,
        formType: 'update',
        errors: state.errors.products,
        userId: state.session.id
    }
}


const mdp = (dispatch) => {
    return {
        processForm: (product) => dispatch(updateFormProduct(product)),
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}


export default connect(msp, mdp)(ProductForm);
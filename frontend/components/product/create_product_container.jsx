import {createFormProduct} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductForm from './product_form';


const msp = (state) => {
    const defaultProduct = {
        title: "",
        description: "",
        price: "",
        userId: state.session.id,
        photoFile:"",
        photoUrl: "" 
    
    }
    return {
        product: defaultProduct,
        formType: "create",
        errors: state.errors.products
    }

}


const mdp = (dispatch) => {
    return {
        processForm: (product) => dispatch(createFormProduct(product))
    }
}


export default connect(msp, mdp)(ProductForm);
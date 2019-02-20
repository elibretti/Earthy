import {fetchAllProducts, fetchProductCategory} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductIndex from './product_index';


const msp = (state, ownProps) => {
    return {
        products: Object.keys(state.entities.products).map( id => state.entities.products[id] ),
        category: ownProps.match.params.category || "index"
        
    }
}

const mdp = (dispatch, ownProps) => {
    const checkpath = () => {
        // window.location.hash === "#/products"
        if(ownProps.match.path === "/products"){
            return dispatch(fetchAllProducts());
        }else if(ownProps.match.path === "/category/:category"){
            return dispatch(fetchProductCategory(ownProps.match.params.category));
        }else{
            return  dispatch({type: "null_action"});
        }
    } 
    return {
        action: () => checkpath()
    }
}

export default connect(msp,mdp)(ProductIndex);
import {fetchAllProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import ProductIndex from './product_index';


const msp = (state) => {
    return {
        products: Object.keys(state.entities.products).map( id => state.entities.products[id] )
    }
}

const mdp = (dispatch) => {
    return {
        action: () => dispatch(fetchAllProducts())

    }
}

export default connect(msp,mdp)(ProductIndex);
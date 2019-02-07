import {fetchAllProducts} from '../../actions/product_actions';
import {connect} from 'react-redux';
import RecentProducts from './recent_products';


const msp = (state) => {
    let sorted_products = () => {
        let products = Object.keys(state.entities.products).map( id => state.entities.products[id] ).slice(0,10);
        
        
        return products.sort(function(a, b) {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
            return a>b ? -1 : a<b ? 1 : 0;
        });
    }

    return {
        products: sorted_products()
    }
}

const mdp = (dispatch) => {

    return {
        action: () => dispatch(fetchAllProducts())
    }
}

export default connect(msp,mdp)(RecentProducts);
import Category from './category';
import {connect} from 'react-redux';
import {fetchProductCategory} from '../../actions/product_actions';
const mdp = (dispatch) => {
    return {
        action: (name) => dispatch(fetchProductCategory(name))
        }
}

export default connect(null, mdp)(Category);

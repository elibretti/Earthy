import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import CurrentProductReducer from './current_product_reducer';
import CurrentReviewReducer from './current_review_reducer';
export default combineReducers({
  modal: modalReducer,
  product: CurrentProductReducer,
  review: CurrentReviewReducer
});
import React from 'react';
import ReactDOM from 'react-dom';
import {createProduct, updateProduct, fetchProduct, fetchAllProducts, deleteProduct} from './actions/product_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
                },
            session: { id: window.currentUser.id }
            };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
    store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createProduct = createProduct;
    window.updateProduct = updateProduct;
    window.fetchProduct = fetchProduct;
    window.fetchAllProducts = fetchAllProducts;
    window.deleteProduct = deleteProduct;
    ReactDOM.render(<Root store={store}/>, root)
})
import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCT_SEARCH = "RECEIVE_PRODUCT_SEARCH"

const receiveProduct = (product) => {
    return {
        type:RECEIVE_PRODUCT,
        product
    }
}

const receiveAllProducts = (products) => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
}

const receiveProductErrors = (errors) => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
}

const removeProduct = (id) => {
    return {
        type:REMOVE_PRODUCT,
        productId: id
    }
}

const receiveProductSearch = (results) => {
    return {
        type: RECEIVE_PRODUCT_SEARCH,
        results
    }
}



export const createProduct = (product) => dispatch => {
    return ProductAPIUtil.createProduct(product).then( (product) => {
        return dispatch(receiveProduct(product))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}
export const createFormProduct = (product) => dispatch => {
    return ProductAPIUtil.createFormProduct(product).then( (product) => {
        return dispatch(receiveProduct(product))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}

export const deleteProduct = (id) => dispatch => {
    return ProductAPIUtil.deleteProduct(id).then( () => {
        return dispatch(removeProduct(id))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}

export const fetchProduct = (id) => dispatch => {
    return ProductAPIUtil.fetchProduct(id).then( (product) => {
        return dispatch(receiveProduct(product))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}

export const fetchAllProducts = () => dispatch => {
    return ProductAPIUtil.fetchAllProducts().then( (products) => {
        return dispatch(receiveAllProducts(products))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}


export const updateProduct = (product) => dispatch => {
    return ProductAPIUtil.updateProduct(product).then( (product) => {
        return dispatch(receiveProduct(product))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}

export const updateFormProduct = (product) => dispatch => {
    return ProductAPIUtil.updateFormProduct(product).then( (product) => {
        return dispatch(receiveProduct(product))
    }, (errors) => {
        return dispatch(receiveProductErrors(errors.responseJSON))
    }
    )
}

export const searchProducts = (query_string) => dispatch => {
    return ProductAPIUtil.searchProducts(query_string).then( (results) => {
        return dispatch(receiveProductSearch(results))
    })
}

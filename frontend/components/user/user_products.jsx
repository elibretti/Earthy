import React from 'react';
import ProductIndexItem from '../product/product_index_item';
class UserProducts extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProducts(this.props.userId);
    }

    render() {
        const products = this.props.products.map((product) => {
            return(
                <ProductIndexItem
                    key={product.id}
                    product={product}
                />
            )
        })
        return (
        <div className="user-products-container">
            <ul>
                {products}
            </ul>            
        </div>
        )
    }
}

export default UserProducts;
import React from 'react';
import {withRouter} from 'react-router-dom';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.action()
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
            <div className='product-index-container'>
                <ul className='product-index-list'>
                    {products}
                </ul>
            </div>
        )
    }
}

export default withRouter(ProductIndex);
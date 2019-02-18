import React from 'react';
import {Link} from 'react-router-dom';

const ProductIndexItem = ({product, editable}) => {   
    return( 
        <li className='product-index-item'>
            <Link to={`/products/${product.id}`}>
                <div className='image-container'>
                <img src={product.photoUrl}/>
                </div>
                <div className='product-title'>
                <h1>{product.title}</h1>
                </div>
                <h2>{product.seller.first_name}</h2>
                <h3>${product.price.toFixed(2)}</h3>
            </Link>
        </li>
    )
}

export default ProductIndexItem;
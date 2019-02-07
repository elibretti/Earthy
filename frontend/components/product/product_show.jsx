import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import NewCartItemContainer from '../cart_item/new_cart_item_container';
import ReviewIndexContainer from '../reviews/review_index_container';
class ProductShow extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.product.id != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId)
        }
    }

    // updateState(e) {
    //     return (e) => {
    //         this.setState({[product_id]: this.props.product.id, [user_id]: this.props.userId, [quantity]: e.target.value});
    //     }
    // }

    render() {
        const { product } = this.props;
        if (!product.id) {
          return <div>Loading...</div>;
        }
        let editable = null;
        if(product.seller.id === this.props.userId){
            editable = <Link to={`/products/${product.id}/edit`} className="edit"> Edit</Link>;
        }
        return (
            <div className='product-show-container'>
                <div className="product-show">
                <div className="product-left">
                    <div className="product-seller-container">
                        <div className="seller-photo-container">
                                <img className="seller-image" src={product.userPhoto}/>
                        </div>
                        <h2>{product.seller.first_name}</h2>
                    </div>
                    <div className="product-photo">
                        <img src={product.photoUrl} />
                    </div>
                    <div className="product-description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                    <ReviewIndexContainer
                        product_id={product.id}
                        user_id={this.props.userId}
                    />
                </div>
                <div className='product-right'>
                    <h2>{product.title}</h2>
                    <p>{editable}</p>
                    <h3>${product.price.toFixed(2)}</h3>
                    <NewCartItemContainer
                        product_id = {product.id}
                    />
                </div>
                </div>
            </div>  
        )

    }
}


export default withRouter(ProductShow);
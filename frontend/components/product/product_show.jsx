import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import NewCartItemContainer from '../cart_item/new_cart_item_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import Rating from 'react-rating';
import UserProducts from '../user/user_products_container'

class ProductShow extends React.Component{
    
    constructor(props){
        super(props);
        this.renderUserRating = this.renderUserRating.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.product.id != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId)
        }

        if(this.props.product.user_id != this.props.seller.id){
            this.props.fetchUser(this.props.product.seller.id)
        }

    }

    // updateState(e) {
    //     return (e) => {
    //         this.setState({[product_id]: this.props.product.id, [user_id]: this.props.userId, [quantity]: e.target.value});
    //     }
    // }

    renderUserRating(){
        if(this.props.seller.averageReview){
            return(
                <div className="average-review">
                    <Rating 
                        className="review-index-rating"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={this.props.seller.averageReview}
                        readonly={true}
                    />
                    ({this.props.seller.numReviews})
                </div>
            )
        }else{
            return null
        }
    }

    render() {
        const { product } = this.props;
        if (!product.id) {
          return <div>Loading...</div>;
        }
        let editable = null;
        if(product.seller.id === this.props.userId){
            editable = <Link to={`/products/${product.id}/edit`} className="edit-product"> <div>Edit</div> <i class="fas fa-pencil-alt"></i> </Link>;
        }
        return (
            <div className='product-show-container'>
                <div className="product-show">
                <div className="product-left">
                    <div className="product-photo">
                        <img src={product.photoUrl} />
                        {editable}
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
                    <div className="seller-info">
                        <Link to={`/users/${product.seller.id}`}>
                            <h3>{product.seller.first_name}</h3>
                        </Link>
                            {this.renderUserRating()}
                        
                    </div>
                    <h2>{product.title}</h2>
                    <h3>${product.price.toFixed(2)}</h3>
                    <NewCartItemContainer
                        product_id = {product.id}
                    />
                    <div className="seller-products">
                        <Link to={`/users/${product.seller.id}`}>
                            <div className="product-seller-container">
                                
                                <div className="seller-photo-container">
                                        <img className="seller-image" src={this.props.seller.photoUrl}/>
                                </div>
                                <h3>{product.seller.first_name}</h3>
                            </div>
                        </Link>
                        <UserProducts 
                            userId = {this.props.seller.id}
                            productId = {this.props.product.id}
                        />
                    </div>
                </div>
                </div>
            </div>  
        )

    }
}


export default withRouter(ProductShow);
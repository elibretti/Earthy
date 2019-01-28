import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductShow extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            product_id: "",
            user_id: "",
            quantity: ""
        } 
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
        if (!product) {
          return <div>Loading...</div>;
        }

        return (
            <div className='product-show'>
                <div className="product-left">
                    <div className="product-photo">
                        <img src={product.photoUrl} />
                    </div>
                    <div className="product-description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className='product-right'>
                    <h2>{product.title}</h2>
                    <div> newCartItemForm</div>
                    {/* New shopping cart item form  */}
                </div>
            </div>  
        )

    }
}


export default withRouter(ProductShow);
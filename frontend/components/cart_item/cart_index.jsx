import React from 'react';
import {withRouter} from 'react-router-dom';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchAllCartItems(this.props.user_id).then(() => this.setState({loading: false}))
    }

    totalQuantity(){
        return this.props.cartItems.length; 
    }

    totalSum(){
        let sum = 0; 
        for(let i=0; i < this.props.cartItems.length; i++){
            sum += ((parseFloat(this.props.cartItems[i].quantity) * parseFloat(this.props.cartItems[i].price)));
        }
        return sum.toFixed(2);
    }

    render(){
        if(this.state.loading){
            return null;
        }

        return(
            <div className="outer-cart-container">
                <h1>{this.totalQuantity()} items in your cart</h1>
                <div className="inner-cart-container">
                    <div className="cart-left">
                        <ul>
                            {this.props.cartItems.map((item) => (
                                <CartIndexItem
                                    key={item.id}
                                    item={item}
                                    deleteCartItem = {this.props.deleteCartItem}
                                    updateCartItem = {this.props.updateCartItem}
                                    />
                            )   
                            )}
                        </ul>
                        <label htmlFor="gift">
                            This order is a gift
                        <input id="gift" type="checkbox"/>
                        </label>
                    </div>
                    <div className="cart-right">
                        <div className="payment">
                            <h2>How you'll pay</h2>
                            <label>
                                <input type="radio" name="payment" value="visa"  defaultChecked/>
                                <img src="https://s3.amazonaws.com/earthy-dev/visa.jpg" id= "visa"/>
                            </label>

                            <label>
                                <input type="radio" name="payment" value="paypal"/>
                                <img src="https://s3.amazonaws.com/earthy-dev/paypal.jpg" id="paypal"/>
                            </label>
                        </div>
                        <div className="total">
                            <h3>Item(s) total</h3>
                            <p>${this.totalSum()}</p>
                        </div>
                        <div className="shipping">
                            <h3>Shipping</h3>
                            <p>Free</p>
                        </div>
                        <button id="checkout" onClick={() => this.props.openThankYou()}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CartIndex);
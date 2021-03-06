import React from 'react';
import{Link} from 'react-router-dom';
class CartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
            quantity: this.props.item.quantity, 
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value}, () => this.props.updateCartItem(this.state));   
        }
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     this.props.updateCartItem(this.state);
    // }

    renderErrors(){
        return( 
            <ul className="errors"> 
                {this.props.errors.map( (error, i ) => {
                   return <li key ={`error-${i}`}> {error}</li>
                })}
            </ul>
        )
    }

    totalPrice(){
        let totalPrice = (parseFloat(this.props.item.quantity) * parseFloat(this.props.item.price)).toFixed(2);
        return totalPrice;
    }

    render(){
        let item = this.props.item;
        return (
            <li>
                    <h1>{item.seller_name}</h1>
                    <div className="item-container">
                        <div className="item-container-left">
                            <Link to={`/products/${item.product_id}`}>
                                <div className="cart-image-container">
                                <img src={item.photoUrl}/>
                                </div>
                            </Link>
                            <div className="item-info">
                            <Link to={`/products/${item.product_id}`}>
                                <h2>{item.title}</h2>
                            </Link>

                                <button onClick={() => this.props.deleteCartItem(this.props.item.id)}>Remove</button>
                            </div>
                        </div>

                        <div className="item-container-right">
                            <input id="quantity" type="number"  onChange={this.update('quantity')} min="1" max="100" value={this.state.quantity}/>
                            <div className="item-price">
                                <h3>${this.totalPrice()}</h3>
                                <p>(${item.price})</p>
                            </div>
                        </div>
                    </div>
            </li>
        )
    }
}


export default CartIndexItem;
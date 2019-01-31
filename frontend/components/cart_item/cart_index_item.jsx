import React from 'react';

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
            this.setState({[field]: e.target.value});
            setTimeout(() => this.props.updateCartItem(this.state), 10);        
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
                        <div className="cart-image-container">
                        <img src={item.photoUrl}/>
                        </div>
                        <div className="item-info">
                            <h2>{item.title}</h2>
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
import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class NewCartItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            product_id: "",
            user_id: "",
            quantity: 1
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.props.fetchAllCartItems(this.props.user_id)
    }
    componentDidUpdate() {
        if( this.state.product_id === "" || this.state.user_id === ""){
            this.setState({product_id: this.props.product_id, user_id: this.props.user_id});
        }
    }
    
    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        }
    }



    handleSubmit(e) {
        e.preventDefault();
        if(this.props.ItemInCart){
            let newState = Object.assign({}, this.state);
            newState.id = this.props.ItemInCart.id;
            newState.quantity = parseInt(this.state.quantity) + parseInt(this.props.ItemInCart.quantity);
            this.props.updateCartItem(newState).then(() => this.props.history.push(`/cart`)
            )
        }else{
            this.props.createCartItem(this.state).then(() => this.props.history.push(`/cart`))
        }

    }


    renderErrors(){
        return( 
            <ul className="errors"> 
                {this.props.errors.map( (error, i ) => {
                   return <li key ={`error-${i}`}> {error}</li>
                })}
            </ul>
        )
    }

    render(){

        return(
            <div className="new-cart-item">
                {this.renderErrors()}
                <form className="new-cart-item-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="quantity">
                    <input id="quantity" type="number"  onChange={this.update('quantity')} min="1" max="100" value={this.state.quantity}/>
                    </label>
                  
                    <input type="submit" value="Add to cart"/>
    
                </form>
            </div>
        )
    }

}
export default withRouter(NewCartItem);
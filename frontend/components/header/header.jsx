import React from 'react';
import {Link, withRouter} from 'react-router-dom';
// import defaultImg from '../../../app/assets/images/default_user.png'

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    rightHeader(){
        if(this.props.current_user){
            return (
            <div className='right-header'>
                {/* <button> <img src={defaultImg}/></button> */}
                <Link to="/product/new" className="product">
                    <div id="sell">Sell On Earthy</div>
                </Link>
                <button onClick={this.props.logout}> Log Out</button>
                <Link to="/shoppingcart" className="cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <div className="cart-label">Cart</div>
                </Link>
            </div>
            )
        }else{
            return (  
            <div className='right-header'>
                <button id="register" onClick={() => this.props.openModal("signup") }>Register</button>
                <button id="login" onClick={() => this.props.openModal("login") }>Sign in</button>
                <button id="demo" onClick={this.props.login}>Demo User</button>
                <Link to="/shoppingcart" className="cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <div className="cart-label">Cart</div>
                </Link>
            </div>
            )
        }
    }

    render(){
        return (
            <div className='header-container'>

                <div className='left-header'>
                    <h1 className="earthy-logo">Earthy</h1>
                    <form className='search'> 
                        <input type='text' 
                        id='search-text'
                        placeholder='Search for Items or Shops'/>
                        <input type='submit'  id='search-submit' value='Search'/>
                    </form>
                </div>
                <div className='right-header'>
                    {this.rightHeader()}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
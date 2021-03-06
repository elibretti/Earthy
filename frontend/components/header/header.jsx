import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container';
import DropDownContainer from '../dropdown/dropdown-container';
class Header extends React.Component {
    constructor(props){
        super(props)
        this.handClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.login()
        this.props.history.push("/")
    }

    rightHeader(){
        if(this.props.current_user){
            return (
            <div className='right-header'>
                <Link to="/products/new" className="product">
                    <div id="sell">Sell On Earthy</div>
                </Link>
                <DropDownContainer/>
                <Link to="/cart" className="cart">
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
                <button id="demo" onClick={() => this.handleClick()}>Demo User</button>
                <button  onClick={() => this.props.openModal("login") } className="cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <div className="cart-label">Cart</div>
                </button>
            </div>
            )
        }
    }

    render(){
        return (
            <div className='header-container'>

                <div className='left-header'>
                    <Link to="/">
                        <h1 className="earthy-logo">Earthy</h1>
                    </Link>
                    <SearchBarContainer/>
                </div>
                <div className='right-header'>
                    {this.rightHeader()}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
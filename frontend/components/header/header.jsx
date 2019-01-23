import React from 'react';
import {withRouter} from 'react-router-dom';
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
                <button onClick={this.props.logout}> Log Out</button>
            </div>
            )
        }else{
            return (  
            <div className='right-header'>
                <button  onClick={() => this.props.openModal("signup") }>Register</button>
                <button  onClick={() => this.props.openModal("login") }>Sign in</button>
            </div>
            )
        }
    }

    render(){
        return (
            <div className='header-container'>
                <div className='left-header'>
                </div>
                <div className='right-header'>
                    {this.rightHeader()}
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
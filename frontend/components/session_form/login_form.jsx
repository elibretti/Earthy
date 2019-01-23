import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user).then(this.props.closeModal)
    } 

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleCheck(){
            this.state = {
                email: "DemoUser",
                password: "DemoUser"
            }
    }

    renderErrors(){
        return( 
            <ul> 
                {this.props.errors.map( (error, i ) => {
                   return <li key ={`error-${i}`}> {error}</li>
                })}
            </ul>
        )
    }


    render(){
        return (
            <div className='login form-container'>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className='login form'>
                <h2> Sign in to Continue</h2>
                <label htmlFor="email">
                    Email address <span id='asterisk'>*</span>
                </label>
                <input type='text' 
                    id="email"
                    value={this.state.email} 
                    onChange={this.update("email")}/>
                <label htmlFor="password">
                    Password <span id='asterisk'>*</span>
                </label>
                <input 
                    id='password'
                    type='password' 
                    value={this.state.password} 
                    onChange={this.update("password")}/>
                <label htmlFor="checkbox">
                    Demo Login?
                </label>
                <input 
                    type="checkbox" 
                    id="checkbox"
                    onChange={this.handleCheck(this)}
                    />
                    <span className="checkmark"></span>
                    
                <input type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }


}

export default withRouter(LoginForm);
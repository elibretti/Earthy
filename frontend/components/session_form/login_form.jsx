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
            <div>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className='login-form'>
                <h2> Sign in to Continue</h2>
                <label>
                    Email address
                    <input type='text' 
                    value={this.state.email} 
                    onChange={this.update("email")}/>
                </label>
                <label>
                    Password
                    <input type='password' 
                    value={this.state.password} 
                    onChange={this.update("password")}/>
                </label>
                <input type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }


}

export default withRouter(LoginForm);
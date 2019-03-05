import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
   
    }
 
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user).then(this.props.closeModal)
        this.props.clearErrors
    } 

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
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

    handleClick(e){
        e.preventDefault();
        const demo = {
            email: "GoingGreenIn2019",
            password: "DemoUser"
        }
        this.props.login(demo).then(this.props.closeModal)
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }
    

    render(){
        return (
            <div className='session-form-container'>
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
                <button className="demo" onClick={this.handleClick}>Demo User</button>
                <button type="submit">Sign In</button>
                <button id="session-alt" onClick={() => this.props.openModal()}>or Sign Up</button>
                </form>
            </div>
        )
    }

}

export default withRouter(LoginForm);
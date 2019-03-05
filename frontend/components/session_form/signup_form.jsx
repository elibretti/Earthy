
import React from 'react';
import {withRouter} from 'react-router-dom';

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name:"",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.signup(user).then(this.props.closeModal)
        this.props.clearErrors()
    } 

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
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

    componentWillUnmount(){
        this.props.clearErrors()
    }
    
    render(){
        return (
            <div className='session-form-container'>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className='signup form'>
                <h2>Create your account</h2>
                <h3>Registration is easy.</h3>
                <label htmlFor='email'>
                    Email address <span id='asterisk'>*</span>
                </label>
                <input type='text' 
                    id="email"
                    value={this.state.email} 
                    onChange={this.update("email")}/>
                <label htmlFor='name'>
                    First name <span id='asterisk'>*</span>
                </label>
                <input type='text' 
                    id="name"
                    value={this.state.first_name} 
                    onChange={this.update("first_name")}/>
                <label htmlFor='password'>
                    Password <span id='asterisk'>*</span>
                </label>
                <input type='password' 
                    id="password"
                    value={this.state.password} 
                    onChange={this.update("password")}/>
                <button type="submit">Register</button>
                <button  id="session-alt" onClick={() => this.props.openModal()}>or Login</button>
                </form>
            </div>
        )
    }


}

export default withRouter(SignUpForm);
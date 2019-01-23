
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
    } 

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
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
                <h2>Create your account</h2>
                <p>Registration is easy.</p>
                <label>
                    Email address
                    <input type='text' 
                    value={this.state.email} 
                    onChange={this.update("email")}/>
                </label>
                <label>
                    First name
                    <input type='text' 
                    value={this.state.first_name} 
                    onChange={this.update("first_name")}/>
                </label>
                <label>
                    Password
                    <input type='password' 
                    value={this.state.password} 
                    onChange={this.update("password")}/>
                </label>
                <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }


}

export default withRouter(SignUpForm);
import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
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
        this.props.login(user).then(this.props.closeModal)
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
                    <li key ={`error-${i}`}> error.messages</li>
                })}
            </ul>
        )
    }


    render(){
        return (
            <div>
                <form onSubmit={this.props.login} className='login-form'>
                <h2> Sign in to Continue</h2>
                <label>
                    Email address
                    <input type='text' value={this.state.email}/>
                </label>


                </form>
            </div>
        )
    }


}

export default withRouter(LoginForm);
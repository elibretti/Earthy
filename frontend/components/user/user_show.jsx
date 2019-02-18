import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import UserProducts from './user_products_container'

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    renderEditButton() {
        if(this.props.user.id === this.props.currentUser){
            
            return (
            <Link to='/users/edit'>
                <i className="fas fa-pen"></i> 
                Edit
                </Link>
                )
            
        }else{
            return null;
        }

    }

    renderCity () {
        if(this.props.user.city){
            return (
                <p><i className="fas fa-map-marker-alt"></i>{this.props.user.city}</p>
            )
        }else{
            return null;
        }
    }

    render() {

        const user = this.props.user;
        if(!user){
            return (
                <h1> Loading...</h1>
            )
        }
    
        return (
        <div className="user-show-container">
            <div className="user-show-top">
                <div className="profile-picture-container">
                    <img className="profile-picture" src={user.photoUrl}/>
                </div>
                <div className="user-info">
                    <h1>{user.first_name}</h1>
                    {this.renderCity()}
                    <p>{user.gender}</p>
                    <p>{user.birth_month} {user.birth_date}</p>
                   {this.renderEditButton()}
                </div>
                <div className="user-about">
                    <h1>About</h1>
                    <p>{user.about}</p>
                </div>
            </div>

            <UserProducts
                userId={user.id}/>
        </div>
        )
    }
}

export default withRouter(UserShow);
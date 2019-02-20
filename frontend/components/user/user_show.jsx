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
            <Link to='/users/edit' className="user-edit-button">
                <i className="fas fa-pencil-alt"></i>
                Edit Profile
                </Link>
                )
            
        }else{
            return null;
        }

    }

    renderCity () {
        if(this.props.user.city){
            return (
                <p id="user-city"><i className="fas fa-map-marker-alt"></i>{this.props.user.city}</p>
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
                    <p id="gender">{user.gender}</p>
                    <p id="birthday">{user.birth_month} {user.birth_date}</p>
                   {this.renderEditButton()}
                </div>
                <div className="user-about">
                    <h1>About</h1>
                    <p>{user.about}</p>
                </div>
            </div>
            <div className="user-products-container">
                <h3>Your Listings</h3>
                <UserProducts
                    userId={user.id}/>
            </div>
        </div>
        )
    }
}

export default withRouter(UserShow);
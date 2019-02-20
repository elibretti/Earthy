import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class DropDown extends React.Component {

    toggleMenu(){
        document.getElementById("user-menu").classList.toggle("show");
    }

    handleClick(){
        this.props.logout()
        this.props.history.push("/")
    }

    
    render(){
        return(
            <div className="user-menu">
                <button onClick={this.toggleMenu} className="user-button">
                        <div className="you-image-container">
                            <img className="you-image" src={this.props.current_user.photoUrl}/>
                        </div>
                        <div className="you-label">You <i className="fas fa-caret-down"></i></div>
                </button>
                <div id="user-menu" className="menu-content">
                    <Link to={`/users/${this.props.current_user.id}`} className="user-link">
                        <div className="you-image-container">
                            <img className="you-image" src={this.props.current_user.photoUrl}/>
                        </div>
                        <div>
                            <div className="profile-name">{this.props.current_user.first_name}</div>
                            <div className="profile-label"><p>View profile</p> <i className="fas fa-angle-right"></i></div>
                        </div>
                    </Link>
                    <button id="logout" onClick={() => this.handleClick()}>Logout</button>
                </div>
            </div>
        )
    }

}

window.onclick = function(event) {
    if (
        !event.target.matches('.user-button') &&
        !event.target.matches('.you-image-container') &&
        !event.target.matches('.you-image') &&
        !event.target.matches('.you-label') 
        ){
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


export default withRouter(DropDown);
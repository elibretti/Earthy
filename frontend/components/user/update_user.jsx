import React from 'react';
import {withRouter} from 'react-router-dom';
import Script from 'react-load-script';
import {monthSelector, dateSelector} from '../../util/selector'
class UpdateUser extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user ;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
            }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user[id]', this.state.id)
        formData.append('user[first_name]', this.state.first_name);
        formData.append('user[gender]', this.state.gender);
        formData.append('user[city]', this.state.city);
        formData.append('user[birth_month]', this.state.birth_month);
        formData.append('user[birth_date]', this.state.birth_date);
        formData.append('user[about]', this.state.about);
        if(this.state.photoFile === ""){
            this.setState({photoFile: null})
        }
        if (this.state.photoFile) {
          formData.append('user[photo]', this.state.photoFile);
        }
        this.props.updateUser(formData).then(payload =>{
            return this.props.history.push(`/users/${payload.user.id}`)
        }
          );
        
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photoFile: file});
        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl:"", photoFile: null });
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

    renderPreview() {
        if(this.state.photoUrl === "" ){
            return null;
        }else{
            return (
                <div className="user-preview">
                <img src={this.state.photoUrl} />
                </div>
            )
        }
    }

    handleScriptLoad(){
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('city'),
            {types: ['(cities)']}
          );
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect(){
        let addressObject=this.autocomplete.getPlace();
        let address = addressObject.address_components;
        if(address){
            this.setState({city: address[0].long_name})
        }
    }
    render() {
        return (
            <div className="update-user-container">
                    <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyChKcF5-uprTVR_LbTUvSURLy6dS0wdpgQ&libraries=places"
                    onLoad={this.handleScriptLoad}
                    />
                <div className="update-user-header">
                    <h2>Your Public Profile</h2>
                    <p>Everything on this page can be seen by anyone</p>
                </div>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className='user-form'>
                    <div className="update-user-info" >
                        <div className = 'profile-picture' id="input-container">
                            <label htmlFor="user-image">Profile picture</label> 
                            <div className = 'user-image-upload'>
                                <input type="file"
                                    id="user-image"
                                    accept="image/png, image/jpeg"
                                    onChange={this.handleFile}
                                    ></input>
                                {this.renderPreview()}
                            </div>
                        </div>
                        <div className="name" id="input-container"> 
                            <label htmlFor="name">Name</label>
                            <input type='text' 
                                id="name"
                                value={this.state.first_name} 
                                onChange={this.update("first_name")}/>
                        </div>
                        <div className="gender" id="input-container">

                            <label htmlFor="gender-inputs">Gender</label>
                            <div id="gender-inputs">
                                <input type="radio"
                                    id='female'
                                    value="female"
                                    checked={this.state.gender === "female"}
                                    onChange={this.update("gender")}/>
                                <label htmlFor="female">Female</label>  
                                <input type="radio"
                                    id='male'
                                    value="male"
                                    checked={this.state.gender === "male"}
                                    onChange={this.update("gender")}/>
                                <label htmlFor="male"> Male</label>
                                <input type="radio"
                                    id='other'
                                    value="other"
                                    checked={this.state.gender === "other"}
                                    onChange={this.update("gender")}/>
                                <label htmlFor="other"> Other</label>  
                            </div>
                        </div>
                        <div className="city" id="input-container"> 
                            <label htmlFor="city">City</label>
                            <input type="text" 
                                id="city"
                                defaultValue={this.state.city}
                                />
                        </div>
                        <div className="birthday" id="input-container">
                            <label htmlFor="birth_month birth_date" id="birthday">Birthday</label>
                            {monthSelector("birth_month", this.state.birth_month, this.update("birth_month"))}
                            {dateSelector("birth_date", this.state.birth_date, this.update("birth_date"))}
                        </div>
                        <div className="about" id="input-container">
                            <label htmlFor="about">About</label>
                            <textarea id='about'
                                value={this.state.about || ""}
                                onChange={this.update("about")}/>
                        </div>
                    </div>
                        <input type='submit' value="Save Changes"/> 
                </form>
            </div>
        )
    }
}

export default withRouter(UpdateUser)
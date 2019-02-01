import  React from 'react';
import {withRouter} from 'react-router-dom';


class ThankYou extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.closeModal();
        this.props.history.push("/")
    }
    render(){
        return(
            <div className="thank-you">
                <div className="thank-you-border">
                <h2 id="thank-you-greeting">Thanks for coming to </h2>
                <h1 className="earthy-logo">Earthy</h1>
                <button onClick={this.handleClick} id="thank-you-return">Return to Home Page</button>
                </div>
            </div>
        )
    }
}

export default withRouter(ThankYou);
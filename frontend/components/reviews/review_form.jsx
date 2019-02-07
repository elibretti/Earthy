import React from 'react'
import {withRouter} from 'react-router-dom'
import Rating from 'react-rating';
class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state= this.props.review
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            if(field === "rating"){
                this.setState({[field]: e});
            }else{
                this.setState({[field]: e.target.value});
            }

        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state).then(this.props.closeModal)
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

    render(){
        const product = this.props.product;
        if (!product) {
          return <div>Loading...</div>;
        }
        return(
            <div className="new-review-container">
                <div className="close-review">
                    <h2>Leave a Review</h2>
                    <button onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
                </div>
                <div className="review-product-info">
                    <div className="review-photo">
                        <img src={this.props.product.photoUrl} />
                    </div>
                    <h2>{this.props.product.title}</h2>

                </div>
                <form onSubmit={this.handleSubmit} className="review-form">
                    {this.renderErrors()}
                    <h1>My review</h1>
                    <Rating 
                        className="review-rating"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={this.state.rating}
                        onChange={this.update("rating")}
                    />
                    <h2>Help others by sharing your feedback</h2>
                    <p>What do you like about this? Did it ship on time? Describe your experience with this shop.</p>
                    <textarea rows="7" maxLength="300"
                        onChange={this.update("body")} 
                        value={this.state.body}
                        id="review-body"
                    />
                    <div className="review-buttons">
                    <input type="submit" id="review-submit" value="Post your review"/>
                    <button onClick={this.props.closeModal} id="review-cancel">Cancel</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default withRouter(ReviewForm)

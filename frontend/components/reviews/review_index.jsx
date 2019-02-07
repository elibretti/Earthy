import React from 'react';
import withRouter from 'react-router-dom';
import Rating from 'react-rating';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllReviews(this.props.product_id)
    }

    componentWillUnmount(){
        this.props.receiveReview({})
    }

    handleDelete(){
        this.props.deleteReview(this.props.user_review)
    }
    editableReview(){
        if(!this.props.user_review.id){
            return null
        }else if(this.props.user_review.product_id === this.props.product_id){
            return(
                <div key="0" className="user-review">
                    <ReviewIndexItem 
                        key={this.props.user_review.id}
                        review={this.props.user_review}
                    />
                    <div className="modify-review">
                        <button id="edit-review" onClick={() => this.props.openModal("edit-review") }>Edit</button>
                        <button id="delete-review" onClick={this.handleDelete }>Delete</button>
                    </div>
                 </div>
                 )
             }   
    }
    

    render(){
        if (!this.props.reviews) {
            return <div>Loading...</div>;
          }
        let hasReviewed;
        let reviews = this.props.reviews.map((review) => {
            if(review.user_id === this.props.user_id){
                if(!this.props.user_review.id){
                    
                    this.props.receiveReview(review)
                }
                hasReviewed = true;
            }else
            return (
                <ReviewIndexItem 
                    key={review.id}
                    review = {review}
                />
            )
        })

        if(reviews.length === 0){
            reviews = <div className="null-reviews">Sorry! No reviews yet :(</div>
        }

        let newReviewButton; 
        if(hasReviewed || !this.props.user_id){
           newReviewButton = null;
        }else{
            newReviewButton =  <button id="new-review" onClick={() => this.props.openModal("new-review") }> Leave a Review</button>
        }
        return (
            <div className="review-index">
              {newReviewButton}
                <h1>Reviews</h1>
                <ul className="review-index-list">
                    {this.editableReview()}
                    {reviews}
                </ul>
            </div>
        )
    }
}


export default ReviewIndex;
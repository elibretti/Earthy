import React from 'react';
import withRouter from 'react-router-dom';
import Rating from 'react-rating';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    averageReview(){
        let review_sum = 0;
        this.props.reviews.forEach( (review)=> {
            review_sum += review.rating
        });
        return (review_sum / this.props.reviews.length)
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
    
    renderProductRating(){
        if(this.averageReview()){
            return (
                <div className="average-review">
                <Rating 
                    className="review-index-rating"
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={this.averageReview()}
                    readonly={true}
                />
                ({reviews.length})
            </div>
            )
        }else{
            return null;
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
                <div className="review-header"> 
                    <h1>Reviews</h1>

                </div>                          
                
                <ul className="review-index-list">
                    {this.editableReview()}
                    {reviews}
                </ul>
            </div>
        )
    }
}


export default ReviewIndex;
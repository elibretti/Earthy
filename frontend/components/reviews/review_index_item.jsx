import React from 'react';
import {withRouter} from 'react-router-dom';
import Moment from "react-moment";
import Rating from 'react-rating';

const ReviewIndexItem = ({review}) => {
    return(
        <li className="review-index-item">
            <div className="review-image-container">
                <img src={review.userPhoto}/>
            </div>
            <div className="review-info-container">
                <div className="review-item-header">
                    <h2 className="review-name">{review.first_name}</h2>
                    <Moment className="review-date" format="MMMM D, YYYY">
                            {review.updated_at}
                    </Moment>
                </div>
                <Rating 
                        className="review-index-rating"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={review.rating}
                        readonly={true}
                    />
                <div className="review-body">
                    {review.body}
                </div>
            </div>
        </li>
    )
}

export default withRouter(ReviewIndexItem);
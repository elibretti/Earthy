import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Rating from 'react-rating';

class RecentReviews extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.action()
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        let recent_review_items = this.props.reviews.map( (review) => {
            let date = new Date(review.created_at);
            return (
                <li className="recent-review">
                    <div className="review-image-container">
                        <img src={review.userPhoto}/>
                    </div>
                    <h1><span>{review.user}</span> wrote on {monthNames[date.getMonth()]} {date.getDate()}</h1>
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
                    <Link to={`/products/${review.product_id}`} >
                    <div className="review-product">
                        <img src={review.productPhoto}/>
                    </div>
                    <h3>{review.product}</h3>
                    </Link>
                </li>
            )
            
        }
        )
        return (
            <div className='recent-reviews'>
                <div className="recent-header-left">
                    <h1>Recent reviews from happy people</h1>
                </div>
                <ul className="recent-review-list">
                    {recent_review_items}
                </ul>
            </div> 
        )
    }
}

export default withRouter(RecentReviews);
import {fetchAllReviews} from '../../actions/review_actions';
import {connect} from 'react-redux';
import RecentReviews from './recent_reviews';



const msp = (state) => {
    let sorted_reviews = () => {
        let reviews = Object.keys(state.entities.reviews).map( id => state.entities.reviews[id] ).slice(0,10);
        
        
        return reviews.sort(function(a, b) {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
            return a>b ? -1 : a<b ? 1 : 0;
        });
    }

    let happy_reviews = () => {
        let reviews = sorted_reviews();
        let happy_reviews = [];
        if(reviews.length === 0){
            return [];
        }
        
            for(let i = 0; i < 10; i++ ){
                    if (reviews[i].rating === 5 && happy_reviews.length < 3){
                        happy_reviews.push(reviews[i])
                    }
                }
           
        return happy_reviews;
    }

    return {
        reviews: happy_reviews()
    }
}

const mdp = (dispatch) => {

    return {
        action: () => dispatch(fetchAllReviews())
    }
}

export default connect(msp,mdp)(RecentReviews);
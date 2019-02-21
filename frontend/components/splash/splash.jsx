import React from 'react';
import {withRouter} from 'react-router-dom';
import Gallery from '../gallery/gallery'
import RecentProductsContainer from '../product/recent_products_container';
import RecentReviewsContainer from '../reviews/recent_reviews_container';
class Splash extends React.Component {
    render(){
        return (
        <div className='splash'>
            <h2> If it’s natural, sustainable, or eco-friendly, it’s on Earthy.</h2>
            <Gallery/>
            <ul className='splash-list'>
                <li>
                    <h3>
                        <i className="fas fa-check"> </i>
                         Eco-conscious everything
                    </h3>
                    <p>We have millions of environmentally friendly items, so you can find whatever you need (or really, really want).</p>
                </li>
                <li>
                    <h3>
                        <i className="fas fa-check"> </i>
                         Passionate sellers 
                    </h3>
                    <p>Buy directly from someone who truly cares about saving the planet.</p>
                </li>
                <li>
                    <h3>
                        <i className="fas fa-check"> </i>
                         Trusted technology
                    </h3>
                    <p>We use proven e-commerce platforms to secure your transactions.</p>
                </li>
            
            </ul>
            {/* <RecentProductsContainer /> */}
            <RecentReviewsContainer />
            <div className="blog-container">
                <h1>Helpful blogs on eco-friendly living</h1>
                <div className="blog-posts">
                    <a href="https://www.goodenergy.co.uk/blog/2017/08/22/ultimate-guide-eco-friendly-living/" id="blog1">
                        <div id="thumbnail">

                        </div>
                        <h3>good energy</h3>
                        <h2>The Ultimate 20 Step Guide to Eco-friendly Living </h2>
                        <p>"A journey of a thousand miles begins with a single step." </p>
                    </a>
                    <a href="https://www.sheknows.com/home-and-gardening/articles/807479/52-cheap-ways-to-go-green/" id="blog2">
                        <div id="thumbnail">

                        </div>
                        <h3>sheKnows</h3>
                        <h2>11 Ways to Go Green Without Blowing Your Budget</h2>
                        <p>Most of us would like to treat the Earth a little better, but sometimes it can be difficult — even expensive — to do</p>
                    </a>
                    <a href="https://experiencelife.com/article/going-green/" id="blog3">
                        <div id="thumbnail">

                        </div>
                        <h3>Experience Life</h3>
                        <h2>Going Green</h2>
                        <p>Clear air. Clean water. Clean Earth. What’s good for the planet is good for you! Here’s how to make your life a little more eco-friendly.</p>
                    </a>

                </div>

            </div>
        </div>

        );
    }
}

export default withRouter(Splash);
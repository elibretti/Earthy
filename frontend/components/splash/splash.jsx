import React from 'react';
import {withRouter} from 'react-router-dom';
import Gallery from '../gallery/gallery'

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
        </div>
        );
    }
}

export default withRouter(Splash);
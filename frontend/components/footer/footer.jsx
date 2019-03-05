import React from 'react';
import {Link, withRouter} from 'react-router-dom';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="left-footer">
                    <Link to="/">
                        <h1 className="earthy-logo">Earthy</h1>
                    </Link>
                    <p>If it’s natural, sustainable, or eco-friendly, it’s on Earthy.</p>
                </div>


                <div className="right-footer">
                    <a href="https://www.linkedin.com/in/elizabeth-libretti-350097b0/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/elibretti"><i className="fab fa-github"></i></a>
                    <a href="https://angel.co/elizabeth-libretti-1?public_profile=1"><i className="fab fa-angellist"></i></a>
                    <a href="https://elibretti.github.io/" id="site"><i className="fas fa-user"></i>       </a>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);
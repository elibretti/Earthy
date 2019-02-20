import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import ProductIndexItem from './product_index_item';

class RecentProducts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        if(this.state.page === 1){
            this.setState({page: 2})
            document.getElementById("page-2").classList.toggle("show");
            document.getElementById("page-1").classList.remove("show");
        }else{
            this.setState({page: 1})
            document.getElementById("page-1").classList.toggle("show");
            document.getElementById("page-2").classList.remove("show");           
        }
       
    }

    componentDidMount() {
        this.props.action()
    }


    render() {
        const products = this.props.products.map((product) => {
            return(
                <ProductIndexItem
                    key={product.id}
                    product={product}
                />
            )
        })
        return (
            <div className='recent-products'>
            <div className="recent-header"> 
                <div className="recent-header-left">
                    <h1>Recently Added</h1>
                    <Link to="/products" className="see-more">See more</Link>
                </div>
                <div className="recent-header-right">
                    <p className="page-index">Page {this.state.page} of 2</p>
                    <button onClick={this.toggleMenu} id="left">
                        <i className="fas fa-angle-left"></i>                   
                    </button>
                    <button onClick={this.toggleMenu} id="right">
                        <i className="fas fa-angle-right"></i>                   
                    </button>
                </div>
            </div>
                <ul className='recent-products-list current' id="page-1">
                    {products.slice(0,5)}
                </ul>
                <ul className='recent-products-list' id="page-2">
                    {products.slice(5)}
                </ul>
            </div>
        )
    }
}

export default withRouter(RecentProducts);
import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Category extends React.Component{
    render(){
        return (
            <div className="categories"> 
                <Link  to="/category/kitchen">Kitchen</Link >
                <Link  to="/category/cleaning">Cleaning</Link >
                <Link  to="/category/health">Health</Link >
                <Link  to="/category/food">Food</Link >
                <Link  to="/category/office">Office</Link >
            </div> 
        )
    }
}

export default withRouter(Category);
import React from 'react';
import {withRouter} from 'react-router-dom';

class Category extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name){
        this.props.action(name).then(() => {
            this.props.history.push("/category")
        })
    }

    render(){
        return (
            <div className="categories"> 
                <button onClick={() => this.handleClick("kitchen")}>Kitchen</button>
                <button onClick={() => this.handleClick("cleaning")}>Cleaning</button>
                <button onClick={() => this.handleClick("health")}>Health</button>
                <button onClick={() => this.handleClick("food")}>Food</button>
                <button onClick={() => this.handleClick("office")}>Office</button>
            </div> 
        )
    }
}

export default withRouter(Category);
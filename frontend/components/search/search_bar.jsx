import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
        this.update = this.update.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    
    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value});  
        }
    }

    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.search(this.state.query).then(() => {
            this.props.history.push("/search")
        })
    }   
    

    render(){
        return (
        <form className='search' onSubmit={this.handleSubmit}> 
            <input type='text' 
            id='search-text'
            onChange={this.update("query")}
            value={this.state.query}
            placeholder='Search for Items or Shops'/>
            <input type='submit'  id='search-submit' value='Search' />
        </form>
        )
    }
}

export default withRouter(SearchBar);
import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        // to prevent that the browser automatically submits the form when the user actually submits it. 
        // this is because the browser will reload the page on submitting
        event.preventDefault();
        
        // callback from parent component to pass the term there
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
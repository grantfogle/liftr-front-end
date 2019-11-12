import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    state = {
        searchString: '',
    };

    render() {
        return (
            <div className="seachbar">
                <div className="searchbar__icon">0</div>
                <input type="text" placeholder="Search..."></input>
            </div>
        );
    }
}

export default SearchBar;
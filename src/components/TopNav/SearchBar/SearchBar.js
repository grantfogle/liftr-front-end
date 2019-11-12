import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.scss';

class SearchBar extends Component {
    state = {
        searchString: '',
    };

    render() {
        return (
            <div className="seachbar">
                <FontAwesomeIcon className="mr-1" icon="search" />
                <input type="text" placeholder="Search..."></input>
            </div>
        );
    }
}

export default SearchBar;
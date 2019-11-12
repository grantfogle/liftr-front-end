import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import './TopNav.scss';

const TopNav = ({ toggleSideMenu }) => {
    return (
        <header className="top-nav">
            <nav className="top-nav__container" >
                <h4 className="top-nav__container__logo">GAINZ</h4>
                <SearchBar />
                <p>User placeholder</p>
            </nav>
        </header>
    )
}

export default TopNav;
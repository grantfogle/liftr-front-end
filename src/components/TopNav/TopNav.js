import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TopNav.scss';

const TopNav = ({ toggleSideMenu }) => {
    return (
        <header className="top-nav">
            <nav className="top-nav__container" >
                <h4 className="top-nav__container__logo">GAINZ</h4>
                <SearchBar />
                <div class="top-nav__container__user">
                    <FontAwesomeIcon className="top-nav__container__user__icon" icon="user" />
                    <p>User</p>
                </div>
            </nav>
        </header>
    )
}

export default TopNav;
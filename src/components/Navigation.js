import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const Navigation = ({ toggleSideMenu }) => {
    return (
        <header class="header">
            <nav>
                {/* <Navbar fixed="top" bg="dark" variant="dark"> */}
                <Navbar fixed="top">
                    <Navbar.Brand href="#home" className="text-white">
                        GAINZ
                    </Navbar.Brand>
                </Navbar>
            </nav>
        </header>
    )
}

export default Navigation;
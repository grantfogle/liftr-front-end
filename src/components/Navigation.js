import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const Navigation = ({ toggleSideMenu }) => {
    return (
        <header>
            <nav>
                {/* <Navbar fixed="top" bg="dark" variant="dark"> */}
                <Navbar fixed="top">
                    <Navbar.Brand href="#home" className="text-white">
                        Liftr
                    </Navbar.Brand>
                    <div className="hamburger" onClick={toggleSideMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </Navbar>
            </nav>
        </header>
    )
}

export default Navigation;
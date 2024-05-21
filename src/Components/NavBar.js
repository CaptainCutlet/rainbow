import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="sectionA" smooth={true} duration={500}>Home</Link>
            <Link to="sectionB" smooth={true} duration={500}>About</Link>
            <Link to="sectionD" smooth={true} duration={500}>How to buy</Link>
        </nav>
    );
}

export default NavBar;

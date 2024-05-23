import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">   
            <Link to="sectionA" smooth={true} duration={500}><span className='rainbow_text_animated'>Home</span></Link>
            <Link to="sectionB" smooth={true} duration={500}><span className='rainbow_text_animated'>About</span></Link>
            <Link to="sectionD" smooth={true} duration={500}><span className='rainbow_text_animated'>How to buy</span></Link>
        </nav>
    );
}

export default NavBar;

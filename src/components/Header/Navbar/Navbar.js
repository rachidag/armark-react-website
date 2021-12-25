import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom"

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import './navbar.scss';
import logo from '../../../assets/logo.svg';


function Navbar() {

    const [menuToggle, setmMnuToggle] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <div className="navbar__logo">
                    <Link to="/">
                        <img src={logo} className="site-logo" alt="logo" />
                    </Link>
                    <button className="navbar__toggle" onClick={() => setmMnuToggle(!menuToggle)}>
                        {menuToggle ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`navbar__collapse${menuToggle ? ' open' : ''}`}>
                    <ul className="navbar__links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="about">About</NavLink></li>
                        <li><NavLink to="projects">Projects</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>
                    </ul>
                    <div className="navbar__options">
                        <button className="btn">
                            More Options
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

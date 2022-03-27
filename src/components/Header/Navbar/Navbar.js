import React from 'react';
import { Link, NavLink } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

import './navbar.scss';
import logo from '../../../assets/logo.svg';


function Navbar({menuToggle, setMenuToggle}) {

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <div className="navbar__logo">
                    <Link to="/">
                        <img src={logo} className="site-logo" alt="logo" />
                    </Link>
                    <button className="navbar__toggle" onClick={() => setMenuToggle(!menuToggle)}>
                        {menuToggle ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className={`navbar__collapse${menuToggle ? ' open' : ''}`}>
                    <ul className="navbar__links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="about">About</NavLink></li>
                        <li><NavLink to="services">Services</NavLink></li>
                        <li><NavLink to="projects">Projects</NavLink></li>
                    </ul>
                    <div className="navbar__contact">
                        <NavLink to="contact" className="btn">Contact us</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

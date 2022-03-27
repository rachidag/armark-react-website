import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import './topbar.scss'; 

function Topbar() {
    return (
        <div className="topbar">
            <div className="container topbar__container">
                <ul className="topbar__contact">
                    <li>
                        <a href="tel:+072 223 2424">
                            <i><FaPhone /></i>
                            <span>+072 223 2424</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:contact@company.com">
                            <i><FaEnvelope /></i>
                            <span>contact@armark.com</span>
                        </a>
                    </li>
                </ul>
                <ul className="topbar__social">
                    <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar;

import React from 'react';
import './footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer__links">
                    <li><Link to="about">About</Link></li>
                    <li><Link to="about">Projects</Link></li>
                    <li><Link to="faq">FAQ</Link></li>
                    <li><Link to="privacy-policy">Privcy policy</Link></li>
                    <li><Link to="contact">Get in touch</Link></li>
                </ul>
                <ul className="footer__social">
                    <li><a href="https://facebook.com" target="_blank"><FaFacebookF /></a></li>
                    <li><a href="https://twitter.com" target="_blank"><FaTwitter /></a></li>
                    <li><a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a></li>
                    <li><a href="https://instagram.com" target="_blank"><FaInstagram /></a></li> 
                </ul>
                <p className="footer__copyright">Copyright © 2022 Armark - All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;

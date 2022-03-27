import React from 'react';
import './footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logoLight from '../../assets/logo-light.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className='row'>

                    <div className='col-lg-3 col-sm-6 footer__copyright'>
                        <Link to='/'>
                            <img src={logoLight} alt='Logo Armark' className='logo' />
                        </Link>
                        <p className='copyright-text'>
                            © 2022 Armark. <br /> 
                            All rights reserved.
                        </p>
                        <ul className="social-icons">
                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a></li> 
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6 footer__links'>
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="services">Services</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6 footer__links'>
                        <h3>Ressources</h3>
                        <ul>
                            <li><Link to="privacy-policy">Privacy policy</Link></li>
                            <li><Link to="terms-of-service">Terms of service</Link></li>
                            <li><Link to="faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-sm-6 footer__contact'>
                        <h3>Get in Touch</h3>
                        <address>
                            11 Armark Str. 12<br />
                            5432 New York,<br />
                            United Sates
                        </address>
                        <a href='tel:+072 223 2424' title=''>+072 223 2424</a>
                        <a href='mailto:contact@armark.com' title=''>contact@armark.com</a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;

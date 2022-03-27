import React from 'react';
import { Link } from 'react-router-dom';
import './about_block.scss';
import AboutImg from '../../assets/about.jpg';

function AboutSection() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="about__content">
                            <span>You are in safe hands</span>  
                            <h2>A company turning ideas into beautiful things.</h2>
                            <div className="body">
                                <p>We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
                                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.</p>
                                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                            <Link to="contact" className="btn">Contact us for more details</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="about__img">
                            <img src={AboutImg} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;

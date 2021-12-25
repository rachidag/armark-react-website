import React from 'react';
import { Link } from 'react-router-dom';
import './about_section.scss';
import AboutImg from '../../assets/about.jpg';

function AboutSection() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="about__content">
                            <span>Since 2006</span>  
                            <h2>We always plan a lot for your success</h2>
                            <div className="body">
                                <p>Just before European Union leaders agreed their guidelines for the Brexit nego tiations last week, the president of the EU council, Donald Tusk, said: It is clear that progress on people, money and Ireland must come first. It was rather startling to find Irish concerns up there.</p>
                                <p>Just before European Union leaders agreed their guidelines for the Brexit nego tiations last week, the president of the EU council, Donald Tusk, said: It is clear that progress on people, money and Ireland must come first. It was rather startling to find Irish concerns up there.</p>
                            </div>
                            <Link to="contact" className="btn">Contact us for more details</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="about__img">
                            <img src={AboutImg} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;

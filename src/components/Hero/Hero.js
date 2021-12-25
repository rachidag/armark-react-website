import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <span>There are no secrets to success</span>
                    <h1>Happiness does not come from doing easy work</h1>
                    <Link to="projects" className="btn">Discover our projects</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;

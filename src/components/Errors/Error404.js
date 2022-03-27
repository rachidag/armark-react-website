import React from 'react'
import { Link } from 'react-router-dom';
import './error404.scss';
import img404 from "../../assets/404.png";

function Error404() {
    return (
        <section className="error404">
            <div className="container">
                <div className="error404__content">
                    <img src={img404} alt="Page not found" />
                    <h1>Oops! Page Not Found.</h1>
                    <p>The page you are looking for is not available or has been moved. Try a different page or go to homepage with the button below.</p>
                    <Link to="/" className="btn">Back to website</Link>
                </div>
            </div>
        </section>
    )
}

export default Error404;

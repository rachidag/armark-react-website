import React from 'react'
import { Link } from 'react-router-dom';
import './error404.scss';

function Error404() {
    return (
        <section className="error404">
            <div className="container error404__container">
                <div className="error404__content">
                    <h1>Eroor 404!</h1>
                    <p>Opps... Sorry, this page is not found. It looks like nothing was found at this location.</p>
                    <Link to="/" className="btn">Back to website</Link>
                </div>
            </div>
        </section>
    )
}

export default Error404;

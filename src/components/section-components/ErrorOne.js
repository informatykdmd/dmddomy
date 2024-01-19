import React from 'react';
import { Link } from 'react-router-dom';

const ErrorOne = () => {
    return(
        <>
        {/* Error 404 Section */}
        <section className="error-404-section section-padding-all">
            <div className="default-container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="error-404">
                    <h1>404!</h1>
                    <h5>Page Not Found!</h5>
                    <p>We are sorry, The page you were looking for doesn't exsit.</p>
                    <Link className="ploting-btn btn-style-two" to="/">GO HOME</Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Error 404 Section */}
        </>
    )
}

export default ErrorOne;
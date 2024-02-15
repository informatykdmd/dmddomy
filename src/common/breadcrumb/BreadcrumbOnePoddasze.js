import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbOne = ({ title , rootUrl , parentUrl, currentUrl, imgUrl}) => {
    return (
        <>
        {/* Banner Section */}
        <section className="banner-section" style={{background: `url(${imgUrl})`}}>
            <div className="banner-heading">
                <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
            </div>
            <div className="banner-link">
                <ul>
                <li>
                    <Link to={`${rootUrl}`} dangerouslySetInnerHTML={{__html: parentUrl}}></Link>
                </li>
                <li className="banner-arrow-pos"><i class="fa fa-chevron-right"></i></li>
                <li dangerouslySetInnerHTML={{__html: currentUrl}}></li>
                </ul>
            </div>
        </section>
        {/*End Banner Section */}
        </>
    )
}

export default BreadcrumbOne;
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
    return(
        <>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
            <div className="default-container">
            <div className="row clearfix">
                <div className="column col-md-6 col-sm-12 col-xs-12">
                <div className="copyright">Copyrights © 2024 DMD DOMY. All Rights Reserved. </div>
                </div>
                <div className="column col-md-6 col-sm-12 col-xs-12">
                <ul className="footer-nav">
                    <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
                    <li><Link to="/zasady-witryny">Zasady korzystania z witryny</Link></li>
                    <li><Link to="/faq">FAQ’s</Link></li>
                    <li><Link to="/help">Pomoc</Link></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Copyright;
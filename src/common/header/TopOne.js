import React from 'react';
// import { Link } from 'react-router-dom';

const TopOne = () => {
    return(
        <>
        {/*Header Top*/}
        <div className="header-top">
            <div className="default-container">
                <div className="clearfix">
                    {/*Top Left*/}
                    <div className="top-left">
                    <ul className="header-info-list">
                        <li><i className="icon fa fa-envelope" /><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></li>
                        <li><i className="icon fa fa-map-marker" />ul. Dworkowa 51, 05-082 Stare Babice</li>
                        <li><i className="icon fa fa-headphones" /><a href="tel:+48604125563">+48 604 125 563</a></li>
                    </ul>
                    </div>
                    {/*Top Right*/}
                    <div className="top-right">
                    {/*Social Box*/}
                    <ul className="social-box">
                        <li><a href="https://www.facebook.com/dmdbudownictwo/" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCBRN-SPMEIYK6YRV23Komxw" rel="noreferrer" target="_blank"><i className="fa fa-youtube" /></a></li>
                        <li><a href="https://www.instagram.com/dmddomy/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default TopOne;
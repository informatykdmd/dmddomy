import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const FooterOne = () => {
    return(
        <>
        {/*Main Footer*/}
        <footer className="footer">
            <div className="default-container">
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="row clearfix">
                {/*Column*/}
                <div className="big-column col-lg-12">
                    <div className="row clearfix">
                    {/*Footer Column*/}
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget logo-widget">
                        <div className="logo">
                            <Link to="/"><img src="images/logo_ls_s_w.png" alt="" /></Link>
                        </div>
                        <div className="text">ul. Dworkowa 51<br />05-082 Stare Babice</div>
                        <ul className="list-style-one">
                            <li><span>Telefon:</span> <a href="tel:+48604125563">+48 604 125 563</a></li>
                            {/* <li><span>WhatsApp:</span> <a href="https://wa.me/+48604125563">+48 604 125 563</a></li> */}
                            <li><span>Email:</span> <a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></li>
                            <li><span>Pracujemy:</span><p>Poniedziałek - Piątek</p><p>9:00 - 17:00</p></li>
                        </ul>
                        <ul className="social-icon">
                            <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                            <li><Link to="#"><i className="fa fa-vimeo" /></Link></li>
                            <li><Link to="#"><i className="fa fa-pinterest" /></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget posts-widget">
                        <h2>Najnowsze wpisy</h2>
                        <article className="post">
                            <div className="text"><Link to="/blog-single">Isolate &amp; Reframe Your Beliefs</Link></div>
                            <ul className="post-date">
                            <li><i className="fa fa-user" /> By Admin</li>
                            <li>MAY 25 2022</li>
                            </ul>
                        </article>
                        <article className="post">
                            <div className="text"><Link to="/blog-single">Take Action For Your Business</Link></div>
                            <ul className="post-date">
                            <li><i className="fa fa-user" /> By Admin</li>
                            <li>MAY 25 2022</li>
                            </ul>
                        </article>
                        <article className="post">
                            <div className="text"><Link to="/blog-single">Improve Your Business Ideas</Link></div>
                            <ul className="post-date">
                            <li><i className="fa fa-user" /> By Admin</li>
                            <li>MAY 25 2022</li>
                            </ul>
                        </article>
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget links-widget">
                        <h2>Szybki skrót</h2>
                        <ul className="footer-link">
                            <li><Link to="/o-nas">O nas</Link></li>
                            <li><Link to="/oferta-post-left-sidebar">Oferta</Link></li>
                            <li><Link to="/realizacje-posts-right-sidebar">Realizacje</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Polityka prywatności</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget newsletter-widget">
                        <h2>Nasz Newsletter</h2>
                        <div className="text">Otrzymuj na swoją skrzynkę najświeższe informacje i oferty od DMD</div>
                        <div className="newsletter-form">
                        {/* <div className="form-group">
                            <Link to="/subscribe-us" className="ploting-btn btn-style-one">Subskrybuj</Link>
                        </div> */}
                            <form method="post" action="/subscribe-us">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Twoje Imię" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email adres" required />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="ploting-btn btn-style-one">Subskrybuj</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Copyright />
        </footer>
        {/*End Main Footer*/}
        </>
    )
}

export default FooterOne;
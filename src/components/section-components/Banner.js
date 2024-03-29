import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {
    return(
        <>
        <section className="slider">

                <OwlCarousel 
                items={1}
                loop={true}
                nav={true}
                dots={true}
                autoplay={true}
                animateIn={'fadeIn'}
                animateOut={'fadeOut'}
                navText={['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']}
                className="slider-carousel owl-carousel owl-theme">
                    <div className="slide" style={{backgroundImage:'url("images/slider/sl-01-1920x750.png")'}}>
                    <div className="container">
                        <div className="content">
                            <h2><span className="span-color-size">Twój dom, </span>Twoje marzenie, nasza pasja!</h2>
                            <div className="text">Sprawdzone technologie, solidne wykonanie!</div>
                            <div className="link-holder">
                                <Link to="/oferta-parterowe" className="ploting-btn btn-style-three">Sprawdź ofertę</Link>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="slide" style={{backgroundImage:'url("images/slider/sl-02-1920x750.png")'}}>
                        <div className="container">
                            <div className="content">
                            <h2><span className="span-color-size">Budujemy marzenia,</span> tworzymy domowy raj!</h2>
                            <div className="text">Z nami każdy krok to pewność i profesjonalizm.</div>
                                <div className="link-holder">
                                    <Link to="/oferta-parterowe" className="ploting-btn btn-style-three">Parterowe</Link>&nbsp;
                                    <Link to="/oferta-poddasze" className="ploting-btn btn-style-three">Z Poddaszem</Link>&nbsp;
                                    <Link to="/oferta-pietrowe" className="ploting-btn btn-style-three">Piętrowe</Link>&nbsp;
                                    <Link to="/oferta-wille" className="ploting-btn btn-style-three">Wille</Link>&nbsp;
                                    <Link to="/oferta-nowoczesne" className="ploting-btn btn-style-three">Nowoczesne</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide" style={{backgroundImage:'url("images/slider/sl-03-1920x750.png")'}}>
                        <div className="container">
                            <div className="content">
                            <h2><span className="span-color-size">Indywidualne podejście,</span> Twój wymarzony świat!</h2>
                            <div className="text">Spełniamy marzenia z pasją i zaangażowaniem.</div>
                                <div className="link-holder">
                                    <Link to="/o-nas" className="ploting-btn btn-style-three">Dowiedz się więcej</Link>&nbsp;
                                    <Link to="/realizacje-posts-right-sidebar" className="ploting-btn btn-style-three">Realizacje</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
        </section>
        </>
    )
}

export default Banner;
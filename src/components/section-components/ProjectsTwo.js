import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProjectsTwo = () => {
    return(
        <>
        {/*Portfolio Page Section*/}
        <section className="portfolio-section section-padding-all">
            <div className="default-container">
                <div className="row clearfix">
                    <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                    {/*Sec Title*/}
                        <div className="sec-con-title text-center centered">
                            <div className="con-title-text con-title-border-l">Realizacje</div>
                            <h2>To, co zbudowaliśmy</h2>
                            <div className="text">Odkryj, jak tworzymy więcej niż tylko budynki - kreujemy niepowtarzalne przestrzenie życiowe.</div>
                        </div>
                    </div>
                </div>
                {/*MixitUp Galery*/}
                <div className="mixitup-gallery">
                    <OwlCarousel 
                        items={3}
                        loop={true}
                        nav={false}
                        dots={false}
                        autoplay={true}
                        animateIn={'fadeIn'}
                        animateOut={'fadeOut'}
                        margin={15}
                        className="filter-list row clearfix">
                        {/*Gallery Block Two*/}
                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-SB-750x650-RezydencjaParkowa.png" alt="" />
                            <div className="figcaption">
                                <h4>Stare Babice</h4>
                                <p>Rezydencja Parkowa</p>
                                <Link to="/single-realizacja-RezydencjaParkowa"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                       
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="images/gallery/gl-SB-750x650-RezydencjaLesna.png" alt="" />
                                   
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                            <Link to="/single-realizacja-RezydencjaLesna" className="link"><span className="icon fa fa-link" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div> */}
                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-SB-750x650-RezydencjaLesna.png" alt="" />
                            <div className="figcaption">
                                <h4>Stare Babice</h4>
                                <p>Rezydencja Leśna</p>
                                <Link to="/single-realizacja-RezydencjaLesna"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="images/gallery/gl-PR-750x650-OpalElegancja.png" alt="" />

                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                            <Link to="/single-realizacja-OpalElegancja" className="link"><span className="icon fa fa-link" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-PR-750x650-OpalElegancja.png" alt="" />
                            <div className="figcaption">
                                <h4>Pruszków</h4>
                                <p>Rezydencja Leśna</p>
                                <Link to="/single-realizacja-OpalElegancja"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="images/gallery/gl-BL-750x650-Kasjopea.png" alt="" />
                                    
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                            <Link to="/single-realizacja-Kasjopea" className="link"><span className="icon fa fa-link" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-BL-750x650-Kasjopea.png" alt="" />
                            <div className="figcaption">
                                <h4>Błonie</h4>
                                <p>Kasjopea</p>
                                <Link to="/single-realizacja-Kasjopea"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="images/gallery/gl-LT-750x650-RezydencjaLesna.png" alt="" />
                                
                                <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="content">
                                    <Link to="/single-realizacja-RezydencjaLesna" className="link"><span className="icon fa fa-link" /></Link>
                                    </div>
                                </div>
                                </div>
                            </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-LT-750x650-RezydencjaLesna.png" alt="" />
                            <div className="figcaption">
                                <h4>Latchorzew</h4>
                                <p>Rezydencja Leśna</p>
                                <Link to="/single-realizacja-RezydencjaLesna"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="images/gallery/gl-OM-750x650-Kasjopea.png" alt="" />
                                
                                <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="content">
                                    <Link to="/single-realizacja-Kasjopea" className="link"><span className="icon fa fa-link" /></Link>
                                    </div>
                                </div>
                                </div>
                            </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-OM-750x650-Kasjopea.png" alt="" />
                            <div className="figcaption">
                                <h4>Ożarów Mazowiecki</h4>
                                <p>Kasjopea</p>
                                <Link to="/single-realizacja-Kasjopea"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="images/gallery/gl-WZ-750x650-RezydencjaLesna.png" alt="" />
                                
                                <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="content">
                                    <Link to="/single-realizacja-RezydencjaLesna" className="link"><span className="icon fa fa-link" /></Link>
                                    </div>
                                </div>
                                </div>
                            </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-WZ-750x650-RezydencjaLesna.png" alt="" />
                            <div className="figcaption">
                                <h4>Warszawa Zachodnia</h4>
                                <p>Rezydencja Leśna</p>
                                <Link to="/single-realizacja-RezydencjaLesna"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                            <figure className="image-box">
                                <img src="images/gallery/gl-ZI-750x650-OpalElegancja.png" alt="" />
                                
                                <div className="overlay-box">
                                <div className="overlay-inner">
                                    <div className="content">
                                    <Link to="/single-realizacja-OpalElegancja" className="link"><span className="icon fa fa-link" /></Link>
                                    </div>
                                </div>
                                </div>
                            </figure>
                            </div>
                        </div> */}

                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-ZI-750x650-OpalElegancja.png" alt="" />
                            <div className="figcaption">
                                <h4>Zielonka</h4>
                                <p>Opal</p>
                                <Link to="/single-realizacja-OpalElegancja"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                        {/*Gallery Block Two*/}
                        {/* <div className="gallery-block-two">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="images/gallery/gl-ZI-750x650-RezydencjaParkowa.png" alt="" />
                                 
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                            <Link to="/single-realizacja-RezydencjaParkowa" className="link"><span className="icon fa fa-link" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div> */}
                        <div className="image-effect-one hover-shadow">
                            <img src="images/gallery/gl-ZI-750x650-RezydencjaParkowa.png" alt="" />
                            <div className="figcaption">
                                <h4>Zielonka</h4>
                                <p>Rezydencja Parkowa</p>
                                <Link to="/single-realizacja-RezydencjaParkowa"><i className="link-plus bg-primary" /></Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
        {/*End Portfolio Page Section*/}
        </>
    )
}

export default ProjectsTwo;
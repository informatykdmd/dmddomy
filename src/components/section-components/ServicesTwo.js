import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTwo = () => {
    return(
        <>
        {/*Services Section*/}
        <section className="services-section section-padding-all">
            <div className="internal-container">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-mgprojekt.png" alt="" />
                    <div className="figcaption">
                    <h4>MG Projekt</h4>
                    <p>Budujemy marzenia od 1998. Twój dom, twój styl!</p>
                    <Link to="/architekci-mgprojekt"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-magarchitekci.png" alt="" />
                    <div className="figcaption">
                    <h4>MAG Architekci</h4>
                    <p>Projektujemy pasję, kreujemy rzeczywistość.</p>
                    <Link to="/architekci-magarchitekci"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                <div className="mt-box our-speciallization-content">
                    <h3 className="m-t0"><span className="font-weight-100">Wspólnie</span> <br />Tworzymy Sukces</h3>
                    <p><br />Przedstawiamy Państwu niezastąpionych sojuszników – naszych Wspaniałych Partnerów, z którymi odnosimy niepowtarzalne sukcesy budowlane</p>
                    {/* <Link to="#" className="ploting-btn btn-style-five">Zobacz wszystko</Link> */}
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-trzoparchitekci.png" alt="" />
                    <div className="figcaption">
                    <h4>Trzop Architekci</h4>
                    <p>Kreujemy przestrzenie, inspirujemy zmiany.</p>
                    <Link to="/architekci-trzoparchitekci"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-mobius.png" alt="" />
                    <div className="figcaption">
                    <h4>Mobius</h4>
                    <p>Od pomysłu do emocji, każdy detal to fragment oryginalności.</p>
                    <Link to="/architekci-mobius"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-reformarchitekt.png" alt="" />
                    <div className="figcaption">
                    <h4>Reform Architekt</h4>
                    <p>Kształtuję Przestrzeń, Kreuję Wyjątkowość</p>
                    <Link to="/architekci-reform"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-jio.png" alt="" />
                    <div className="figcaption">
                    <h4>Jankowski i Opyrchał</h4>
                    <p>Punkt Wyjścia do Wyjątkowego Wnętrza.</p>
                    <Link to="/architekci-jio"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                    <img src="images/architekci-loga-barycz.png" alt="" />
                    <div className="figcaption">
                    <h4>Dr Barycz</h4>
                    <p>Projektujemy, by piekno było kształtem celowości.</p>
                    <Link to="/architekci-barycz"><i className="link-plus bg-primary" /></Link>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </section>
        {/*End Services Section*/}
        </>
    )
}

export default ServicesTwo;
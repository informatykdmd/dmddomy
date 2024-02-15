import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOne = () => {
    return(
        <>
        {/*Services Section*/}
        <section className="services-section section-padding-all">
            <div className="internal-container">
            <div className="row clearfix">
                {/*Services Block*/}
                <div className="services-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-holder">
                    <div className="icon-holder">
                    <i className="flaticon-house" />
                    </div>
                    <h3><Link to="#">Budowa domów jednorodzinnych</Link></h3>
                    <div className="text">Gotowe projekty, niepowtarzalne domy.</div>
                    <div className="more-link"><Link className="read-more" to="/oferta-wille">Zobacz więcej</Link></div>
                </div>
                </div>
                {/*Services Block*/}
                <div className="services-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-holder">
                    <div className="icon-holder">
                    <i className="flaticon-blueprint" />
                    </div>
                    <h3><Link to="#">Doświadczenie MGprojekt</Link></h3>
                    <div className="text">Opal, Szmaragd, Tytan - Twój nowy dom z historią.</div>
                    <div className="more-link"><Link className="read-more" to="/architekci-mgprojekt">Polecamy</Link></div>
                </div>
                </div>
                {/*Services Block*/}
                <div className="services-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-holder">
                    <div className="icon-holder">
                    <i className="flaticon-kit" />
                    </div>
                    <h3><Link to="#">Najwyższa jakość i technologia</Link></h3>
                    <div className="text">Realizujemy marzenia o domu w Warszawie</div>
                    <div className="more-link"><Link className="read-more" to="/realizacje-posts-right-sidebar">Sprawdź to</Link></div>
                </div>
                </div>
                {/*Services Block*/}
                <div className="services-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-holder">
                    <div className="icon-holder">
                    <i className="flaticon-crane" />
                    </div>
                    <h3><Link to="#">Zespół ekspertów dla Twojego spokoju</Link></h3>
                    <div className="text">Budujemy pewnie i sprawnie wokół Warszawy.</div>
                    <div className="more-link"><Link className="read-more" to="/team">Czekamy na Ciebie</Link></div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Services Section*/}
        </>
    )
}

export default ServicesOne;
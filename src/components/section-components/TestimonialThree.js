import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialThree = () => {
    return(
        <>
        {/* Testimonial Section */}
        <section className="testimonial-section section-padding-all">
            <div className="default-container">
            <div className="row clearfix">
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                {/*Sec Title*/}
                <div className="sec-con-title text-center centered mx-auto">
                    <div className="con-title-text con-title-border-l">Opinie naszych klientów</div>
                    <h2>To, co o nas mówią</h2>
                    <div className="text">
                    Świadectwa satysfakcji w budowaniu marzeń. Przeczytaj opinie osób, które zaufały nam w
                    tworzeniu swoich wymarzonych domów. Każda recenzja to nie tylko słowa, lecz wyraz
                    wdzięczności za unikalność, jakość i profesjonalizm, którymi się wyróżniamy. Doświadczenie,
                    które przekłada się na spełnione oczekiwania naszych Klientów.
                    </div>
                </div>
                </div>
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                <OwlCarousel 
                    items={3}
                    loop={true}
                    nav={false}
                    dots={false}
                    autoplay={true}
                    animateIn={'fadeIn'}
                    animateOut={'fadeOut'}
                    className="text-center two-item-carousel owl-carousel">
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-StefanMierzejewski.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Stefan Mierzejewski</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z dumą polecamy firmę DMD Domy jako niezawodnego partnera w realizacji naszego wymarzonego domu, Rezydencji Parkowej w Janowie. Profesjonalizm, solidność i doskonała jakość wykonania sprawiły, że nasze oczekiwania zostały znakomicie spełnione <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-TadeuszWloszczynski.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Tadeusz Woszczyński</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z całego serca polecamy firmę DMD Domy za profesjonalizm i zaangażowanie w realizację naszego indywidualnego projektu w Izabelinie. Jakość wykonania oraz dbałość o detale przekroczyły nasze oczekiwania, tworząc wymarzone miejsce, które teraz z dumą nazywamy domem <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-MichalSkuza.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Michał Skuza</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z ogromną radością polecamy firmę DMD Domy za niezwykłe zaangażowanie i doskonałą pracę przy budowie naszego domu z widokiem w Bliznach Jasińskich. Profesjonalizm, dbałość o detale i staranność wykonania sprawiły, że nasze marzenie o wymarzonym miejscu stało się rzeczywistością. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-AndrzejSzymanski.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Andrzej Szymański</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z pełnym przekonaniem polecamy firmę DMD Domy jako partnera w budowie naszego domu z widokiem w Wyględach. Ich zaangażowanie, fachowość i troska o detale przekroczyły nasze oczekiwania, tworząc nie tylko dom, lecz prawdziwy raj z widokiem. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-PiotrMarczuk.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Piotr Marczuk</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z pełnym uznaniem polecamy firmę DMD Domy za profesjonalizm i zaangażowanie w realizację naszego indywidualnego projektu w Koczargach. Ich zdolność do zrozumienia naszych potrzeb oraz perfekcyjne wykonanie sprawiły, że teraz cieszymy się unikalnym domem, który idealnie odzwierciedla naszą wizję. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-WaldemarRoszkiewicz.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Waldemar Roszkiewicz</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z największym zadowoleniem polecamy firmę DMD Domy za wyjątkowe zaangażowanie w budowę naszego domu Wymarzonego 11 w Laskach. Ich doskonała fachowość, precyzja wykonania oraz troska o każdy detal sprawiły, że teraz z dumą nazywamy to miejsce naszym domem, spełniającym wszystkie nasze marzenia. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-01-120x120-AgnieszkaGodyn.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Agnieszka Godyń</h5>
                        <small className="client-position">Klient</small>
                        </div>
                        <p className="text pt-3 mx-auto">Z zadowoleniem polecamy firmę DMD Domy za wyjątkowe podejście do realizacji naszego wymarzonego domu w Izabelinie. Profesjonalizm, kreatywność i precyzja wykonania sprawiły, że nasz dom stał się niepowtarzalnym miejscem, idealnie dostosowanym do naszych potrzeb i marzeń. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                </OwlCarousel>
                </div>
            </div>
            </div>
        </section>
        {/* End Testimonial Section */}
        </>
    )
}

export default TestimonialThree;
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialOne = () => {
    return(
        <>
        {/* Testimonial Section */}
        <section className="testimonial-section section-padding-all">
            <div className="default-container">
            <div className="row clearfix">
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                {/*Sec Title*/}
                <div className="sec-con-title text-center centered mx-auto">
                    <div className="con-title-text con-title-border-l">It's Best Simple &amp; Useful</div>
                    <h2>What Our Client Says</h2>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </div>
                </div>
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                <OwlCarousel 
                    items={1}
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
                        <img src="images/testimonial/ts-01-120x120.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">George Breton</h5>
                        <small className="client-position">Customer</small>
                        </div>
                        <p className="text pt-3 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-02-120x120.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">William Henry</h5>
                        <small className="client-position">Customer</small>
                        </div>
                        <p className="text pt-3 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <span className="fa fa-quote-right" /></p>
                    </div>
                    </div>
                    <div className="business-client-box p-4">
                    <div className="block-shadow bg-white p-a30">
                        <div className="client-box-img mb-3 mx-auto">
                        <img src="images/testimonial/ts-03-120x120.png" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="clients-name">
                        <h5 className="mb-0">Alison Johnson</h5>
                        <small className="client-position">Customer</small>
                        </div>
                        <p className="text pt-3 mx-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <span className="fa fa-quote-right" /></p>
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

export default TestimonialOne;
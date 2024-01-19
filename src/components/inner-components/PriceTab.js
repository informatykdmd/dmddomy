import React from 'react';
import { Link } from 'react-router-dom';

const PriceTab = () => {
    return(
        <>
        {/*Price Section */}
        <section className="section-padding-four pricing-section section-padding-all">
            <div className="default-container">
            <div className="row clearfix">
                <div className="col-lg-4">
                <div className="mt-3 business-price-box text-center animated">
                    <div className="plan-price">
                    <h5 className="font-weight-bold mb-0">Basic Plan</h5>
                    </div>
                    <div className="business-plan-price mt-5">
                    <h1 className=" mb-0 font-weight-bold">$ 75</h1>
                    <div className="plan-price-tag">
                        <ul className="mb-0 text-center">
                        <li className="list-inline-item">USD</li>
                        <li className="list-inline-item">User</li>
                        <li className="list-inline-item">Month</li>
                        </ul>
                    </div>
                    <p className="text-muted pt-3">It is a long established fact that a reader will be distracted</p>
                    </div>
                    <div className="business-price-features text-muted">
                    <p>Additional Features </p>
                    <p>Free Email Support</p>
                    <p>10 Domain</p>
                    <p>24/7 Support</p>
                    <p>Single User</p>
                    </div>
                    <div className="text-center mt-5">
                    <Link to="#" className="ploting-btn btn-style-two">Get Started</Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="mt-3 business-price-box text-center price-active">
                    <div className="plan-price">
                    <h5 className="font-weight-bold mb-0">Pro Plan</h5>
                    </div>
                    <div className="business-plan-price mt-5">
                    <h1 className="text_custom mb-0 font-weight-bold">$ 150</h1>
                    <div className="plan-price-tag">
                        <ul className="mb-0 text-center">
                        <li className="list-inline-item">USD</li>
                        <li className="list-inline-item">User</li>
                        <li className="list-inline-item">Month</li>
                        </ul>
                    </div>
                    <p className="text-muted pt-3">It is a long established fact that a reader will be distracted</p>
                    </div>
                    <div className="business-price-features text-muted">
                    <p>Additional Features </p>
                    <p>Free Email Support</p>
                    <p>30 Domain</p>
                    <p>24/7 Support</p>
                    <p>Single User</p>
                    </div>
                    <div className="text-center mt-5">
                    <Link to="#" className="ploting-btn btn-style-two">Get Started</Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="mt-3 business-price-box text-center animated">
                    <div className="plan-price">
                    <h5 className="font-weight-bold mb-0">Premiume Plan</h5>
                    </div>
                    <div className="business-plan-price mt-5">
                    <h1 className=" mb-0 font-weight-bold">$ 300</h1>
                    <div className="plan-price-tag">
                        <ul className="mb-0 text-center">
                        <li className="list-inline-item">USD</li>
                        <li className="list-inline-item">User</li>
                        <li className="list-inline-item">Month</li>
                        </ul>
                    </div>
                    <p className="text-muted pt-3">It is a long established fact that a reader will be distracted</p>
                    </div>
                    <div className="business-price-features text-muted">
                    <p>Additional Features </p>
                    <p>Free Email Support</p>
                    <p>Unlimited Domain</p>
                    <p>24/7 Support</p>
                    <p>Single User</p>
                    </div>
                    <div className="text-center mt-5">
                    <Link to="#" className="ploting-btn btn-style-two">Get Started</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*End Price Section*/}
        </>
    )
}

export default PriceTab;
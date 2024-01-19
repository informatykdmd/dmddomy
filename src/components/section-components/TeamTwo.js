import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamTwo = () => {
    return(
        <>
        {/*Team Section*/}
        <section className="teams-section section-padding-all">
            <div className="default-container">
            <div className="row clearfix">
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                {/*Sec Title*/}
                <div className="sec-con-title text-center centered mx-auto">
                    <div className="con-title-text con-title-border-l">It's Best Simple &amp; Useful</div>
                    <h2>Our Team</h2>
                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </div>
                </div>
            </div>
            <OwlCarousel 
                items={4}
                loop={true}
                nav={false}
                dots={false}
                autoplay={true}
                animateIn={'fadeIn'}
                animateOut={'fadeOut'} 
                margin={30}
                className="row clearfix mt-3 four-item-carousel owl-carousel">
                <div className="mb-4 cont-boder">
                <div className="team-box-all text-center">
                    <div className="team-img">
                    <img src="images/team/tm-01-460x460.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="mt-3">
                    <h6 className="mb-0 font-weight-bold field-position-p">Jeffery Newman</h6>
                    <p className="text-muted team-work field-position-p">CEO</p>
                    </div>
                    <div className="team_social field-position-p">
                    <ul className="list-inline mb-0 text-center">
                        <li><Link to="#" className><i className="fa fa-facebook" /></Link></li>
                        <li><Link to="#" className><i className="fa fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="mb-4 cont-boder">
                <div className="team-box-all text-center">
                    <div className="team-img">
                    <img src="images/team/tm-02-460x460.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="mt-3">
                    <h6 className="mb-0 font-weight-bold field-position-p">Christopher Mayo</h6>
                    <p className="text-muted team-work field-position-p">Founder</p>
                    </div>
                    <div className="team_social field-position-p">
                    <ul className="list-inline mb-0 text-center">
                        <li><Link to="#" className><i className="fa fa-facebook" /></Link></li>
                        <li><Link to="#" className><i className="fa fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="mb-4 cont-boder">
                <div className="team-box-all text-center">
                    <div className="team-img">
                    <img src="images/team/tm-03-460x460.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                    <div className="mt-3">
                    <h6 className="mb-0 font-weight-bold field-position-p">Douglass Foster</h6>
                    <p className="text-muted team-work field-position-p">Co-Founder</p>
                    </div>
                    <div className="team_social field-position-p">
                    <ul className="list-inline mb-0 text-center">
                        <li><Link to="#" className><i className="fa fa-facebook" /></Link></li>
                        <li><Link to="#" className><i className="fa fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="mb-4 cont-boder">
                <div className="team-box-all text-center">
                    <div className="team-img">
                    <img src="images/team/tm-04-460x460.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                    <div className=" mt-3">
                    <h6 className="mb-0 font-weight-bold field-position-p">Ismael Oliver</h6>
                    <p className="text-muted team-work field-position-p">Sr. Developers</p>
                    </div>
                    <div className="team_social field-position-p">
                    <ul className="list-inline mb-0 text-center">
                        <li><Link to="#" className><i className="fa fa-facebook" /></Link></li>
                        <li><Link to="#" className><i className="fa fa-pinterest" /></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </OwlCarousel>
            </div>
        </section>
        {/*End Team Section*/}
        </>
    )
}

export default TeamTwo;
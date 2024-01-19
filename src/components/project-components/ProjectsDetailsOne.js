import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';
import RelatedProjects from '../../elements/RelatedProjects';

const ProjectsDetailsOne = ( props ) => { 

  const [toggler, setToggler] = useState( false );
  const videoLink = [
      props.videoLink || 'https://www.youtube.com/watch?v=Aty3TV4Yn4I'
  ];
    return(
    <>
    {/* Projects Section*/}
    <section className="single-portfolio-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12 p-b30">
              <div className="row">
                <div className="col-md-4">
                  <div className="project-thumb">
                    <img src="images/project/bl-01-750x430.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <img src="images/project/bl-02-750x430.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <img src="images/project/bl-03-750x430.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <img src="images/project/bl-01-1920x750.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Creating a sustainable future through building preservation, green architecture, and smart design</h3>
              <p>
                Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one. Unknown may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold.
                My entrance me is disposal bachelor remember relation. <br />Answer misery adieus add wooded how nay men before though. Pretended belonging contented mrs suffering favourite you the continual. Mrs
                civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful
                continuing. In appetite ecstatic opinions hastened by handsome admitted.
              </p>
              <p>
                Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember relation. Answer misery adieus add wooded
              </p>
              <p>Pretended belonging contented mrs suffering favourite you the continual. Mrs civil nay least means tried drift. Natural end law whether but and towards certain. Furnished unfeeling his sometimes see day promotion. Quitting informed
                concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>
              <div className="portfolio-tags">
                <div className="row">
                  <div className="col-md-8">
                    <span className="title">Tags :</span>
                    <Link to="#" className="tag">branding</Link>
                    <Link to="#" className="tag">Design</Link>
                    <Link to="#" className="tag">website</Link>
                  </div>
                  <div className="col-md-4">
                    <span className="title">share :</span>
                    <Link to="#" className="portfolio-det-social">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="#" className="portfolio-det-social">
                      <i className="fa fa-twitter" />
                    </Link>
                    <Link to="#" className="portfolio-det-social">
                      <i className="fa fa-instagram" />
                    </Link>
                    <Link to="#" className="portfolio-det-social">
                      <i className="fa fa-google-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="#" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="#" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    Date <span>25 May, 2022</span>
                  </li>
                  <li>
                    client name <span>Jonathom Doe</span>
                  </li>
                  <li>
                    Architect <span>Machol Doe</span>
                  </li>
                  <li>
                    Budget <span>$12,500.00</span>
                  </li>
                  <li>
                    rating
                    <Link to="#"><i className="fa fa-star" /></Link>
                    <Link to="#"><i className="fa fa-star" /></Link>
                    <Link to="#"><i className="fa fa-star" /></Link>
                    <Link to="#"><i className="fa fa-star" /></Link>
                    <Link to="#"><i className="fa fa-star-half-o" /></Link>
                  </li>
                </ul>
              </div>
              <div className="row">
                {/*Video Column*/}
                <div className="ploting-video-col m-t30 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column" data-wow-delay="600ms" data-wow-duration="1500ms">
                    {/*Video holder*/}
                    <div className="video-holder">
                      <figure className="image">
                        <img src="images/background/play-01.png" alt="" />
                      </figure>
                      <button className={`lightbox-image overlay-holder ${ props.linkClass ? props.linkClass : '' }` } onClick={ () => setToggler( ! toggler ) }><span class="flaticon-play-button"></span><i class="ripple"></i></button>
                      <FsLightbox 
                        toggler={ toggler } 
                        sources={ videoLink }
                        maxYoutubeVideoDimensions={ { width: 900, height: 550 } }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/* End Projects Section*/}

    <RelatedProjects />

    </>
    )
}

export default ProjectsDetailsOne;
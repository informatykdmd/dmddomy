import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProjects = () => {
    return(
    <>
    {/*Projects Section*/}
    {/*Projects Section*/}
    <section className="more-portfolio-section section-padding-all bg-style-one">
      <div className="default-container">
        <div className="row clearfix">
          <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
            {/*Sec Title*/}
            <div className="sec-title">
              <h3><span>Podobne Projekty</span></h3>
            </div>
          </div>
        </div>
        <div className="projects mt-4">
          <div className="filter-list row clearfix">

            <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="images/gallery/gl-00-750x650-DomOtwarty.png" alt="" />

                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <Link to="/single-project-DomOtwarty" className="link"><span className="icon fa fa-link" /></Link>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>

            {/* <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="images/gallery/gl-02-750x650.png" alt="" />

                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div> */}

            {/* <div className="gallery-block-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="images/gallery/gl-03-750x650.png" alt="" />

                  <div className="overlay-box">
                    <div className="overlay-inner">
                      <div className="content">
                        <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
    {/*End Projects Section*/}
    </>
    )
}

export default RelatedProjects;
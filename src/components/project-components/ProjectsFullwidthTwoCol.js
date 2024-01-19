import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsFullwidthTwoCol = () => {
    return(
    <>
    {/*Projects Section*/}
    <section className="section-padding-three portfolio-section section-padding-all">
        <div className="default-container">
          <div className="gallery">
            <div className="row clearfix">
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-01-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-02-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-03-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-04-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-05-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-06-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-07-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              {/*Gallery Block Two*/}
              <div className="gallery-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/gallery/gl-08-750x650.png" alt="" />
                    {/*Overlay Box*/}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <Link to="/single-project" className="link"><span className="icon fa fa-link" /></Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            {/*Button Box*/}
            <div className="button-box text-center">
              <Link to="#" className="ploting-btn btn-style-five">Load More</Link>
            </div>
          </div>
        </div>
    </section>
    {/*End Projects Section*/}
    </>
    )
}

export default ProjectsFullwidthTwoCol;
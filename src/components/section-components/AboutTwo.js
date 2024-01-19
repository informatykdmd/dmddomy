import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';

const AboutTwo = ( props ) => { 

    const [toggler, setToggler] = useState( false );
    const videoLink = [
        props.videoLink || 'https://www.youtube.com/watch?v=Aty3TV4Yn4I'
    ];
    
    return(
        <>
        {/*About Section*/}
        <section className="about-section section-padding-all">
            <div className="default-container">
                <div className="row clearfix">

                    {/*con-title Column*/}
                    <div className="con-title-column col-lg-5 col-md-12 col-sm-12">
                        {/*Sec con-title*/}
                        <div className="sec-con-title">
                            <div className="con-title-text con-title-border-l">It's Best Simple &amp; Useful</div>
                        <   h2>About Our Gole</h2>
                        </div>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</div>
                        <Link to="#" class="ploting-btn btn-style-five">Who We Are?</Link>
                    </div>

                    {/*Video Column*/}
                    <div className="ploting-video-col col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column" data-wow-delay="600ms" data-wow-duration="1500ms">
                            {/*Video holder*/}
                            <div className="video-holder">
                                <figure className="image">
                                <img src="images/background/play-01.png" alt="play" />
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
        </section>
        {/*End About Section*/}
        </>
    )
}

export default AboutTwo;
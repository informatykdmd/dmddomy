import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const AboutOne = ( props ) => { 

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
                            <div className="con-title-text con-title-border-l">DMD to filozofia!</div>
                            <h3>Historia &amp; Technologia</h3>
                        </div>
                        <div className="text">
                            Witaj na stronie DMD Domy, gdzie spełniamy marzenia o wymarzonym domu! 
                            Jeśli kiedykolwiek marzyłeś o pięknym, bezpiecznym miejscu, to świetnie 
                            trafiłeś. Nasza doświadczona ekipa i sprawdzone technologie są gotowe, 
                            by przekształcić Twoje marzenie w rzeczywistość. Niech Twój dom stanie 
                            się miejscem, gdzie spełniają się wszystkie oczekiwania. 
                            Zaufaj nam – DMD Domy to nie tylko firma budowlana, to gwarancja profesjonalizmu 
                            i satysfakcji. Zacznijmy razem budować Twój wymarzony świat!
                            <br /> Z poważaniem,
                        </div>
                        <div className="author-box">
                            <div className="box-inner">
                                <h3>Dariusz Michał Dobrosielski</h3>
                                <div className="designation">Właściciel DMD Domy</div>
                                <div className="signature"><img src="images/signature.png" alt="James Milnerr" /></div>
                            </div>
                        </div>
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

export default AboutOne;
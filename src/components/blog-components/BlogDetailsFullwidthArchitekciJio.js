import React from 'react';
// import { Link } from 'react-router-dom';
// import BlogCommentForm from '../../elements/BlogCommentForm';

const BlogDetailsFullwidthArchitekciJio = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Pracowania Projektowa Jio</h3>
                  
                  <p>
                    15 lat zawodowej praktyki, koncepcji tworzonych w różnej skali, od małych apartamentów 
                    po widowiskowe rezydencje, pozwala nam zaprosić Państwa do wyzwania, jakim będzie nasz 
                    wspólny projekt.
                  </p>
                  
                </div>
                <blockquote>
                  <p> 
                    “ Zapewniamy rzetelną wiedzę i fachową usługę doradczą na każdym etapie inwestycji, 
                    a także sprawdzoną obsługę wysoko wykwalifikowanej grupy architektów i wykonawców. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <p>
                      Potwierdzeniem naszych kompetencji jest powiększająca się liczba zaufanych Klientów i ponad 700 realizacji 
                      o wysokim poziomie estetycznym.
                    </p>
                    <p className="box-letter">
                      Skupiamy się na tworzeniu relacji z naszymi klientami poprzez indywidualną, bliską współpracę, 
                      zaangażowanie i kreatywność w poszukiwaniu najlepszych rozwiązań projektowych.
                    </p>
                    <p>
                      Dążymy do tego, aby stać się rozpoznawalną marką na rynku wnętrzarskim pod względem estetyki 
                      i stylistyki projektowej, a także jakości wykonawczej.
                    </p>
                    <p>
                      Zapraszamy do współpracy! <br /><br />

                      Agata Opyrchał i Aleksander Jankowski
                    </p>
                    </div>
                    <div className="col-sm-5">
                    <img src="images/architekci/bl-09-750x430-logojio.png" alt="" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.jio.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/p/Jankowski-i-Opyrcha%C5%82-Pracownia-Projektowa-100063493153375/?paipv=0&eav=AfYycJiKIt8AtsvQcPFVD5VBfaDa7ryPwn0zUADaJJ4VxnWT6TU0dEgRKnN3Kb789Ec&_rdr" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/jio_pracownia_projektowa/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogDetailsFullwidthArchitekciJio;
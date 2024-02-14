import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Hiacynt3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Hiacynt3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Hiacynt3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Hiacynt3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Hiacynt 3</h3>
              <p>
                Projekt domu Hiacynt 3 to projekt parterowego domu z poddaszem użytkowym, Hiacynt 3 przykryty jest 
                wielospadowym dachem z fragmentem płaskiego zadaszenia nad garażem. Kąt nachylenia dachu wynosi 
                35 stopni. Dom przeznaczony jest dla 6 mieszkańców. Hiacynt 3 ma nowoczesną stylistykę, a jego 
                powierzchnia wynosi blisko 157 m2 (kubatura 974 m3). Projekt Hiacynt 3 można zrealizować na 
                działce o minimalnych wymiarach: 22 x 25,41 m.
              </p>

              <span><strong>Bryła Domu Hiacynt 3</strong></span><br />
              <p>
                  Nowoczesna bryła budynku MG Projekt Hiacynt 3 została starannie zaprojektowana na planie litery T. 
                  Architektura domu wyróżnia się ciekawymi detalami wykończeniowymi, takimi jak duże przeszklenia 
                  elewacji, narożne okna, kontrastujące z bielą ścian fragmenty obłożone betonem architektonicznym 
                  i drewnem. Te elementy tworzą spójną kompozycyjnie całość, a podziały elewacji na poziome pasy 
                  nad oknami dodają charakteru, tworząc ramy dla strefy wejściowej i wypoczynkowej.
              </p>

              <span><strong>Wnętrze Hiacynt 3</strong></span><br />
              <p>
                  Reprezentacyjne drzwi wejściowe z naświetlami prowadzą do wnętrza, które zostało zaprojektowane 
                  z myślą o maksymalnej funkcjonalności. Przestrzeń życiowa nie ogranicza się tylko do parteru - nad 
                  salonem znajduje się otwarta antresola, powiększając przestrzeń domu. Salon oferuje miejsce na 
                  wygodne meble wokół kominka i telewizora, a także przyjemny stół jadalny. Częściowo otwarta 
                  kuchnia z spiżarnią dodaje charakteru, a szerokie drzwi balkonowe otwierają się na taras 
                  i ogród. Na parterze znajduje się również apartament rodziców z garderobą i łazienką, 
                  sypialnia lub gabinet. Elastyczny program funkcjonalny obejmuje dwustanowiskowy garaż, 
                  kotłownię i pomieszczenie pralni przy strefie wejściowej. Na poddaszu zaplanowano trzy 
                  pokoje z łazienką i garderobą.
              </p>
              
              <p>
                  <em>
                    Zaaranżuj swoje przestrzenie z Hiacyntem 3, łącząc nowoczesną architekturę z funkcjonalnością 
                    i komfortem.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Hiacynt3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Hiacynt3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Hiacynt3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomNaParkowej6" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Narcyz2" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong> 3 miesiące <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong> 6 miesięcy <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong> 12 miesięcy <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                  <h5>RSSZ - Stan Pod Klucz</h5>
                    <span>
                        <strong>Czas realizacji:</strong> 18 miesięcy <br />
                        Jest to etap, w którym inwestor już może zamieszkasz.
                    </span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Hiacynt3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Hiacynt3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Hiacynt3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Hiacynt3.png" alt="blog" /></p>
                    </li>
              </div>
              <div className="row">
                {/*Video Column*/}
                <div className="ploting-video-col m-t30 col-lg-12 col-md-12 col-sm-12">
                  <div className="inner-column" data-wow-delay="600ms" data-wow-duration="1500ms"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/* End Projects Section*/}

    {/* <RelatedProjectsKasjopea7 /> */}

    </>
    )
}

export default ProjectsDetailsOne;
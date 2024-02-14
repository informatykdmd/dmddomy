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
                    <ZoomableImage src="images/project/bl-01-750x430-Zefir-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Zefir-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Zefir-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Zefir-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Zefir</h3>
              <p>
                Projekt domu Zefir jest to dom jednorodzinny parterowy z poddaszem użytkowym, przeznaczony 
                dla 4-6 osobowej rodziny, Budynek zaprojektowano, wykorzystując maksymalnie prostą bryłę, 
                przykrytą dwuspadowym dachem, bez żadnych udziwnień i podrażających budowę komplikacji.
              </p>

              <span><strong>Architektura Domu Zefir</strong></span><br />
              <p>
                  Charakterystyczną cechą architektury domu Zefir jest kontrast między białymi 
                  i grafitowymi ścianami, uzupełniony grafitowym dachem i cokołem z ciemnej płytki klinkierowej. 
                  To nowoczesne, minimalistyczne połączenie kolorystyczne zyskuje ciepło dzięki drewnianym 
                  ramom okien oraz podbitkom dachu. Reprezentacyjne drzwi wejściowe, schowane pod daszkiem 
                  podcienia, i duże okno kuchenne ozdabiają front budynku. Elewacja ogrodowa prezentuje 
                  szerokie drzwi balkonowe z salonu prowadzące na taras, a także zadaszenie tarasu zbudowane 
                  na konstrukcji pergoli. Całość wieńczy łagodny dwupołaciowy dach.
              </p>

              <span><strong>Wnętrze "Zefira"</strong></span><br />
              <p>
                  Wnętrze domu "Zefir" zostało starannie podzielone na trzy główne strefy: część dzienną na 
                  parterze, część gospodarczą oraz pokoje sypialne na poddaszu. Pomimo niewielkiej powierzchni 
                  użytkowej, zaprojektowano otwarcie przestrzenne nad salonem i antresolę, co nadaje wnętrzu 
                  atrakcyjny wygląd. Salon zyskał dodatkową wysokość i przestrzeń. Wejście do domu prowadzi 
                  przez przedsionek z szafami wprost do holu, z którego otwiera się widok na nowoczesne 
                  schody i salon z antresolą.
              </p>
              <p>
                  Przestrzeń dzienna obejmuje wydzieloną kuchnię ze spiżarką, salon z narożnikiem wypoczynkowym 
                  i ścianą telewizyjno-kominkową, oraz jadalnię. Dodatkowy pokój-gabinet, wbudowany garaż 
                  i kotłownia są dostępne zarówno z holu, jak i przedsionka. Na poddaszu znajdują się dwie 
                  przestronne sypialnie dzieci, duża łazienka oraz apartament rodziców z własną garderobą 
                  i łazienką. Wnętrze poddasza można łatwo podzielić na cztery sypialnie, a wysoko ustawiona 
                  ścianka kolankowa minimalizuje uciążliwe skosy.
              </p>

              <p>
                  <em>
                    Dom "Zefir" wyróżnia się prostą konstrukcją, energooszczędnym projektem oraz funkcjonalnym 
                    podziałem wnętrza, stanowiąc doskonałą propozycję dla Inwestorów marzących o średniej 
                    wielkości domie z nowoczesnym designem.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Zefir.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Zefir.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Zefir.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Narcyz2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomNaParkowej6" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Zefir.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Zefir.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Zefir.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Zefir.png" alt="blog" /></p>
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
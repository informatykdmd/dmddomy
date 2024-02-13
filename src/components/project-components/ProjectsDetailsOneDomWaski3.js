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
                    <ZoomableImage src="images/project/bl-01-750x430-DomWaski3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomWaski3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomWaski3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomWaski3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Wąski 3</h3>
              <p>
                Projekt domu Wąski 3 jest kolejną wersją projektu z popularnej serii domów „Wąski” z MG Projekt. 
                Jest to projekt przeznaczony na wąską działkę, z niekorzystnym ustawieniem względem stron świata, 
                czyli z wjazdem od południa. Budynek zaprojektowano w modnej stylistyce „domu-stodoły", 
                z prostokątną bryłą przykrytą dwuspadowym dachem bez okapów.
              </p>

                <span><strong>Nietechniczny Opis Domu Wąski 3</strong></span><br />
                <p>
                    Parterowy, jednorodzinny dom Wąski 3 o powierzchni użytkowej 123,72 m2 (kubatura 725 m3) 
                    został zaprojektowany z myślą o wąskiej działce z wjazdem od południa. Budynek utrzymano 
                    w nowoczesnej stylistyce "domu-stodoły", z prostokątną bryłą przykrytą dwuspadowym dachem 
                    bez okapów. Projekt Wąski 3 doskonale sprawdza się na działce o minimalnych wymiarach: 21,40 x 26 m.
                </p>
                <span><strong>Architektura Domu Wąski 3</strong></span><br />
                <p>
                    Architektura projektu Wąski 3 jest efektowna i nowoczesna, złożona z prostych geometrycznych form. 
                    Finezyjne detale, takie jak płaskie zadaszenie nad wejściem, wiatą, duże okno salonu o podwójnej 
                    wysokości oraz drewniana pergola nad tarasem, nadają budynkowi unikalny charakter.
                </p>
                <span><strong>Wnętrze Domu Wąski 3</strong></span><br />
                <p>
                    Wnętrze Wąski 3 składa się z dwóch części: jednoprzestrzennej części dziennej oraz prywatnej części z 
                    sypialniami i łazienkami. Duży i oświetlony salon, kuchnia z wyspą, cztery sypialnie (w tym sypialnia 
                    master z garderobą) oraz przestronna łazienka tworzą funkcjonalne wnętrze.
                </p>
                <span><strong>Koszty Budowy Domu Wąski 3</strong></span><br />
                <p>
                    Projekt Wąski 3 ma prostą konstrukcję, co przekłada się na niższe koszty budowy. Zastosowane 
                    izolacje termiczne, nowoczesne materiały i instalacje sprawiają, że dom jest energooszczędny. 
                    Szacunkowy koszt budowy w standardzie surowym zamkniętym to 123,72 m2 wg PN-70/B-02365 i 127,91 m2 
                    wg PN-ISO 9836:1997.
                </p>
                <span><strong>Dostosowanie do Standardu NF40</strong></span><br />
                <p>
                    Istnieje możliwość dostosowania projektu Wąski 3 do standardu NF40, co oznacza wprowadzenie 
                    zmian w izolacji przegród zewnętrznych i instalacjach, spełniając warunki budynku energooszczędnego 
                    o współczynniku EUCO poniżej 40 kWh/m2 x rok.
                </p>
                <p>
                    Wąski 3 to doskonała propozycja dla Inwestorów, planujących budowę nowoczesnego, minimalistycznego 
                    domu na trudnej działce.
                </p>
              <div className="col-md-12 p-b30">
                <div className="row">
                    {/* <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-DomWaski3.png" alt="Oferta" />
                        </div>
                    </div> */}
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-DomWaski3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-DomWaski3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              

              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaParterowa2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaParkowa4" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomWaski3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomWaski3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomWaski3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomWaski3.png" alt="blog" /></p>
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
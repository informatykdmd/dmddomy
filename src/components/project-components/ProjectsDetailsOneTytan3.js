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
                    <ZoomableImage src="images/project/bl-01-750x430-Tytan3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Tytan3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Tytan3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Tytan3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Tytan 3</h3>
              <p>
                Projekt domu Tytan 3 jest kolejną wersją popularnego projektu Tytan, Jest to projekt 
                domu jednorodzinnego, piętrowego z garażem częściowo wbudowanym w bryłę budynku. 
                Tytan 3 jest przeznaczony dla 4-6 mieszkańców. Łączna powierzchnia użytkowa domu wynosi 
                blisko 150 m2 (kubatura 940 m3).Dom zwieńczony jest dachem wielospadowym o kącie nachylenia 
                25 stopni. Projekt Tytan 3 można realizować na działce o minimalnych wymiarach 19,64 x 19,60 m.
              </p>

              <span><strong>Bryła Domu Tytan 3</strong></span><br />
              <p>
                  Bryła budynku Tytan 3 przyjmuje prostokątny kształt z rdzeniem domu na planie kwadratu, 
                  przykrytym kopertowym dachem. Jego prosta konstrukcja sprawia, że jest łatwy w budowie 
                  i niedrogi w późniejszym utrzymaniu. Duże okna zwrócone w kierunku elewacji frontowej 
                  i bocznej sprawiają, że projekt doskonale sprawdza się na działkach o niekorzystnym 
                  położeniu wjazdu i drogi dojazdowej względem słońca. Mimo tego, że dom zachowuje 
                  ogródek i taras z tyłu, duże przeszklenia narożnika frontowego zapewniają dostęp 
                  do naturalnego światła, nawet gdy działka ma wjazd od południa.
              </p>

              <span><strong>Wnętrze Domu Tytan 3</strong></span><br />
              <p>
                  Wnętrze parteru to otwarta przestrzeń dzienna, obejmująca salon, jadalnię, kuchnię i hol. 
                  Parter domu Tytan 3 zawiera również duży podwójny garaż, kotłownię, łazienkę, spiżarnię 
                  oraz dodatkowy pokój, który może pełnić rolę gabinetu lub sypialni dla gości. Na piętrze 
                  znajdują się cztery pokoje przeznaczone na sypialnie. Blisko sypialni rodziców z łazienką 
                  zaplanowano obszerną garderobę, ułatwiającą poranną toaletę. Pozostałym mieszkańcom dostępna 
                  jest łazienka znajdująca się w pobliżu schodów. Ponadto, nad piętrem znajduje się strych. 
                  Architektura domu Tytan 3 łączy w sobie nowoczesność z spokojnym charakterem.
              </p>

              <p>
                  <em>
                    Dom Tytan 3 prezentuje nowoczesny, praktyczny design, nadający się doskonale do każdej rodziny.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Tytan3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Tytan3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Tytan3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Oszust" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Qubik3" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Tytan3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Tytan3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Tytan3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Tytan3.png" alt="blog" /></p>
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
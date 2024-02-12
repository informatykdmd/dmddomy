import { Link } from 'react-router-dom';
import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaParterowa2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaParterowa2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaParterowa2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaParterowa2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Parterowa 2</h3>
              <p>
                Projekt domu Willa parterowa 2 to dom jednorodzinny o powierzchni użytkowej 135,75 m2 (kubatura 916 m3), 
                Jest to idealny projekt domu dla Inwestorów zamierzających budować dom dla 4, 5-osobowej rodziny. 
                Kąt nachylenia dachu wynosi 30 stopni. Architektura projektu Willa parterowa 2 jest ponadczasowa 
                i nawiązuje do amerykańskich rezydencji na przedmieściach. Projekt domu można zrealizować na 
                działce o minimalnych wymiarach: szerokość – 24,75 m i długość: 24,84 m.
              </p>

              <span><strong>Nietechniczny Opis Domu Willa Parterowa 2</strong></span><br />
              <p>
                Piętrowy dom jednorodzinny Willa Parterowa 2 to propozycja o nowoczesnej architekturze, idealna dla 
                Inwestorów planujących budowę komfortowego domu dla 4-5 osobowej rodziny. Z powierzchnią 
                użytkową 135,75 m2 (kubatura 916 m3) oraz kątem nachylenia dachu wynoszącym 30 stopni, projekt 
                ten wyróżnia się ponadczasowym stylem nawiązującym do amerykańskich rezydencji na przedmieściach.
              </p>
              <p>
                Budynek, zbudowany na planie litery T, posiada czterospadowy dach z dobudówkami nad garażem i sypialniami. 
                Nowoczesna architektura charakteryzuje się poziomym podziałem elewacji, dużymi przeszkleniami, 
                kontrastującymi tynkami i okładzinami drewnianymi, co nadaje bryle atrakcyjny wygląd. Duże okna 
                podkreślają dostojny charakter domu, a bezpośrednie wyjście do ogrodu stanowi dodatkowy atut.
              </p>
              <p>
                Wnętrze domu Willa Parterowa 2 jest przemyślane i funkcjonalne. W centralnej części znajduje się 
                salon połączony z kuchnią, z możliwością ustawienia dużego stołu jadalnego. Salon ma wyjście na 
                taras przez szerokie przeszkolone drzwi. Apartament rodziców z sypialnią, łazienką i garderobą 
                zlokalizowany jest z jednej strony, natomiast z drugiej strony znajdują się trzy sypialnie 
                dziecięce i łazienka. Wnętrze jest proste, logiczne, a jednocześnie oryginalne, a nad parterem 
                znajduje się nieużytkowy strych, który można dostosować do dodatkowej przestrzeni użytkowej.
              </p>
              <p>
                Projekt Willa Parterowa 2 to doskonała propozycja dla Inwestorów planujących budowę nowoczesnego, 
                komfortowego domu jednorodzinnego, umożliwiającego wygodne życie na jednej kondygnacji z bezpośrednim 
                kontaktem z ogrodem.
              </p>

              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className='project-thumb'><ZoomableImage src="images/project/bl-04-750x430-WillaParterowa2.png" alt="blog" /></div>
                        <div className='project-thumb'><ZoomableImage src="images/project/bl-04-750x430-WillaParterowa2.png" alt="blog" /></div>
                        <div className='project-thumb'><ZoomableImage src="images/project/bl-04-750x430-WillaParterowa2.png" alt="blog" /></div>
                    </div>
                </div>
            </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomNaDebowej" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomWaski3" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                        Jest to etap, w którym łączy się zakres etapów stanu surowego zamkniętego. 
                    </span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-WillaParterowa2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-WillaParterowa2.png" alt="blog" /></p>
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

    <RelatedProjectsKasjopea7 />

    </>
    )
}

export default ProjectsDetailsOne;
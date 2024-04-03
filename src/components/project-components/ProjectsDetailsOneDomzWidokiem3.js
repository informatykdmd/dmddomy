import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
  
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_DomzWidokiem3_download.pdf'; 
    link.download = 'dmd_domy_DomzWidokiem3_download.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                    <ZoomableImage src="images/project/bl-01-750x430-DomzWidokiem3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomzWidokiem3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomzWidokiem3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomzWidokiem3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom z widokiem 3</h3>
              <p>
                Projekt domu Dom z widokiem 3 to wariant popularnego projektu Dom z widokiem. Dom z Widokiem 
                3 został zmniejszony o 30%, co przekłada się również na zmniejszenie kosztów realizacji budynku. 
                Mimo wprowadzonych zmian dom nie stracił na reprezentacyjnym wyglądzie ani na programie użytkowym 
                i funkcjonalności wnętrz. W rezultacie powstała elegancka niewielka miejska rezydencja piętrowa, 
                składająca się z zasadniczej dwukondygnacyjnej i kilku parterowych brył. Powierzchnia użytkowa 
                wynosi 186,93 m2 ( kubatura 1053,76 m3). Minimalne wymiary działki na jakiej może być zrealizowany 
                projekt to: 27,66 x 21,19 m. Projekt Dom z widokiem 3 sprawdzi się w przypadku trudniejszych 
                działek z niekorzystną orientacją wjazdu w stosunku do nasłonecznienia.
              </p>

              <span><strong>Dom z Widokiem 3 - Bryła Budynku</strong></span><br />
              <p>
                  Architektura domu prezentuje spokojną nowoczesność z dopasowanymi harmonijnie materiałami 
                  wykończeniowymi i detalami. Jego główną atrakcją jest piękne okno narożne w salonie oraz 
                  pustka z przestrzennym otwarciem na antresolę na piętrze. Projekt charakteryzuje się 
                  proporcjonalnym wyglądem z każdej strony i idealnie łączy się z otaczającymi tarasami i zielenią.
              </p>

              <span><strong>Wnętrze Domu z Widokiem 3</strong></span><br />
              <p>
                  Wejście do domu odbywa się przez sień bezpośrednio z dwustanowiskowego garażu lub drzwiami wejściowymi. 
                  W sieni przewidziano miejsce na garderobę, a z holu można dotrzeć do łazienki, kuchni, salonu oraz 
                  pokoju, który można zaaranżować na gabinet, sypialnię lub bibliotekę. Częściowo otwarta kuchnia 
                  jest częściowo oddzielona bryłą spiżarni i zabudowy kuchennej, łącząc się z jadalnią. Reprezentacyjne 
                  schody są połączone ze ścianą kominkową. Część gospodarcza na parterze obejmuje kotłownię 
                  i garaż z dodatkową przestrzenią magazynowo-gospodarczą.
              </p>

              <p>
                  Na piętrze znajdują się trzy sypialnie, w tym apartament rodziców z własną oddzielną łazienką 
                  i garderobą, ogólnodostępna łazienka oraz antresola, która może pełnić funkcję biblioteki. 
                  Dom z Widokiem 3 łączy się z otaczającym ogrodem poprzez tarasy i podcienia, a duże przeszklenia 
                  otwierają budynek na otaczającą przyrodę.
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-DomzWidokiem3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-DomzWidokiem3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-DomzWidokiem3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaFloryda2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaParkowa7" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8">
                <span className="title">Pobierz Dom z Widokiem 3 w PDF: </span>
                <p style={{padding: "40px"}}>
                  <a 
                    onClick={handleDownload} 
                    style={{fontSize: "60pt", color: "#009e2a", marginLeft: "80px"}}>
                      <i class="fa fa-download"></i>
                  </a>
                </p>
              </div>
              {/* download file */}
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomzWidokiem3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomzWidokiem3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomzWidokiem3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomzWidokiem3.png" alt="blog" /></p>
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
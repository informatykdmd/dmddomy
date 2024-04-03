import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_WillaParkowa4_download.pdf'; 
    link.download = 'dmd_domy_WillaParkowa4_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaParkowa4-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaParkowa4-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaParkowa4-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaParkowa4-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Parkowa 4</h3>
              <p>
                Willa Parkowa 4 to nie tylko dom, to styl życia. Zaprojektowany z myślą o komforcie, 
                elegancji i funkcjonalności, ten parterowy dom z poddaszem użytkowym oferuje 170 m2 
                doskonale wykorzystanej przestrzeni. Jego reprezentacyjny charakter podkreślają detale,
                 a czterospadowy dach nadaje mu niepowtarzalny wygląd.
              </p>

                <span><strong>Bryła Budynku</strong></span><br />
                <p>
                    Projekt domu Willa Parkowa 4 doskonale łączy tradycję z nowoczesnym podejściem, 
                    tworząc harmonijną bryłę o wyjątkowym charakterze. Ozdobiony pięknym półtora kondygnacyjnym 
                    portykiem wejściowym, front domu emanuje prestiżem. Przeszklenia drzwi 
                    wejściowych oraz łukowate naświetlenie dodają uroku i wprowadzają do wnętrza willi. 
                    Z ogrodu natomiast rozpościerają się imponujące widoki przez duże przeszklenia, 
                    szczególnie z salonu, który otwiera się na zadaszony ogród i taras.
                </p>
                <span><strong>Wnętrze</strong></span><br />
                <p>
                    Przemyślane wnętrze parteru zostało funkcjonalnie podzielone na trzy części, 
                    zapewniając komfortową przestrzeń do życia. Część dzienna obejmuje salon otwarty 
                    na antresolę, kuchnię i hol, tworząc centralne miejsce spotkań. 
                    Część gospodarczo-garażowa, z dostępem z przedsionka, zapewnia wygodny 
                    dostęp do garażu i kotłowni. Część nocna na parterze składa się z 
                    trzech sypialni, z dodatkowymi dwoma pokojami na poddaszu. Poddasze, 
                    z możliwością dowolnej aranżacji, stanowi elastyczną przestrzeń do wykorzystania 
                    według indywidualnych potrzeb. Na parterze znajdują się dwie łazienki, dodatkowe WC 
                    oraz pralnia przy sypialniach, a apartament rodziców dysponuje własną łazienką 
                    i garderobą. Jeśli strych zostanie zaadaptowany na poddasze, zyskujesz dodatkową 
                    przestrzeń na nowoczesną łazienkę lub inne funkcje.
                </p>
                <p>
                    Willa Parkowa 4 to nie tylko dom, lecz manifestacja elegancji, nowoczesności i 
                    funkcjonalności. Zrealizuj marzenia o idealnym miejscu do życia już teraz!
                </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-WillaParkowa4.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-WillaParkowa4.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-WillaParkowa4.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomWaski3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomNaDebowej" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8" style={{marginTop: "20px"}}>
                <span className="title">Pobierz Willa Parkowa 4 w PDF: </span>
                <p style={{padding: "40px"}}>
                  <a 
                    onClick={handleDownload} 
                    style={{fontSize: "60pt", color: "#009e2a", marginLeft: "80px"}}>
                      <i class="fa fa-download"></i>
                  </a>
                </p>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaParkowa4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaParkowa4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaParkowa4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaParkowa4.png" alt="blog" /></p>
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
import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
   
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_WillaFloryda2_download.pdf'; 
    link.download = 'dmd_domy_WillaFloryda2_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaFloryda2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaFloryda2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaFloryda2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaFloryda2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Floryda 2</h3>
              <p>
                Projekt domu Willa Floryda 2 to projekt domu jednorodzinnego piętrowego o powierzchni 262,39 m2 
                (kubatura 1346 m3), Jest to dom mniejszy od cieszącego się popularnością Willa Floryda. W żadnym 
                stopniu nie ustępuje poprzednikowi pod względem funkcjonalnym czy estetycznym. 
              </p>

              <span><strong>Projekt Willa Floryda 2 - Bryła Budynku</strong></span><br />
              <p>
                  Willa Floryda 2 jest zwieńczona dachem czterospadowym o kącie nachylenia wynoszącym 30 stopni, 
                  z dodatkiem płaskiego dachu. Budynek jest piętrowy, w kształcie prostokąta z wystającą wiatą 
                  przed garażem, co nadaje mu nieoczywistą architekturę. Elewacje zostały podzielone kontrastującymi 
                  poziomymi pasami, gdzie ciemniejsze pasy odpowiadają grubości kondygnacji i okien, a jasne białe 
                  pasy odpowiadają grubości stropów. Duże przeszklenia i narożne okna dodają sylwetce domu lekkości 
                  i transparentności.
              </p>

              <span><strong>Wnętrze Willi Floryda 2</strong></span><br />
              <p>
                  Wnętrze domu skupia się wokół pięknego salonu z dwukondygnacyjną kubaturą, nad którą góruje 
                  antresola piętra. Przestrzeń dzienna obejmuje hol, kuchnię, jadalnię i salon o łącznej powierzchni 
                  ponad 90 m2. Kuchnia z wyspą łączy się z dużą spiżarnią, a obok salonu mieści się dodatkowy 
                  pokój - gabinet, z bezpośrednim dostępem do tarasu i ogrodu. Na piętrze znajdują się cztery 
                  prywatne apartamenty, każdy z własną łazienką i garderobą. Dodatkowo, z holu mamy dostęp do 
                  pralni, która może pełnić funkcję domowej galerii lub biblioteki.
              </p>

              <p>
                  <em>
                    Willa Floryda 2 to elegancka, nowoczesna rezydencja o luksusowym i komfortowym charakterze, 
                    zaprojektowana w rozsądnej skali dla Inwestorów, którzy nie dysponują dużą działką o rozmiarach 
                    oryginalnej Willi Floryda.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-WillaFloryda2.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-WillaFloryda2.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-WillaFloryda2.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaFloryda3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomZWidokiem3" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8">
                <span className="title">Pobierz Willa Floryda 2 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaFloryda2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaFloryda2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaFloryda2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaFloryda2.png" alt="blog" /></p>
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
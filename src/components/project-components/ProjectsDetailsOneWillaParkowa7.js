import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_WillaParkowa7_download.pdf'; 
    link.download = 'dmd_domy_WillaParkowa7_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaParkowa7-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaParkowa7-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaParkowa7-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaParkowa7-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa parkowa 7</h3>
              <p>
                Projekt domu Willa Parkowa 7 to klasyczna, podmiejska willa, Swoim stylem nawiązujący do 
                architektury dworkowej i rezydencyjnej. Dom jest parterowy, o rozbudowanym rzucie w kształcie 
                litery „T”. Powierzchnia użytkowa domu wynosi 206,69 m2 (kubatura 1285 m3). Jest to wygodny dom 
                dla 4-5 osobowej rodziny. Projekt można zrealizować na działce o minimalnych wymiarach: 26,55 x30,52m.
              </p>

              <span><strong>Willa Parkowa 7 - Bryła Budynku</strong></span><br />
              <p>
                  Bryła budynku Willa Parkowa 7 jest przykryta wielospadowym dachem, z charakterystycznym zadaszeniem 
                  tarasu ustawionym pod kątem 45 stopni. Oryginalny kształt budynku, funkcjonalne wnętrze oraz dopracowane 
                  detale elewacji sprawiają, że ta willa prezentuje się jako reprezentacyjna nieruchomość, wyróżniająca się 
                  spośród innych domów. Front budynku został zaprojektowany w taki sposób, aby podkreślić strefę wejściową. 
                  Garaż został celowo cofnięty w głąb działki, a dwukondygnacyjny portyk wejściowy z pięknymi drzwiami 
                  z naświetlami bocznymi i łukową kolebką dominuje na pierwszym planie. Wykuszowe okno kuchenne w elewacji 
                  frontowej oraz cofnięte wrota garażowe tworzą wygodny podjazd-dziedziniec, zdolny pomieścić nawet 
                  4 dodatkowe auta.
              </p>

              <p>
                  Elewacja ogrodowa skomponowana jest z dwóch połączonych elewacji – bocznej i tylnej, z przełamaną 
                  skośną ścianą salonu z pięknym przeszkleniem, zakończonym łukowym naświetlem, oraz zadaszeniem 
                  tarasu na kolumnach. Taras ogrodowy znajduje się w narożniku domu, otwierając widok na tył i bok domu. 
                  Cała bryła budynku jest ozdobiona gzymsami, opaskami okien i boniowaniami narożników ścian, nawiązując 
                  do ponadczasowej klasycznej architektury i dodając elegancji budynkowi.
              </p>

              <span><strong>Wnętrze Willi Parkowej 7</strong></span><br />
              <p>
                  Wnętrze willi zostało starannie zaprojektowane, dzieląc dom na części. Reprezentacyjny podwyższony 
                  przedsionek z szatnią prowadzi wprost do przestrzeni dziennej z salonem, jadalnią i holem. Wyjątkową 
                  cechą jest ściana kominkowo-telewizyjna oraz otwarcie przestrzenne sufitu z antresolą i szerokim 
                  widokiem z salonu na taras i ogród. Na parterze znajduje się również dodatkowy pokój, dzienna toaleta, 
                  obszerna kuchnia z wyspą, spiżarnią oraz część gospodarczo-garażowa z pralnią, kotłownią i dwustanowiskowym 
                  garażem. Sypialnie mieszkańców zostały umiejscowione w części tylnej domu, oddzielone korytarzem. 
                  Na piętrze znajdują się trzy sypialnie, w tym apartament rodziców z własną łazienką i garderobą, 
                  dwie sypialnie dziecięce z łazienką oraz mini tarasem porannym.
              </p>

              <p>
                  Willa Parkowa 7 oferuje przemyślane wnętrze, łączące elegancję z funkcjonalnością.
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-WillaParkowa7.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-WillaParkowa7.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-WillaParkowa7.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomZWidokiem3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaFloryda3" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8" style={{marginTop: "20px"}}>
                    <span className="title">Pobierz WillaParkowa 7 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaParkowa7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaParkowa7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaParkowa7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaParkowa7.png" alt="blog" /></p>
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
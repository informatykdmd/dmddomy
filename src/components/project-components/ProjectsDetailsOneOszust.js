import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
  
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Oszust_download.pdf'; 
    link.download = 'dmd_domy_Oszust_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Oszust-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Oszust-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Oszust-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Oszust-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Oszust</h3>
              <p>
                Projekt domu Oszust to projekt domu jednorodzinnego dla 4-5 użytkowników, 
                Gotowy projekt domu Oszust jest propozycją dla Klientów pragnących wybudować 
                budynek piętrowy, ale posiadających działkę, na której przepisy zakazują budowy 
                domu z piętrem. Wiele planów miejscowych w naszym kraju zakłada takie 
                parametry: dom z poddaszem użytkowym, dach o kącie nachylenia 35 stopni 
                oraz maksymalna wysokość domu wynosząca 8,5 metra. Postaraliśmy się więc 
                wpasować w tak niekorzystne założenia dom Oszust, który mimo wszystko będzie 
                praktycznie "piętrówką". Stąd oryginalna nazwa projektu - Oszust, ponieważ 
                przechytrzamy projektem domku Oszust nieprzychylne zapisy urbanistyczne. 
                Minimalne wymiary działki na której projekt może być zrealizowany 
                to: 20,09 x 21,98 m.
              </p>

              <span><strong>Architektura Domu Oszust</strong></span><br />
              <p>
                  Architektonicznie projekt domu Oszust prezentuje się jako nowoczesny, piętrowy dom. 
                  Różnica w wysokości dachu na piętrze umożliwia umieszczenie dużych okien doświetlających 
                  pokoje na górnej kondygnacji. Kompaktowa bryła domu Oszust, przykryta czterospadowym dachem, 
                  wizualnie podzielonym poziomymi pasami, z wykorzystaniem kontrastujących materiałów, tworzy 
                  nowoczesny wygląd.
              </p>

              <span><strong>Wnętrze Domu Oszust</strong></span><br />
              <p>
                  Na parterze domu Oszust znajduje się obszerna, jednoprzestrzenna część dzienna. 
                  Centralnym elementem salonu jest wyeksponowana ściana kominkowo-telewizyjna. Pozostałe 
                  pomieszczenia obejmują wygodną kuchnię ze spiżarnią, dodatkowy pokój, który może służyć 
                  jako sypialnia dla gości lub gabinet, oraz WC. Parter jest połączony ze ścianą salonu, 
                  gdzie znajdują się schody prowadzące na wyższą kondygnację. Do dwustanowiskowego garażu 
                  i pomieszczenia gospodarczego można się dostać bezpośrednio z sieni. Duże przeszklenia 
                  salonu otwierają wnętrze domu Oszust na zadaszony taras i otaczający ogród.
              </p>
              <p>
                  Na górze znajduje się osobny apartament rodziców z własną łazienką i garderobą, 
                  oraz dwie sypialnie dziecięce z ogólną łazienką. Poddasze zostało zaprojektowane 
                  z uwzględnieniem wysokości stania na prawie całej powierzchni, eliminując skosy, 
                  co ułatwia poruszanie się.
              </p>

              <p>
                  <em>
                    Dom Oszust łączy nowoczesną architekturę z funkcjonalnym wnętrzem, tworząc harmonijne 
                    miejsce do życia.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Oszust.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Oszust.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Oszust.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Qubik" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Tytan3" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8" style={{marginTop: "20px"}}>
                <span className="title">Pobierz Dom Oszust w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Oszust.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Oszust.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Oszust.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Oszust.png" alt="blog" /></p>
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
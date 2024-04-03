import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Wymarzony9_download.pdf'; 
    link.download = 'dmd_domy_Wymarzony9_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Wymarzony9-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Wymarzony9-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Wymarzony9-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Wymarzony9-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
                <h3>Wymarzony 9</h3>
                <p>
                    Projekt domu Wymarzony 9 to projekt domu jednorodzinnego parterowego ze strychem, 
                    Budynek został zaprojektowany w modnej stylistyce domu-stodoły. Powierzchnia użytkowa 
                    to 118,51 m2 ( kubatura 947 m3). Dom jest zaprojektowany dla 5 użytkowników. Przykryty 
                    został dwuspadowym dachem o kącie nachylenia 35 stopni. Minimalna wielkość działki na 
                    jakiej może być realizowany projekt to: 29,93 m x 18,30 m.
                </p>

                <span><strong>Bryła Domu Wymarzony 9 - Architektura</strong></span><br />
                <p>
                    Bryła domu Wymarzony 9 charakteryzuje się maksymalną prostotą i nowoczesnością. 
                    Pudełkowe zadaszenia z tyłu i z przodu skutecznie kryją wejście oraz wykusze w kuchni. 
                    Ciekawe detale i materiały, takie jak okładzina klinkierowa, szare wstawki, stolarka 
                    okienna w kolorze szarym oraz grafitowa dachówka, nadają budynkowi elegancji 
                    i reprezentacyjnego charakteru. Dwuspadowy dach bez okapów stanowi dopełnienie 
                    minimalistycznego designu.
                </p>

                <span><strong>Projekt Domu Wymarzony 9 - Elewacja Frontowa</strong></span><br />
                <p>
                    Część wejściowa z podestem, pudełkowym zadaszeniem i drzwiami wejściowymi z naświetlami 
                    wyróżnia elewację frontową. Ten detal powtórzono także w wykuszu kuchni na elewacji tylnej. 
                    Szczególną uwagę przyciąga szczyt domu z oknem biegnącym przez całą wysokość elewacji, 
                    doświetlając salon z pustką i antresolą oraz otwierając wnętrze na taras z pergolą 
                    i ogród. Projekt domu umożliwia lokalizację na różnych rodzajach działek, nawet 
                    z nietypowym ułożeniem.
                </p>

                <span><strong>Wnętrze Domu Wymarzony 9</strong></span><br />
                <p>
                    Wnętrze domu Wymarzony 9 zostało starannie zaprojektowane, oferując wygodne cztery pokoje, 
                    salon i wszystkie potrzebne pomieszczenia dodatkowe. Przedsionek prowadzi bezpośrednio do 
                    części dziennej z salonem, jadalnią i częściowo otwartą kuchnią. Kuchnia łączy się ze 
                    spiżarnią, a także pralnią z wyjściem na tył domu. Na przeciwnym końcu znajdują się 
                    trzy sypialnie, łazienka i dodatkowy pokój, który może pełnić rolę gabinetu lub dodatkowej 
                    sypialni. Podwójne drzwi łączą dom z garażem i kotłownią.
                </p>
                <p>
                    Nad parterem zaplanowano poddasze z pustką nad salonem, antresolą ze schodami, oraz 
                    dodatkową przestrzenią strychu, którą można wykorzystać jako magazyn lub pozostawić jako strych.
                </p>

                <em>
                    Krótkie podsumowanie: Prosta i elegancka bryła domu Wymarzony 9 łączy nowoczesność z 
                    funkcjonalnością zarówno na zewnątrz, jak i wewnątrz, oferując reprezentacyjny 
                    i komfortowy dom.
                </em>


                <div className="col-md-12 p-b30">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-08-750x430-Wymarzony9.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-09-750x430-Wymarzony9.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-10-750x430-Wymarzony9.png" alt="Oferta" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-nav clearfix">
                    <Link to="/single-project-DomNaPraktycznej2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                    <Link to="/single-project-Sensowny2" className="blog-next"><i className="fa fa-angle-right" /></Link>
                </div>
                {/* download file */}
                <div className="col-md-8">
                    <span className="title">Pobierz Wymarzony 9 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Wymarzony9.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Wymarzony9.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Wymarzony9.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Wymarzony9.png" alt="blog" /></p>
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
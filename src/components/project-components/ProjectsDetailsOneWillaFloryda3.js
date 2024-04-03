import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
  
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_WillaFloryda3_download.pdf'; 
    link.download = 'dmd_domy_WillaFloryda3_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaFloryda3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaFloryda3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaFloryda3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaFloryda3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Floryda 3</h3>
              <p>
                Projekt domu Willa Floryda 3 jest naszą kolejną propozycją projektu z serii nowoczesnych rezydencji
                 Willa Floryda, Dom estetycznie i architektonicznie nawiązuje do serii "Floryd". Całkowicie odbiega 
                 od nich układem funkcjonalnym oraz wyglądem. Budynek jest piętrowy o powierzchni 
                 użytkowej 235,54 m2 (kubatura 1243 m3). Projekt domu Willa Floryda 3 można zrealizować 
                 na działce o minimalnych wymiarach 23,17 x 28,13 m 
              </p>

                <span><strong>Willa Floryda 3 - Bryła Budynku</strong></span><br />
                <p>
                    Budynek Willa Floryda 3 jest piętrowy, z dwukondygnacyjnym rdzeniem otoczonym parterowymi 
                    częściami z przodu i z tyłu. Ta konstrukcja nadaje bryle budynku lekkości, łącząc zalety 
                    domu piętrowego i parterowego. Elewacja willi została podzielona na poziome pasy, gdzie 
                    ciemne fragmenty w grubości kondygnacji i okien kontrastują z białymi pasami w grubości 
                    stropów. Jasne elementy wystające do przodu, a ciemniejsze chowane w ścianie, nadają bryle 
                    atrakcyjności i trójwymiarowości.
                </p>

                <p>
                    Wejście do domu zostało podkreślone eleganckim podcieniem oraz masywną ścianą wykończoną 
                    kamieniem lub betonem architektonicznym. Narożne okno kuchni oraz przeszklenia piętra dodają 
                    lekkości i transparentności frontowi domu. Duże przeszklenia salonu i sypialni na piętrze 
                    otwierają wnętrze na ogrodowy krajobraz. Taras z pergolą tworzy swoiste patio, zapewniając 
                    mieszkańcom prywatną przestrzeń z widokiem na ogród.
                </p>

                <span><strong>Wnętrza Willi Floryda 3</strong></span><br />
                <p>
                    Parter domu został zaprojektowany na planie zbliżonym do kwadratu. Przestronny przedsionek 
                    z miejscem na szatnię prowadzi do garażu, spiżarni, kuchni i holu z reprezentacyjnymi 
                    schodami. Salon, jadalnia i kuchnia tworzą wspólną, niemal dziewięćdziesięciometrową 
                    powierzchnię. Salon otwiera się na narożny taras. Parter zawiera także dwa dodatkowe 
                    pokoje, z których można stworzyć sypialnie, pokoje do pracy lub rekreacji.
                </p>

                <p>
                    Dodatkowo, parter oferuje duże pomieszczenie gospodarcze, które obejmuje kotłownię. 
                    Na piętrze znajdują się trzy sypialnie, w tym apartament rodziców z własnymi garderobami 
                    i łazienką, oraz sypialnie dzieci z łazienką dostępną z holu. Piętro zawiera również 
                    pralnię i hol połączony z parterem schodami oraz niewielką dziurą w stropie, co 
                    wprowadza do wnętrza dodatkowe światło.
                </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-WillaFloryda3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-WillaFloryda3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-WillaFloryda3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaParkowa7" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaFloryda2" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8">
                <span className="title">Pobierz Willa Floryda 3 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaFloryda3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaFloryda3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaFloryda3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaFloryda3.png" alt="blog" /></p>
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
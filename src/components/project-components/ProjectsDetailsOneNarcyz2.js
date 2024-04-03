import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
    
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Narcyz2_download.pdf'; 
    link.download = 'dmd_domy_Narcyz2_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Narcyz2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Narcyz2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Narcyz2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Narcyz2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Narcyz 2</h3>
              <p>
                Projekt domu Narcyz2 to parterowy dom z poddaszem użytkowym zbudowany na planie prostokąta,
                 Do głównej bryły projektu dobudowany jest dwustanowiskowy garaż z poddaszem. Powierzchnia 
                 użytkowa wynosi blisko 135 m2 (kubatura 788 m3). W domu komfortowo może mieszkać 5 użytkowników.
                 Minimalna działka na jakiej może powstać obiekt ma wymiary: 23,68 x 17,88 m. 
                 Projekt łączy tradycyjną formę budynku z dwuspadowym dachem.
              </p>

                <span><strong>Bryła Domu</strong></span><br />
                <p>
                  Gotowy projekt Narcyz 2 to elegancki parterowy dom z poddaszem użytkowym, wzniesiony na planie 
                  prostokąta i pokryty dwuspadowym dachem. Do głównej bryły domu Narcyz 2 dołączony jest 
                  dwustanowiskowy garaż z poddaszem. Symetryczna elewacja frontowa projektu urozmaicona 
                  jest podcieniem nad wejściem oraz szeroką lukarną z balkonem. Elewacja ogrodowa dodatkowo 
                  zdobi zadaszenie tarasu oraz przesuwne drzwi balkonowe, otwierające salon na taras 
                  i malowniczy ogród. Forma budynku jest tradycyjna, co nadaje mu ponadczasowy urok, 
                  który pięknie się starzeje.
                </p>

                <span><strong>Wnętrze Narcyza 2</strong></span><br />
                <p>
                    Wnętrze parteru projektu Narcyz 2 obejmuje przestronną, blisko 40-metrową przestrzeń, 
                    łączącą salon, hol i kuchnię, reprezentacyjne schody na poddasze, dodatkowy pokój 
                    (gabinet lub sypialnia), pomieszczenia gospodarcze oraz podwójny garaż i obszerną kotłownię.
                </p>
                <p>
                    Lokalizacja kotłowni umożliwia instalację zarówno kotła gazowego lub pompy ciepła, jak 
                    i kotła na paliwo stałe. Wnętrze domu Narcyz 2 zapewnia dużo miejsca na część gospodarczą 
                    oraz przechowywanie. Przy przedsionku znajduje się obszerna garderoba, a dalej pomieszczenie, 
                    które można zaaranżować na pralnię i suszarnię. Ciekawym rozwiązaniem jest również 
                    zaplanowana spiżarnia tuż przy kuchni. Na poddaszu, mimo skosów, mieszczą się wygodne 
                    cztery pokoje oraz duża łazienka. Sypialnia rodziców w projekcie Narcyz 2 dysponuje 
                    własną sporą garderobą. Poddasze można powiększyć, podnosząc nieco ściany kolankowe, 
                    zgodnie z preferencjami Inwestora. Pokój nad częścią garażową w tym projekcie domu 
                    jest bardzo przestronny.
                </p>

                <p>
                    <em>
                      Odkryj harmonię i funkcjonalność w projektowaniu Narcyz 2, gdzie elegancja 
                      architektoniczna spotyka się z wygodą życia codziennego.
                    </em>
                </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Narcyz2.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Narcyz2.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Narcyz2.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Hiacynt3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Zefir" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8" style={{marginTop: "20px"}}>
                <span className="title">Pobierz Dom Narcyz 2 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Narcyz2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Narcyz2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Narcyz2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Narcyz2.png" alt="blog" /></p>
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
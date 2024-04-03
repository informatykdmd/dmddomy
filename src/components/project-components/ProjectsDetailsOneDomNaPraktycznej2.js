import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

  
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_DomNaPraktycznej2_download.pdf'; 
    link.download = 'dmd_domy_DomNaPraktycznej2_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-DomNaPraktycznej2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomNaPraktycznej2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomNaPraktycznej2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomNaPraktycznej2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
                <h3>Dom na Praktycznej 2</h3>
                <p>
                    Projekt domu Dom na Praktycznej 2 to projekt parterowego domu jednorodzinnego z serii „Praktycznych”, 
                    Budynek zaprojektowano na planie prostokąta przykrytego łagodnym, dwuspadowym dachem przykrytym dachówką. 
                    Jest to dom dla 3-4 osobowej rodziny. Powierzchnia użytkowa domu wynosi 116,77 m2 (kubatura 760 m3). 
                    Jest to projekt domu bez garażu. Dom na Praktycznej 2 może być zrealizowany na działce o minimalnych 
                    wymiarach: 22,20 x 18,50m.
                </p>

                <span><strong>Bryła Domu Dom na Praktycznej 2</strong></span><br />
                <p>
                    Prosta i nowoczesna bryła budynku projektu Dom na Praktycznej 2 łączy się z ciekawymi detalami, 
                    tworząc udane połączenie estetyczne i solidne. Dobrze dobrane materiały oraz ciekawa kolorystyka 
                    nadają budynkowi ładny wygląd zewnętrzny, emanujący poczuciem harmonii. Reprezentacyjne wejście 
                    z drzwiami z naświetlem i nowoczesnym zadaszeniem podestu wejściowego ozdabia front domu, podczas 
                    gdy od strony ogrodu piękne okno salonu otwiera wnętrze na taras, a pergola dodaje uroku.
                </p>

                <span><strong>Wnętrze projektu Domu na Praktycznej 2</strong></span><br />
                <p>
                    Wnętrze Domu na Praktycznej 2 zostało zaprojektowane z podziałem na część dzienną i nocną. 
                    Duży przedsionek prowadzi do holu, z którego przechodzi się do części dziennej. Salon z kuchnią 
                    tworzą otwartą przestrzeń, obejmującą część wypoczynkową z siedziskami i ścianą kominkowo-telewizyjną. 
                    Jadalnia posiada wygodny stół oraz piękne okno, otwierające widok na ogród. Kuchnia zawiera pełną 
                    zabudowę i spiżarnię. Część prywatna obejmuje trzy wygodne sypialnie z dużymi zabudowanymi szafami 
                    oraz dużą łazienkę. Główna sypialnia posiada wyjście na taras. Obok przedsionka znajduje się 
                    kotłownia, a przy kuchni pomieszczenie gospodarcze. Wnętrze budynku zostało zaplanowane na 
                    jednym poziomie parteru, z dostępem do przestrzeni strychowej, która może być wykorzystana 
                    jako domowy magazyn lub poddasze.
                </p>

                <em>
                    Krótkie podsumowanie: Projekt Dom na Praktycznej 2 łączy prostotę i nowoczesność bryły z 
                    interesującymi detalami, tworząc estetyczny i funkcjonalny dom. Zarówno z zewnątrz, jak 
                    i wewnątrz, emanuje harmonią i praktycznością.
                </em>

                <div className="col-md-12 p-b30">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-08-750x430-DomNaPraktycznej2.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-09-750x430-DomNaPraktycznej2.png" alt="Oferta" />
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-10-750x430-DomNaPraktycznej2.png" alt="Oferta" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="blog-nav clearfix">
                    <Link to="/single-project-Ekonomiczny2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                    <Link to="/single-project-Wymarzony9" className="blog-next"><i className="fa fa-angle-right" /></Link>
                </div>
                {/* download file */}
                <div className="col-md-8" style={{marginTop: "20px"}}>
                  <span className="title">Pobierz Dom Na Praktycznej 2 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomNaPraktycznej2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomNaPraktycznej2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomNaPraktycznej2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomNaPraktycznej2.png" alt="blog" /></p>
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
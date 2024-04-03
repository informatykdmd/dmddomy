import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Ekonomiczny2_download.pdf'; 
    link.download = 'dmd_domy_Ekonomiczny2_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Ekonomiczny2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Ekonomiczny2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Ekonomiczny2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Ekonomiczny2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
                <h3>Ekonomiczny 2</h3>
                <p>
                    Projekt domu Ekonomiczny 2 jest to projekt niedużego, parterowego domu jednorodzinnego 
                    dla 3-4 osób, Powierzchnia użytkowa wynosi 100,28 m2 (kubatura 689 m3). Budynek zwieńczony 
                    jest dwuspadowym dachem, który kryje strych do dowolnego wykorzystania. Projekt można 
                    zrealizować na działce o minimalnych wymiarach; 20,80 x 18.00 m.
                </p>

                <span><strong>Bryła Domu Ekonomiczny 2</strong></span><br />
                <p>
                    Wejście do domu Ekonomiczny 2 zostało urokliwie podkreślone niszą z zadaszonym podcieniem 
                    oraz reprezentacyjnym szerokim podestem. Elewacja frontowa prezentuje idealną symetrię, 
                    przywołującą ducha dawnego stylu dworkowego. Styl tego domu to połączenie współczesności 
                    z subtelnym ukłonem w stronę ponadczasowej tradycji. Całość emanuje porządkiem, harmonią 
                    i solidnością, z architektoniczną prostotą, ale z nutką nowoczesności. Od strony ogrodu 
                    dominują duże przesuwne okno z salonu, otwierające wnętrze na ogród, oraz taras, 
                    stanowiący przedłużenie pokoju dziennego. Dach dwuspadowy o kącie nachylenia 35 
                    stopni zwieńcza całą kompozycję.
                </p>

                <span><strong>Wnętrze domu Ekonomiczny 2</strong></span><br />
                <p>
                    Budynek oferuje wygodne wnętrze, z wszystkimi potrzebnymi pomieszczeniami na poziomie parteru. 
                    Dodatkową przestrzeń strychową można dostosować według własnych potrzeb - nasza propozycja 
                    obejmuje dwa dodatkowe pokoje lub powierzchnię magazynową. Dwie części domu są oddzielone 
                    pomieszczeniem kotłowni, z wyjściem na zewnątrz. Kotłownia i kominek w salonie dzielą 
                    wspólny zespół kominowy. Na parterze, w części dziennej, znajduje się salon z otwartą 
                    kuchnią z półwyspem i spiżarnią. Po drugiej stronie są trzy sypialnie, w tym główna 
                    sypialnia z osobną garderobą, oraz łazienka przy korytarzu, zapewniając komfortową 
                    przestrzeń do mieszkania.
                </p>

                <em>
                    Dom Ekonomiczny 2 to harmonijne połączenie tradycji i nowoczesności, z urokliwym wejściem, 
                    przemyślaną symetrią elewacji, oraz wnętrzem zaprojektowanym z myślą o wygodzie i praktyczności.
                </em>

                    
                <div className="col-md-12 p-b30">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-08-750x430-Ekonomiczny2.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-09-750x430-Ekonomiczny2.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-10-750x430-Ekonomiczny2.png" alt="Oferta" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-nav clearfix">
                  <Link to="/single-project-Sensowny2" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                  <Link to="/single-project-DomNaPraktycznej2" className="blog-next"><i className="fa fa-angle-right" /></Link>
                </div>
                {/* download file */}
                <div className="col-md-8">
                  <span className="title">Pobierz Dom Ekonomiczny 2 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Ekonomiczny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Ekonomiczny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Ekonomiczny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Ekonomiczny2.png" alt="blog" /></p>
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
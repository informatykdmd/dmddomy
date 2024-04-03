import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
   
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Sensowny2_download.pdf'; 
    link.download = 'dmd_domy_Sensowny2_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Sensowny2-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Sensowny2-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Sensowny2-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Sensowny2-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
                <h3>Sensowny 2</h3>
                <p>
                    Projekt domu Sensowny 2 to niewielki dom jednorodzinny z bardzo funkcjonalnym wnętrzem.
                    Jest to parterowy budynek przykryty dwuspadowym dachem z prostokątnym rzutem o wymiarach 
                    12x8 m i kryje w sobie wygodną przestrzeń do życia dla 2-4 osobowej rodziny. Powierzchnia 
                    użytkowa domu to blisko 72 m2 (kubatura 424 m3). Działka na której można zrealizować projekt 
                    ma minimalne wymiary: 19x16 m.
                </p>

                <span><strong>Bryła Domu Sensowny 2</strong></span><br />
                <p>
                    Bryła budynku Sensowny 2 przyjmuje formę prostokątną, bez zaskakujących rozwiązań architektonicznych. 
                    Charakteryzuje się stylizacją, będącą harmonijnym połączeniem nowoczesności i tradycji. 
                    Symetria elewacji, właściwe proporcje oraz konsekwentna kolorystyka materiałów wykończeniowych 
                    tworzą estetyczną całość. Wejście do domu jest podkreślone wysuniętym dachem, zakrywającym 
                    podest wejściowy, a drzwi wejściowe zdobi kontrastująca opaska. Z tyłu budynku dominują 
                    szerokie drzwi balkonowe, otwierające przestrzeń pokoju dziennego na taras i otaczający ogród.
                </p>

                <span><strong>Wnętrze domu Sensowny 2</strong></span><br />
                <p>
                    Z zewnętrznego podestu dostajemy się przez drzwi wejściowe do ponad czterometrowej sieni. 
                    Przestrzeń jest na tyle przestronna, że pomieści szafę na przechowywanie odzieży. 
                    Po lewej stronie znajduje się kotłownia, a jej komin jest połączony z przewodem kominka 
                    w salonie. Sienią przechodzimy do holu, który stanowi połączenie między częścią dzienną 
                    a nocną. Salon jest starannie zaplanowany, z widoczną ścianą telewizyjną i narożnym 
                    kominkiem, widocznymi z każdego miejsca. Część nocna obejmuje trzy sypialnie i łazienkę. 
                    Każda sypialnia jest wystarczająco duża, aby pomieścić łóżko oraz dodatkowe meble 
                    użytkowe. Pomimo niewielkiej powierzchni, wnętrze domu jest wygodne, przestronne i funkcjonalne.
                </p>

                <em>
                    Dom Sensowny 2 łączy w sobie prostotę formy z harmonijnym połączeniem nowoczesności 
                    i tradycji. Zarówno zewnętrzna bryła, jak i starannie zaplanowane wnętrze, tworzą 
                    przyjemną przestrzeń, spełniającą oczekiwania co do funkcjonalności i estetyki.
                </em>
                    
                <div className="col-md-12 p-b30">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-08-750x430-Sensowny2.png" alt="Oferta" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-09-750x430-Sensowny2.png" alt="Oferta" />
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="project-thumb">
                                <ZoomableImage src="images/project/bl-10-750x430-Sensowny2.png" alt="Oferta" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="blog-nav clearfix">
                    <Link to="/single-project-Wymarzony9" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                    <Link to="/single-project-Ekonomiczny2" className="blog-next"><i className="fa fa-angle-right" /></Link>
                </div>
                {/* download file */}
                <div className="col-md-8" style={{marginTop: "20px"}}>
                  <span className="title">Pobierz Dom Sensowny 2 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Sensowny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Sensowny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Sensowny2.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Sensowny2.png" alt="blog" /></p>
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
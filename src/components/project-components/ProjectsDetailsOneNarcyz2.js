import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
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
                    <ZoomableImage src="images/project/bl-01-750x430-DomNaDebowej-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomNaDebowej-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomNaDebowej-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomNaDebowej-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom na Dębowej</h3>
              <p>
                Projekt domu "Dom na Dębowej" to jednorodzinny dom parterowy, stworzony z myślą o czterech 
                mieszkańcach. Inspirując się popularnym stylem dworkowym, doskonale komponuje się zarówno 
                z wiejskim krajobrazem, jak i stanowi wyjątkową ozdobę miejskiego otoczenia. Dom jest 
                zwieńczony czterospadowym dachem o nachyleniu 27 i 30 stopni, nadając mu charakterystyczny 
                wygląd. Z powierzchnią użytkową 93,43 m2 i kubaturą 581 m3, projekt jest dostosowany 
                do realizacji na działce o wymiarach 20,80 m x 18,69 m.
              </p>

                <span><strong>Bryła Domu</strong></span><br />
                <p>
                    Bryła budynku została zaplanowana na prostokątnym planie, przykryta 
                    czterospadowym dachem. Centralnie na elewacji frontowej umieszczono 
                    reprezentacyjny portyk wejściowy, a eleganckie drzwi frontowe z naświetlami 
                    dodają uroku. Wnętrze domu zostało funkcjonalnie zaaranżowane, z uwzględnieniem 
                    nowoczesnych rozwiązań. Z tyłu budynku znajduje się szerokie przeszklenie 
                    otwierające salon na zadaszony taras i ogród, podkreślając współczesny 
                    styl życia mieszkańców.
                </p>
                <span><strong>Wnętrze</strong></span><br />
                <p>
                    Przedsionek z miejsce na ubrania prowadzi do kotłowni, a hol zapewnia dostęp do 
                    części dziennych i nocnych. W salonie połączonym z otwartą kuchnią znajdziemy 
                    miejsce na meble wypoczynkowe, stół jadalny oraz ścianę telewizyjną i kominkową. 
                    W części nocnej są trzy sypialnie z wbudowanymi szafami, łazienka i osobne WC. 
                    Mimo niewielkiej powierzchni, projekt "Dom na Dębowej" oferuje przestronność 
                    i funkcjonalność, zwłaszcza w przestrzeni dziennego salonu liczącej prawie 50 m2.
                </p>
                <p>
                    "Dom na Dębowej" to idealna propozycja dla miłośników klasycznej architektury dworkowej, 
                    którzy pragną wyjątkowego domu, ekonomicznego, funkcjonalnego i estetycznego. Oferuje 
                    on komfort i nowoczesność, tworząc przyjemne miejsce do życia, bez konieczności 
                    przeznaczania fortuny na własny dom.
                </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-DomNaDebowej.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-DomNaDebowej.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-DomNaDebowej.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaParkowa4" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaParterowa2" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomNaDebowej.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomNaDebowej.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomNaDebowej.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomNaDebowej.png" alt="blog" /></p>
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
import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
    
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_DomNaParkowej6_download.pdf'; 
    link.download = 'dmd_domy_DomNaParkowej6_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-DomNaParkowej6-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomNaParkowej6-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomNaParkowej6-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomNaParkowej6-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Na Parkowej 6</h3>
              <p>
                Projekt domu Dom na Parkowej 6 to kolejny projekt z kolekcji Domów na Parkowej, 
                Tym razem został przygotowany większy wariant projekt domu jednorodzinnego. 
                Dom na parkowej 6 to budynek parterowy ze strychem, przeznaczony dla 3-6 osobowej 
                rodziny. Strych w łatwy sposób można zaadaptować na poddasze użytkowe. Powierzchnia 
                użytkowa domu to 121,67 m2 ( kubatura 742 m3). Minimalne wymiary działki na jakiej 
                może być zrealizowany to: 23,50 x 24,85 m
              </p>

              <span><strong>Bryła Domu na Parkowej 6</strong></span><br />
              <p>
                  Prostokątna bryła budynku Domu na Parkowej 6 przykryta jest czterospadowym dachem o kącie 
                  nachylenia wynoszącym 35 stopni. Do elewacji frontowej dobudowany jest dwustanowiskowy garaż, 
                  a reprezentacyjny front domu przypomina amerykańskie rezydencje z luksusowych przedmieść. 
                  Ozdobą elewacji frontowej jest piękne zadaszenie nad drzwiami wejściowymi, wsparte na 
                  kolumnach, stanowiące centralny element przyciągający uwagę. Podobnie od strony ogrodu 
                  dominuje piękne zadaszenie nad tarasem oraz duże przeszklenia salonu. Architektura domu, 
                  nasycona klasycznymi detalami, emanuje elegancją i posiada ponadczasowy wygląd.
              </p>

              <span><strong>Wnętrze Domu na Parkowej 6</strong></span><br />
              <p>
                  Całość programu użytkowego Domu na Parkowej 6 znajduje się na parterze, a strych może pełnić 
                  rolę dodatkowej przestrzeni użytkowej lub pozostać nieużytkowany. Po wejściu przez wygodną 
                  sien z podwyższonym sufitem, przechodzimy do holu lub w bok do kotłowni i garażu. Otwarta 
                  przestrzeń dziennej obejmuje salon, jadalnię i kuchnię ze spiżarnią. Sufit nad salonem 
                  został otwarty, powiększając przestrzeń dzienną i tworząc antresolę na poddaszu. Część 
                  nocna zawiera trzy sypialnie, WC i łazienkę. Sypialnie dzieci posiadają wbudowane 
                  szafy, a sypialnia rodziców jest połączona z garderobą. Wszystkie sypialnie mają 
                  piękne okna z widokiem na ogród. Ponad garażem znajduje się dodatkowy strych gospodarczy.
              </p>

              <p>
                  <em>
                    Dom na Parkowej 6 łączy w sobie elegancję architektury z funkcjonalnością wnętrza, tworząc 
                    harmonijne i ponadczasowe miejsce do mieszkania.
                  </em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-DomNaParkowej6.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-DomNaParkowej6.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-DomNaParkowej6.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Zefir" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Hiacynt3" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8">
                <span className="title">Pobierz Dom Na Parkowej 6 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomNaParkowej6.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomNaParkowej6.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomNaParkowej6.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomNaParkowej6.png" alt="blog" /></p>
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
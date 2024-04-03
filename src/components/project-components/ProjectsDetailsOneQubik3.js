import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 
    
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Qubik3_download.pdf'; 
    link.download = 'dmd_domy_Qubik3_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Qubik3-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Qubik3-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Qubik3-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Qubik3-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Qubik 3</h3>
              <p>
                Projekt domu Qubik 3 jest to projekt budynku jednorodzinnego w zabudowie bliźniaczej, Budynek 
                o nowoczesnej architekturze, z piętrową bryłą, przykryty dachem płaskim, zbudowany ma planie 
                zbliżonym do kwadratu.
              </p>

              <span><strong>Bryła Domu Qubik 3</strong></span><br />
              <p>
                  Bryła budynku Qubik 3 składa się z kilku przenikających się wzajemnie prostopadłościennych 
                  mniejszych brył. Dom połączony jest wbudowanymi garażami, które rozdzielają wizualnie dwie 
                  połówki bliźniaka. Wejścia do obu segmentów domu podkreślone są dominującymi wykuszami 
                  wystającymi przed ścianę elewacji frontowej, wykończonymi w kontrastowym kolorze. Podział 
                  elewacji na poziome pasy, zróżnicowane kolorystycznie i materiałowo, oraz zastosowanie 
                  dużych przeszkleń, nadają domowi dynamiczny, nowoczesny wygląd. Od strony ogrodu architektura 
                  jest spokojniejsza, skupiająca się na ogrodzie, tarasie i szerokim przeszklonym salonie.
              </p>

              <span><strong>Wnętrze Domu Qubik 3</strong></span><br />
              <p>
                  Wnętrze każdej połówki bliźniaka zostało zaprojektowane z podziałem funkcji na część dzienną 
                  i techniczną na parterze, a sypialne na piętrze. Wejście do domu prowadzi przez przedsionek 
                  do reprezentacyjnego holu z schodami, otwierając się na salon. Salon częściowo łączy się 
                  z dużą, wygodną kuchnią, a także przylegającym gabinetem. Na parterze nie przewidziano 
                  kominka, jednak łatwo można go dodać według własnych preferencji. Piętro obejmuje cztery 
                  sypialnie z dwiema łazienkami, w tym sypialnię master z własną łazienką i garderobą. 
                  Hol na piętrze otrzymuje naturalne światło poprzez ogromny świetlik dachowy Velux.
              </p>

              <p>
                  Architektura domu Qubik 3, zarówno zewnętrzna szata, jak i wnętrze, zostały podporządkowane 
                  maksymalnej klarowności, funkcjonalności i prostocie. To idealny wybór dla inwestorów 
                  ceniących minimalizm, prostotę i dyskretną elegancję. Qubik 3 to dom o prostej konstrukcji, 
                  łatwy w budowie, zastosowano w nim doskonałe izolacje i nowoczesne instalacje, aby 
                  zminimalizować późniejsze koszty eksploatacji. Projekt ten świetnie wpisuje się 
                  w tereny, gdzie dopuszcza się budowę domów z płaskim dachem, wyróżniając się spośród 
                  innych typowych domów. 
              </p>
              <p>
                  <em>Uwaga: Dane techniczne i koszty dotyczą połowy bliźniaka.</em>
              </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Qubik3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Qubik3.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Qubik3.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Tytan3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Qubik" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8">
                  <span className="title">Pobierz Dom Qubik 3 w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Qubik3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Qubik3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Qubik3.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Qubik3.png" alt="blog" /></p>
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
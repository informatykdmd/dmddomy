import { Link } from 'react-router-dom';
// import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_Qubik_download.pdf'; 
    link.download = 'dmd_domy_Qubik_download.pdf'; 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Qubik-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Qubik-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Qubik-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Qubik-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Qubik</h3>
              <p>
                Projekt domu Qubik jest to projekt nowoczesnego domu jednorodzinnego piętrowego, z płaskim 
                dachem - z serii „Qubik”, przeznaczony dla 4-5 osobowej rodziny, Dom zaprojektowano 
                w prostopadłościennej bryle złożonej z kilku przenikających się ze sobą bloków, tworzących 
                interesującą harmonijną sylwetkę - z zaakcentowanym wejściem w narożniku elewacji frontowej, 
                oraz z zawieszonym nad tarasem fragmentem piętra, tworzącym podcień. 
              </p>

                <span><strong>Bryła Domu Qubik</strong></span><br />
                <p>
                    Dom Qubik otwarto maksymalnie dużymi przeszkleniami na stronę ogrodu, łącząc salon i sypialnie 
                    z otoczeniem. Trzy narożne okna z przodu - kuchni, gabinetu i jednej z sypialni na piętrze, 
                    oraz narożnik ścian wejścia wykonany w kontrastującym kolorze, akcentują reprezentacyjne drzwi 
                    do domu. Do jednopiętrowej bryły części mieszkalnej dołączona została parterowa część garażowa 
                    z tarasem na dachu, dostępnym z holu piętra. Kształty, kolory i materiały zastosowane 
                    w elewacjach nadają domowi estetyczny, czysty, minimalistyczny wygląd. 
                </p>

                <span><strong>Wnętrze Domu Qubik</strong></span><br />
                <p>
                    Wnętrze domu Qubik prezentuje równie nowoczesny wyraz, charakteryzując się prostymi 
                    podziałami pomieszczeń i wzajemnie przenikającymi się przestrzeniami. Parter to przede 
                    wszystkim otwarty salon szeroko połączony z tarasem i ogródem, z wysokim holem, aneksem 
                    jadalnym, częściowo odseparowaną kuchnią, oraz ścianą telewizyjno-kominkową z trzystronnym 
                    kominkiem. Znajdziemy także dodatkowy pokój - gabinet, a także garaż z kotłownią. Na piętrze 
                    zaplanowano dwie sypialnie dziecięce z garderobami i dużą łazienką, oraz apartament rodziców 
                    z własną łazienką i garderobami. 
                </p>

                <p>
                    Całość wnętrza spięta jest holem z pustką nad parterem i przejściem na taras na dachu garażu. 
                    Qubik to dom o nowoczesnej minimalistycznej architekturze, z dopracowanymi detalami 
                    i energooszczędnymi instalacjami. Budynek ma korzystny stosunek powierzchni podłóg 
                    do kubatury, oraz zwartą bryłę, co sprawia, że będzie niedrogi w ogrzewaniu 
                    i eksploatacji. Konstrukcja domu jest prosta. Inwestorowi mogą sprawić koszta 
                    stolarki okiennej. Qubik to doskonała propozycja dla osób planujących budowę 
                    domu piętrowego z płaskim dachem, posiadających niewielką działkę i pragnących 
                    zrealizować swoje marzenie o własnym domu w inny, nowoczesny sposób.
                </p>
                
              <div className="col-md-12 p-b30">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project-thumb">
                        <ZoomableImage src="images/project/bl-08-750x430-Qubik.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-09-750x430-Qubik.png" alt="Oferta" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project-thumb">
                            <ZoomableImage src="images/project/bl-10-750x430-Qubik.png" alt="Oferta" />
                        </div>
                    </div>
                </div>
              </div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Qubik3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Oszust" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
              {/* download file */}
              <div className="col-md-8" style={{marginTop: "20px"}}>
                  <span className="title">Pobierz Dom Qubik w PDF: </span>
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
                      <p><ZoomableImage src="images/project/bl-04-750x430-Qubik.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Qubik.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Qubik.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Qubik.png" alt="blog" /></p>
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
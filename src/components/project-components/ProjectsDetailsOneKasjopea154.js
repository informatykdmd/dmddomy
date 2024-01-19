import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsKasjopea154 from '../../elements/RelatedProjectsKasjopea154';

// const ProjectsDetailsOne = ( props ) => { 
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
                    <ZoomableImage src="images/project/bl-01-750x430-Kasjopea154-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Kasjopea154-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Kasjopea154-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Kasjopea154-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Kasjopea: Harmonia Nowoczesności, Funkcjonalności i Elegancji</h3>
              <p>
                Dom Kasjopea, jedno z największych osiągnięć pracowni MG PROJEKT, zdobył serca wielu 
                rodzin dzięki swojej praktyczności i atrakcyjnym rozwiązaniom. Jego koszt budowy w 
                pełni uzasadnia częstą realizację, a forma, łącząca klasyczne elementy z nowoczesnym 
                stylem, czyni go doskonałym wyborem dla rodzin 4-5 osobowych.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom Kasjopea to niekwestionowany hit zarówno studia projektowego MG PROJEKT, jak i naszej 
                firmy budowlanej. Jego realizacje cieszą się ogromnym powodzeniem, szczególnie w Błoniach 
                i Ożarowie Mazowieckim. Posiadamy bogate doświadczenie w budowie domu Kasjopea, co sprawia, 
                że jesteśmy ekspertami w tej konstrukcji, a nasze projekty znajdują zastosowanie w różnych 
                lokalizacjach Warszawy i okolic.
              </p>
              
              <span><strong>Dom Kasjopea – Nietechniczny Opis</strong></span><br />
              <p>
                Czterospadowy dach, niewielkie zadaszenie nad jednostanowiskowym garażem i duże 
                przeszklenia - to charakterystyczne cechy domu Kasjopea. Jego konstrukcja łączy funkcjonalność 
                z elegancją, tworząc niewielki, a jednocześnie praktyczny dom parterowy idealny dla rodzin 
                4-5 osobowych. Koszt budowy tego projektu jest atrakcyjny, co sprawia, że jest wyjątkowo 
                popularny.
                <br />

                Budynek w formie prostopadłościanu z lekko wystającym garażem zapewnia doskonałe właściwości 
                energetyczne. Wykończenie z wykuszami, daszkami, podcieniami, balkonami i loggią łączy 
                nowoczesne trendy z klasyczną elegancją. Również możliwość budowy na wąskich działkach 
                sprawia, że jest to propozycja uniwersalna.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Kasjopea154-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Kasjopea154-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze dominuje nowoczesne rozmieszczenie pomieszczeń, skupiające się na funkcjonalności. 
                Salon i jadalnia, choć połączone, są subtelnie podzielone, by zachować przestrzeń. Wydzielona 
                kuchnia znajduje się na wprost i na lewo od holu. Po prawej stronie holu, przez sień, 
                dostępny jest jednostanowiskowy garaż, a dalej kotłownia z dodatkowym schowkiem pod schodami. 
                Przy schodach umieszczono praktyczne WC.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro domu Kasjopea to miejsce dla łazienek, pokoju-gabinetu i sypialni. Trzy sypialnie, 
                z czego dwie mniejsze z wnękami na szafy, oraz główna sypialnia z własną garderobą zapewniają 
                komfortowe warunki. Wspólna łazienka z pralnią oraz dodatkowa łazienka przy głównej sypialni 
                sprawiają, że piętro jest funkcjonalne i estetyczne. Dodatkowy pokój przeciwnie schodom to 
                idealne miejsce na gabinet lub sypialnię gościnną.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty przygotowujemy metodą wylewania</li>
                  <li>• Ściany zewnętrzne murujemy dwuwarstwowo, z pustaków porotherm 25 i styropianu 20 cm lub wełny mineralnej</li>
                  <li>• Strop wykonujemy w technologii TERIVA</li>
                  <li>• Na elewacji znajdzie się tynk cienkowarstwowy</li>
                  <li>• Dach przykryjemy dachówkami ceramicznymi lub blachodachówkami</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Kasjopea</strong></h4>
                <ul>
                  <li>• Dom Kasjopea to budynek piętrowy z garażem na jeden samochód</li>
                  <li>• Projekt Kasjopea został przygotowany z myślą o 4-5 mieszkańcach</li>
                  <li>• Do dyspozycji domowników są dwie łazienki na piętrze i WC na parterze</li>
                  <li>• Dom Kasjopea oferuje 3 duże sypialnie oraz jedną małą sypialnię-gabinet</li>
                  <li>• <strong>PARTER: </strong> pokój dzienny z jadalnią 42,58 m², kuchnia 11,07 m², hol 12,72 m², sień 3,60 m², WC 1,98 m², schowek pod schodami 2,29 m², garaż 20,88 m², kotłownia 4,28 m²</li>
                  <li>• <strong>PIĘTRO: </strong> 2 małe sypialnie 15,23 m² i 15,72 m², duża sypialnia z garderobą i loggią 16,92 m², łazienka głównej sypialni 7,02 m², łazienka wspólna z pralnią (5,98 m² + 2,55 m²). hol 7,99 m², pokój-gabinet 7,28 m²</li>
                  <li>• Powierzchnia całkowita: 237,92 m²</li>
                  <li>• Powierzchnia użytkowa: 153,08 m²</li>
                  <li>• Wysokość domu z podmurówką: 8,55 m</li>
                  <li>• Szerokość budynku: 10,57 m</li>
                  <li>• Długość budynku: 14,94 m</li>
                  <li>• Minimalna szerokość działki: 16,57 m</li>
                  <li>• Minimalna długość działki: 22,94 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Modena147" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Helios157" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong> Kwartał <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong> pół roku <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong> jeden rok <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                    Koszt realizacji <span><h1><strong>494,671</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Kasjopea154.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Kasjopea154.png" alt="blog" /></p>
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

    <RelatedProjectsKasjopea154 />

    </>
    )
}

export default ProjectsDetailsOne;
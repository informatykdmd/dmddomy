import { Link } from 'react-router-dom';
import RelatedProjectsKasjopea7 from '../../elements/RelatedProjectsKasjopea7';
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
                    <ZoomableImage src="images/project/bl-01-750x430-Kasjopea7-1.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Kasjopea7-2.png" alt="Oferta" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Kasjopea7-3.png" alt="Oferta" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Kasjopea7-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Kasjopea 7: Nowoczesny Dom Jednorodzinny z Tradycją</h3>
              <p>
                Projekt Kasjopea 7, określany przez studio projektowe MG PROJEKT jako nowość, 
                jest niezwykle udaną siódmą iteracją tego wyjątkowego projektu. Chociaż nie 
                jest to zupełnie nowy projekt, to z każdą kolejną wersją zyskuje nowe walory, 
                dzięki wprawie zdobytej podczas licznych poprzednich realizacji. Mimo skromnych 
                rozmiarów, budynek oferuje niezwykły komfort dla nawet 7 osób, a zastosowane 
                innowacyjne rozwiązania sprawiają, że koszty budowy są stosunkowo niewielkie.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Mimo braku udostępnionych zdjęć nowych projektów Kasjopea 7, możemy z dumą 
                podkreślić nasze wieloletnie doświadczenie w budowie domów z rodziny Kasjopea. 
                Nasze ekipy z powodzeniem wznosiły domy Kasjopea 7 w różnych lokalizacjach, 
                takich jak Warszawa, Łomianki i Legionowo.
              </p>

              <span><strong>Nietechniczny Opis Domu Kasjopea 7</strong></span><br />
              <p>
                Piętrowy dom jednorodzinny Kasjopea 7 reprezentuje nowoczesne podejście do 
                architektury miejskiej, podkreślając jednocześnie efektywność kosztową. 
                Charakteryzuje go kompaktowa bryła, która ułatwia osiągnięcie doskonałych 
                właściwości energetycznych i przyspiesza proces budowy.<br />

                Dom Kasjopea 7 doskonale wpasowuje się w każdą działkę, oferując dwustanowiskowy 
                garaż i harmonijne połączenie z ogrodem dzięki tarasom i loggiom. Jego wyjątkowym 
                elementem są boniowania ułożone pasami oraz duże przeszklenia.</p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu cechuje charakterystyczny układ, z garażem i kotłownią umieszczonymi 
                z boku budynku, dostępnymi jedynie z sieni. Przy wejściu rozwija się przestronny 
                hol i salon z jadalnią, częściowo otwartym na obszerną kuchnię. Salon łączy się 
                z tarasem z podcieniem, stanowiąc idealne miejsce do relaksu.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Kształt prostokątnego piętra umożliwia optymalne rozmieszczenie sypialni, 
                maksymalizując ich przestrzeń. Główna sypialnia z loggią znajduje się nad 
                wejściem, podczas gdy dwie mniejsze sypialnie położone są po drugiej stronie 
                budynku, z balkonem łączącym je ze sobą.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Bloczki betonowe na fundamenty </li>
                  <li>• Pustaki porotherm 25, styropian i tynki mineralne na ściany zewnętrzne </li>
                  <li>• TERIVA – technologia stropów </li>
                  <li>• Tynki cienkowarstwowe na styropianie na elewacje </li>
                  <li>• Dachówki ceramiczne na dachu </li>
                </ul>
              <br />
              <h4><strong>Opis Domu Kasjopea 7</strong></h4>
                <ul>
                  <li>• Dom Kasjopea 7 jest budynkiem piętrowym z garażem dwustanowiskowym </li>
                  <li>• Projekt Kasjopea 7 przygotowano z myślą o 4-7 mieszkańcach </li>
                  <li>• 2 łazienki na piętrze, łazienka i WC na parterze </li>
                  <li>• 3 sypialnie </li>
                  <li>• Loggia i boniowania </li>
                  <li>• <strong>PARTER: </strong>pokój dzienny z jadalnią 47,51 m², kuchnia 15,00 m², hol 12,40 m², sień 3,60 m², WC 1,94 m², gabinet 11,55 m², łazienka 2,57 m², garaż 32,95 m², kotłownia 7,59 m² </li>
                  <li>• <strong>PIĘTRO: </strong>hol 7,99 m², 2 mniejsze sypialnie (15,71 m² + 14,75 m²), duża sypialnia z garderobą i łazienką (15,14 m² + 4,75 m² + 5,20 m²), łazienka wspólna 7,18 m², pralnia 2,90 m², pokój-gabinet 8,09 m² </li>
                  <li>• Powierzchnia całkowita: 237,92 m2 </li>
                  <li>• Powierzchnia użytkowa: 153,08 m2 </li>
                  <li>• Wysokość domu z podmurówką: 8,55 m </li>
                  <li>• Szerokość budynku: 10,57 m </li>
                  <li>• Długość budynku: 14,94 m </li>
                  <li>• Minimalna szerokość działki: 16,57 m </li>
                  <li>• Minimalna długość działki: 22,94 m </li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Helios157" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomzWidokiem3" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>602,056</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Kasjopea7.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Kasjopea7.png" alt="blog" /></p>
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

    <RelatedProjectsKasjopea7 />

    </>
    )
}

export default ProjectsDetailsOne;
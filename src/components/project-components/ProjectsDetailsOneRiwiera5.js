import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsRiwiera5 from '../../elements/RelatedProjectsRiwiera5';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Riwiera5-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Riwiera5-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Riwiera5-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Riwiera5-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Riwiera 5: Przestronność, Styl i Funkcjonalność dla Dużej Rodziny</h3>
              <p>
                Projekt domu Riwiera 5, opracowany przez renomowane biuro projektowe MG PROJEKT, 
                to idealne rozwiązanie dla rodzin liczących nawet sześć osób, które pragną przytulnego 
                domu, nie rezygnując z przestrzeni i atrakcyjnego wnętrza. Koszt budowy tego efektownego 
                budynku jest optymalny, zapewniając zadowolenie z efektów inwestycji.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom Riwiera 5 to rozwinięcie udanego projektu Riwiera, cieszącego się popularnością 
                w Warszawie i okolicach. Pomimo braku możliwości prezentacji konkretnych realizacji 
                ze względu na prywatność klientów, technologie wykorzystywane przy budowie tego domu 
                są sprawdzone i regularnie stosowane w różnych lokalizacjach.
              </p>
              
              <span><strong>Dom Riwiera 5 – Nietechniczny Opis</strong></span><br />
              <p>
                Budowa domu Riwiera 5, zaplanowana na planie litery T, oferuje większą wygodę niż 
                tradycyjne projekty. To przestronne mieszkanie dla pięcioosobowej rodziny, z opcją 
                dostosowania do potrzeb sześciu osób poprzez zlikwidowanie pustki nad salonem.
                <br />

                Charakterystyczną cechą domu Riwiera 5 jest nietypowa bryła, urozmaicona dwustanowiskowym 
                garażem. Plan domu sprawia, że doskonale komponuje się z działkami z dojazdem od południa. 
                Efektowna elewacja, z licznymi przeszkleniami, gzymsami, boniowaniami i okładzinami 
                z kamienia naturalnego, nadaje mu nowoczesny, stylowy wygląd.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Riwiera5-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Riwiera5-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu Riwiera 5 prezentuje klasyczny układ nowoczesnego budownictwa. Duży 
                salon z holem i przeszkleniem narożnym otwiera się na taras z podcieniem, a obok 
                znajduje się kuchnia z wyspą. Dodatkowo na parterze umieszczono gabinet, dostępny 
                z kuchni, dwustanowiskowy garaż, kotłownię i pomieszczenie gospodarcze.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro domu Riwiera 5 to przestronne sypialnie z dodatkowymi udogodnieniami. Schody 
                prowadzące na piętro otwierają się na antresolę nad salonem. Mniejsze sypialnie mają 
                dostęp do łazienki lub garderoby, a główna sypialnia posiada własną łazienkę, garderoby 
                i taras. To idealna przestrzeń do komfortowego życia rodziny.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Do zbudowania fundamentów użyte zostaną betonowe ławy i bloczki betonowe</li>
                  <li>• Ściany zewnętrzne powstaną z pustaków porotherm 25 ocieplonych styropianem i pokrytych tynkiem mineralnym</li>
                  <li>• Zastosowaną technologią stropu będzie TERIVA</li>
                  <li>• Na elewacjach znajdzie się tynk cienkowarstwowy i elementy estetyczne (okładziny)</li>
                  <li>• Przykrycie dachu będzie stanowiła dachówka ceramiczna</li>
                </ul>

              <br />
              <h4><strong>Opis Domu Riwiera 5</strong></h4>
                <ul>
                  <li>• Dom Riwiera 5 zapewni komfort nawet sześcioosobowej rodzinie</li>
                  <li>• Riwiera 5 jest domem piętrowym z dwustanowiskowym garażem</li>
                  <li>• Dom Riwiera 5 oferuje 3 lub 4 sypialnie zlokalizowane na piętrze oraz gabinet dający się adaptować na sypialnię</li>
                  <li>• <strong>PARTER:</strong> salon z jadalnią 38,86 m², kuchnia z wyspą kuchenną 17,43 m², hol 13,64 m², sień 4,87 m², WC 1,95 m², garaż 34,20 m², kotłownia z pomieszczeniem gospodarczym 7,45 m², gabinet 12,40 m²</li>
                  <li>• <strong>PIĘTRO:</strong> sypialnia z garderobą (15,21 m² + 2,71 m²), sypialnia z łazienką (15,46 m² + 8,93 m²), sypialnia z łazienką i dwiema garderobami (15,84 m² + 9,91 m² + 2×2,76 m²), hol-antresola 27,65 m², pralnia-suszarnia 6,71 m²</li>
                  <li>• Powierzchnia całkowita: 302,14 m²</li>
                  <li>• Powierzchnia użytkowa: 197,06 m²</li>
                  <li>• Wysokość domu z podmurówką: 9,49 m</li>
                  <li>• Szerokość budynku: 13,15 m</li>
                  <li>• Długość budynku: 16,08 m</li>
                  <li>• Minimalna szerokość działki: 20,05 m</li>
                  <li>• Minimalna długość działki: 24,08 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Turkus150" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Szafir181" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong> 3 miesiące <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong> pół roku <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong> jeden rok <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                    Koszt realizacji <span><h1><strong>627,107</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Riwiera5.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Riwiera5.png" alt="blog" /></p>
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

    <RelatedProjectsRiwiera5 />

    </>
    )
}

export default ProjectsDetailsOne;
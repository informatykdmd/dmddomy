import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsSydney from '../../elements/RelatedProjectsSydney';

const ProjectsDetailsOne = () => { 
    return(
    <>
    {/* Projects Section*/}
    <section className="single-portfolio-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12 p-b30">
              <div className="row">
              <div className="col-md-12">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-01-1920x1075-Sydney-1.png" alt="Thumb" />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-01-750x430-Sydney-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Sydney-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Sydney-3.png" alt="Thumb" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Sydney-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Sydney: Nowoczesna Elegancja i Funkcjonalność w Niskim Koszcie</h3>
              <p>
                Dom Sydney, stworzony przez renomowane biuro projektowe MG Projekt, to znakomity przykład, jak można zrealizować imponującą przestrzeń o dużej użyteczności przy jednoczesnym utrzymaniu niskiego kosztu budowy. Ten projekt, zrealizowany m.in. w Piastowie, Izabelinie, Starych Babicach i Konstancinie Jeziorna, oferuje willę miejską dla 4-6 osobowej rodziny, cechującą się nowoczesną bryłą i znakomitą energooszczędnością.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Budowa domu Sydney opiera się na sprawdzonych technologiach, a zrealizowane projekty w Piastowie, Izabelinie, Starych Babicach i Konstancinie Jeziorna potwierdzają skuteczność naszych praktyk. Niestety, z powodów prywatności, nasi klienci nie zezwolili na publikację zdjęć ich domów na stronie.
              </p>

              <span><strong>Dom Sydney – nietechniczny opis</strong></span><br />
              <p>
                Dom Sydney to willa miejska, gdzie efektywne wykorzystanie niewielkiej bryły budynku idzie w parze z dużą powierzchnią użytkową. Dzięki temu możliwa jest budowa na mniejszych działkach, minimalizując jednocześnie koszty. Wyjątkowy charakter budynku podkreślają duże przeszklenia, kolorystyka, daszki i okładziny ścian.
                <br />

                Dom Sydney to połączenie nowoczesnej elegancji, funkcjonalności i oszczędności, co sprawia, że jest to propozycja wyjątkowo atrakcyjna dla rodzin poszukujących kompleksowego rozwiązania.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter budynku to klasyczny układ, łączący kuchnię z jadalnią i tarasem. Kuchnia, choć częściowo otwarta, zachowuje swoją prywatność. Dodatkowo na parterze znajduje się gabinet, łazienka oraz garaż na dwa samochody.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro domu Sydney to strefa sypialniana. Dwie mniejsze sypialnie dzielą łazienkę, natomiast duża sypialnia posiada własną łazienkę i balkon. Dodatkowa sypialnia gościnna znajduje się naprzeciwko schodów.
              </p>
              <span><strong>Piwnica</strong></span><br />
              <p>              
                Przestronna piwnica wzbogaca funkcjonalność domu. Znajdują się tu strefy wypoczynkowe, pralnia, kotłownia, spiżarnia oraz pomieszczenie gospodarcze z WC.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Do budowy fundamentów używamy ław betonowych</li>
                  <li>• Ściany fundamentowe zbudujemy z bloczków betonowych</li>
                  <li>• W ścianach zewnętrznych umieścimy pustaki porotherm 25 i pokryjemy je styropianem wykończonym tynkiem mineralnym</li>
                  <li>• Zastosujemy stropy Teriva</li>
                  <li>• Elewacje wykonamy z tynków cienkowarstwowych</li>
                  <li>• Jako pokrycie dachu planujemy dachówki ceramiczne</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Sydney</strong></h4>
                <ul>
                  <li>• Willa miejska dla 4-6 osób</li>
                  <li>• Piętrowy dom z pełnym podpiwniczeniem</li>
                  <li>• Garaż na 2 samochody</li>
                  <li>• 4 sypialnie, 3 łazienki, WC</li>
                  <li>• <strong>PARTER:</strong> sień 6,38 m², hol 11,84 m², pokój dzienny z jadalnią 50,49 m², kuchnia 14,99 m², korytarz 2,31 m², gabinet 11,65 m², łazienka 3,93 m², garaż 34,22 m²</li>
                  <li>• <strong>PIĘTRO:</strong> dwie mniejsze sypialnie (13,02 m² + 12,66 m²) z garderobami (odpowiednio 2,16 m² + 1,89 m²), hol 9,89 m², sypialnia gościnna 9,66 m², duża sypialnia z łazienką i garderobą (15,84 m² + 7,85 m² + 7,78 m²), łazienka wspólna 9,87 m²</li>
                  <li>• <strong>PIWNICA:</strong> przestrzeń wypoczynkowa 50,54 m², korytarz 2,24 m², WC 2,63 m², pomieszczenie gospodarcze 10,69 m², spiżarnia 11,01 m², schowek 1,80 m², kotłownia 11,14 m², pralnia z suszarnią 7,00 m²</li>
                  <li>• Powierzchnia całkowita: 415,83 m²</li>
                  <li>• Powierzchnia użytkowa: 267,35 m²</li>
                  <li>• Wysokość domu z podmurówką: 8,90 m</li>
                  <li>• Szerokość budynku: 13,09 m</li>
                  <li>• Długość budynku: 14,40 m</li>
                  <li>• Minimalna szerokość działki: 20,09 m</li>
                  <li>• Minimalna długość działki: 22,40 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Topaz" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-SpokojnyZakatek" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong> około 3 miesiące <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong> około 6 miesięcy <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong> około 12 miesięcy <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                    Koszt realizacji <span><h1><strong>821,203</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Sydney.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-11-750x430-Sydney.png" alt="blog" /></p>
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

    <RelatedProjectsSydney />

    </>
    )
}

export default ProjectsDetailsOne;
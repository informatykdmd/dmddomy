import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsWillaFloryda from '../../elements/RelatedProjectsWillaFloryda';

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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaFloryda-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaFloryda-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaFloryda-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-b30">
              <div className="row">
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaFloryda-4.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaFloryda-5.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaFloryda-6.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaFloryda-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Floryda: Elegancja i Funkcjonalność dla Dużej Rodziny</h3>
              <p>
                Projekt domu Willa Floryda to imponująca propozycja dla rodzin liczących nawet siedem osób. Oferuje on doskonałe dopasowanie do większych działek, prezentując się jako budynek nowoczesny i niezwykle funkcjonalny. Pomimo imponujących rozmiarów, jesteśmy w stanie zrealizować budowę tego domu dla Państwa szybko i w atrakcyjnej cenie.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom Willa Floryda, idealny dla obszernych działek, jest jednym z nowszych projektów MG PROJEKT, jednak nasi specjaliści posiadają już doświadczenie w jego udanej budowie. Choć właściciele nieruchomości nie wyrazili zgody na wykorzystanie ich domów w celach promocyjnych, nasze doświadczenie w technologiach używanych przy Willi Floryda objęło również inne lokalizacje, takie jak Zielonka, Komorów czy Wawer w Warszawie.
              </p>

              <span><strong>Willa Floryda – nietechniczny opis</strong></span><br />
              <p>
                Koszt budowy domu Willa Floryda może być wyższy, ale efekt jest zaskakująco dostępny. To luksusowe rozwiązanie dla siedmioosobowej rodziny, z imponującą elewacją z okładzinami, przestronnym garażem na trzy samochody i wnętrzem oferującym duże, otwarte przestrzenie, liczne przeszklenia oraz komfortowe sypialnie na piętrze.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze dominuje przestronny salon z przeszkloną pustką nad nim, z wydzieloną częściowo jadalnią i kuchnią otwartą tylko na jadalnię. Parter obejmuje także obszerną przestrzeń magazynową, duży garaż na trzy samochody, pokój lub gabinet oraz tarasy z podcieniami.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze witają nas hol i antresola nad salonem, a także wydzielona przestrzeń pralni i pokój rekreacyjny. Cztery sypialnie to główna atrakcja, z dwoma posiadającymi własne garderoby i łazienki, a dwie dzielą jedną łazienkę. Charakterystycznym elementem domu jest taras z otworem na drzewo, dodając niepowtarzalnego uroku.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty – betonowe ławy + bloczki betonowe (ściany fundamentowe)</li>
                  <li>• Ściany zewnętrzne – gazobeton 24 cm + styropian + tynk cienkowarstwowy i okładziny</li>
                  <li>• Strop – monolit żelbetonowy</li>
                  <li>• Elewacje – okładziny elewacyjne: corian, HPL, kamień</li>
                  <li>• Dach – blacha aluminiowa na rąbek</li>
                </ul>

              <br />
              <h4><strong>Opis Domu Willa Floryda</strong></h4>
                <ul>
                  <li>• Dom dla 5-7 osób</li>
                  <li>• Garaż na 3 samochody</li>
                  <li>• 4 sypialnie, 4 łazienki, WC</li>
                  <li>• Duże puste przestrzenie</li>
                  <li>• <strong>PARTER:</strong> salon z holem m², jadalnia m², kuchnia z wyspą m², magazyn ze spiżarnią ( m² + m²), schody z korytarzem m², przedsionek z szatnią ( m² + m²), łazienka m², WC m², garaż m², kotłownia/pralnia m², pokój/gabinet m²</li>
                  <li>• <strong>PIĘTRO:</strong> główna sypialnia z łazienką i garderobą ( m² + m² + m²), druga sypialnia z łazienką i garderobą ( m² + m² + m²), sypialnia z garderobą ( m² + m²) sypialnia m², współdzielona łazienka m², pokój rekreacyjny m², hol-antresola m², pralnia m², schowek m²</li>
                  <li>• <strong>Powierzchnia całkowita:</strong> 563,34 m²</li>
                  <li>• <strong>Powierzchnia użytkowa:</strong> 363,71 m²</li>
                  <li>• <strong>Wysokość domu z podmurówką:</strong> 10,00 m</li>
                  <li>• <strong>Szerokość budynku:</strong> 23,79 m</li>
                  <li>• <strong>Długość budynku:</strong> 20,23 m</li>
                  <li>• <strong>Minimalna szerokość działki:</strong> 30,70 m</li>
                  <li>• <strong>Minimalna długość działki:</strong> 27,18 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaSloneczna" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaAnnaMaria" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>1,749,502</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-WillaFloryda.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-WillaFloryda.png" alt="blog" /></p>
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

    <RelatedProjectsWillaFloryda />

    </>
    )
}

export default ProjectsDetailsOne;
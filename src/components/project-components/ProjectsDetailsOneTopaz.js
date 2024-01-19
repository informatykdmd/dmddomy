import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
// import RelatedProjects from '../../elements/RelatedProjects';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Topaz-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Topaz-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Topaz-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-b30">
              <div className="row">
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-Topaz-4.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-Topaz-5.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-Topaz-6.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Topaz-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Topaz: Nowoczesność, Funkcjonalność i Energooszczędność</h3>
              <p>
                Dom Topaz, jedno z najbardziej rozpoznawalnych dzieł biura projektowego MG Projekt, to projekt, który cieszy się dużym uznaniem ze względu na swoją zwartą bryłę, fascynującą elewację i optymalny metraż. Doskonale sprawdza się dla rodzin liczących od 4 do 6 osób, oferując nie tylko funkcjonalność, ale także atrakcyjny wygląd. Budynek ten zdobył popularność dzięki osiągnięciu znacznej energooszczędności, nie rezygnując przy tym z przestrzeni i estetyki.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Nasze doświadczenie w budowie domu Topaz jest szerokie i obejmuje zrealizowane projekty m.in. w Latchorzewie – Starych Babicach, zachodniej Warszawie, Pruszkowie i Komorowie. Poniżej prezentujemy jedną z udanych realizacji w Latchorzewie.
              </p>

              <span><strong>Dom Topaz – nietechniczny opis</strong></span><br />
              <p>
                Dom Topaz reprezentuje nowoczesne rozwiązania dla rodzin poszukujących współczesnego wyglądu i funkcjonalności, jednocześnie ceniących klasyczną stylistykę. Jego foremna bryła na planie prostokąta z dwustanowiskowym garażem jest nie tylko łatwa w budowie, ale również umożliwia efektywne zagospodarowanie przestrzeni wewnątrz. Ciekawe okładziny elewacji, zwłaszcza przeszklenia narożne, nadają mu charakter i podmiejski urok. Zastosowane technologie gwarantują również doskonałe wyniki pod względem energooszczędności.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter to przede wszystkim otwarta przestrzeń, łącząca salon, hol i jadalnię, co nadaje wnętrzu jasność i przestronność. Kuchnia jest subtelnie oddzielona, podobnie jak gabinet, który stanowi pewne odseparowanie w salonie. Na przeciwnym końcu domu znajduje się dwustanowiskowy garaż z przylegającym pomieszczeniem gospodarczym.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze zaplanowano trzy sypialnie i dodatkową sypialnię gościnną. Dwie z mniejszych sypialni posiadają garderoby, a główna sypialnia dysponuje własną garderobą i łazienką. Na piętrze znajduje się także łazienka wspólna. Zarówno główna sypialnia, jak i jedna z mniejszych mają dostęp do prywatnych balkonów.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty – bloczki betonowe i ławy betonowe</li>
                  <li>• Ściany zewnętrzne – pustaki U220 ocieplane styropianem</li>
                  <li>• Elewacje – tynki mineralne cienkowarstwowe</li>
                  <li>• Strop – żelbet monolityczny</li>
                  <li>• Dach – dachówka</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Topaz</strong></h4>
                <ul>
                  <li>• Budynek piętrowy, energooszczędny</li>
                  <li>• Przeznaczony dla 4-6 domowników</li>
                  <li>• Nowoczesny układ pomieszczeń</li>
                  <li>• 3 łazienki, 3 sypialnie</li>
                  <li>• Wykusze, daszki, okładziny elewacji</li>
                  <li>• <strong>PARTER:</strong> pokój dzienny m², jadalnia m², kuchnia ze spiżarnią (m² + m²), sień m², hol m², łazienka m², gabinet m², garaż m², pomieszczenie gospodarcze m²</li>
                  <li>• <strong>PIĘTRO:</strong> hol m², 2 mniejsze sypialnie z garderobami (m² + m² oraz m² + m²), główna sypialnia z garderobą i łazienką (m² + m² + m²), łazienka wspólna m², sypialnia gościnna m²</li>
                  <li>• <strong>Powierzchnia całkowita:</strong> 332,36 m²</li>
                  <li>• <strong>Powierzchnia użytkowa:</strong> 223,26 m²</li>
                  <li>• <strong>Wysokość domu z podmurówką:</strong> 9,81 m</li>
                  <li>• <strong>Szerokość budynku:</strong> 13,30 m</li>
                  <li>• <strong>Długość budynku:</strong> 16,10 m</li>
                  <li>• <strong>Minimalna szerokość działki:</strong> 19,3 m</li>
                  <li>• <strong>Minimalna długość działki:</strong> 24,93 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaAnnaMaria" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Sydney" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong>+/- 3 miesiące <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong>+/- 6 miesięcy <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong>+/- 12 miesięcy <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                    Koszt realizacji <span><h1><strong>676,045 </strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Topaz.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Topaz.png" alt="blog" /></p>
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

    {/* <RelatedProjects /> */}

    </>
    )
}

export default ProjectsDetailsOne;
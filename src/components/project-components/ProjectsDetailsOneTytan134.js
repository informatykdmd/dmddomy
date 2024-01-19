import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsTytan134 from '../../elements/RelatedProjectsTytan134';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Tytan134-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Tytan134-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Tytan134-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Tytan134-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Tytan: Nowoczesna Elegancja dla Rodziny 4-5 Osobowej na Małej Działce</h3>
              <p>
                Projekt budowy Domu Tytan, autorstwa renomowanej pracowni MG PROJEKT, to doskonałe 
                rozwiązanie dla rodzin poszukujących wygodnego, przestronnego domu piętrowego, 
                który jednocześnie prezentuje się okazale, pomimo niewielkich rozmiarów działki. 
                Realizacja tego projektu zawsze przynosi udane efekty, zarówno pod względem 
                funkcjonalności, jak i atrakcyjności wizualnej.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Wyjątkową cechą Domu Tytan jest nie tylko jego niski koszt budowy, ale także możliwość 
                wzniesienia go na małych działkach. Mimo braku zgody właścicieli na prezentację 
                zrealizowanych domów, projekt Domu Tytan cieszył się popularnością w różnych 
                lokalizacjach, takich jak Łomianki, Klaudyn, Stare Babice i Izabelin.
              </p>
              
              <span><strong>Dom Tytan – Nietechniczny Opis</strong></span><br />
              <p>
                Dom Tytan to piętrowa rezydencja bez skosów, utrzymana w nowoczesnej stylistyce, doskonała 
                dla rodzin liczących do 5 osób. Z jednostanowiskowym garażem, kompaktową bryłą i 
                funkcjonalnym wnętrzem, Dom Tytan doskonale sprawdza się na małych działkach, zapewniając 
                przy tym wygodę i energooszczędność.<br />

                Budynek wyróżnia się poziomymi pasami elewacji, połączonymi z precyzyjnymi detalami 
                architektonicznymi. Okna narożne w salonie i sypialni dodają mu niepowtarzalnego uroku.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Tytan134-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Tytan134-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter Domu Tytan został zoptymalizowany, aby wykorzystać dostępną przestrzeń w sposób 
                efektywny. Po prawej stronie sieni znajduje się garaż z kotłownią oraz małe WC przy 
                schodach. Nowoczesny pokój dzienny jest połączony z holem i jadalnią, a półotwarta 
                kuchnia ze spiżarnią dodaje mu funkcjonalności. Z jadalni przechodzimy na taras 
                ogrodowy, tworząc spójne połączenie z otoczeniem.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze znajdują się dwie foremne sypialnie po prawej stronie holu, a na wprost 
                dodatkowy pokój, który można zaaranżować na gabinet lub małą sypialnię. Najbardziej 
                imponująca to duża sypialnia rodziców z własną łazienką i garderobą. Dodatkowo, 
                na piętrze znajduje się wspólna łazienka, spełniająca potrzeby wszystkich mieszkańców domu.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty domu tytan budujemy z betonowych ław, a ściany fundamentowe z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne wzniesiemy jako ściany murowane z pustaków porotherm 25, styropianu i tynku cienkowarstwowego</li>
                  <li>• Wykorzystamy strop typu TERIVA</li>
                  <li>• Elewacje wykonamy z tynków cienkowarstwowych</li>
                  <li>• Dach przykryjemy dachówką ceramiczną</li>
                </ul>

              <br />
              <h4><strong>Opis Domu Tytan</strong></h4>
                <ul>
                  <li>• Dom Tytan to propozycja dla 4-5 osób w gospodarstwie domowym</li>
                  <li>• Projekt domu Tytan przewiduje powstanie budynku piętrowego z jednostanowiskowym garażem</li>
                  <li>• W domu są dwie łazienki na piętrze oraz WC na parterze</li>
                  <li>• Tytan posiada trzy sypialnie oraz możliwość zaadaptowania jednego pomieszczenia na dodatkową sypialnię</li>
                  <li>• <strong>PARTER:</strong> pokój dzienny z jadalnią 32,36 m², półotwarta kuchnia 9,40 m² (+ spiżarnia 2,70 m²), hol 7,58 m², sień 3,280 m², WC 1,84 m², garaż 18,78 m², kotłownia 5,53 m²</li>
                  <li>• <strong>PIĘTRO:</strong> trzy sypialnie (16,82 m², 12,41 m², 11,78 m²), łazienka wspólna 6,26 m², łazienka głównej sypialni 5,39 m², garderoba głównej sypialni 10,37 m², hol 12,05 m², gabinet/sypialnia 8,14 m²</li>
                  <li>• Powierzchnia całkowita: 206,54 m²</li>
                  <li>• Powierzchnia użytkowa: 134,26 m²</li>
                  <li>• Wysokość domu z podmurówką: 8,40 m</li>
                  <li>• Szerokość budynku: 9,70 m</li>
                  <li>• Długość budynku: 11,56 m</li>
                  <li>• Minimalna szerokość działki: 16,70 m</li>
                  <li>• Minimalna długość działki: 19,56 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-willaParkowa160" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Turkus150" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>464,188</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Tytan134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Tytan134.png" alt="blog" /></p>
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

    <RelatedProjectsTytan134 />

    </>
    )
}

export default ProjectsDetailsOne;
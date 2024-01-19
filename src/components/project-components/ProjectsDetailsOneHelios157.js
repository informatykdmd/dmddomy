import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsHelios157 from '../../elements/RelatedProjectsHelios157';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Helios157-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Helios157-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Helios157-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Helios157-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Helios: Nowoczesna Elegancja i Funkcjonalność dla Rodzin</h3>
              <p>
                Inwestycja na lata - Dom Helios to uroczy, piętrowy dom o nowoczesnej architekturze, 
                stworzony z myślą o pięcioosobowych rodzinach. Charakteryzuje go nie tylko łatwość 
                i szybkość budowy, ale także duża funkcjonalność oraz przyjemna, nowoczesna estetyka, 
                harmonijnie wkomponowana w otoczenie. Nietypowe dla tego typu domów jest przewidziane 
                dwustanowiskowe miejsce parkingowe, co czyni Helios wyjątkowym.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom Helios, budowany w różnych dzielnicach Warszawy, m.in. Białołęka, Wawer, Ursynów 
                i Magdalenka, zdobył uznanie ze względu na swoją elastyczność w dostosowaniu do różnych 
                warunków działki. Pomimo braku prezentacji na stronie, bogate doświadczenie naszego 
                zespołu w budowie tego typu domów zapewnia pewność, że zastosowane rozwiązania są 
                sprawdzone i efektywne.
              </p>
              
              <span><strong>Dom Helios – Nietechniczny Opis</strong></span><br />
              <p>
                Dom Helios to harmoniczne połączenie nowoczesnej architektury z subtelną stylistyką, 
                stawiającą na unikalność bez minimalizmu. Zaprojektowany z myślą o rodzinach cztero- 
                i pięcioosobowych, ten piętrowy dom o regularnej bryle na planie prostokąta wyróżnia 
                się dwustanowiskowym garażem, wpływając jedynie nieznacznie na koszty budowy.
                <br />

                Detale architektoniczne, liczne okna oraz elewacja z cegły i drewna nadają domowi Helios 
                imponującą prezencję. Jego znakomite właściwości termoizolacyjne oraz sprawdzone technologie 
                budowlane gwarantują efektywność i trwałość.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Helios157-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Helios157-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze dominuje przestronny salon z jadalnią, połączony z nowocześnie zaaranżowaną 
                kuchnią, której część jest otwarta na jadalnię. W sieni znajduje się wejście do 
                dwustanowiskowego garażu oraz kotłownia. Dodatkowy pokój na parterze może pełnić 
                funkcję gabinetu lub sypialni, a obszerne WC zawiera także prysznic.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze znajdują się trzy duże sypialnie, z największą posiadającą własną garderobę 
                i łazienkę. Wspólna łazienka obsługuje pozostałe dwie sypialnie, a centralnie usytuowany 
                pokój z dużym oknem może pełnić rolę pokoju gościnnego. Funkcjonalność i elegancja są 
                kluczowe na tym poziomie domu Helios.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty powstaną z betonowych ław, a ściany fundamentowe wzniesiemy z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne wymurujemy z wykorzystaniem pustaków porotherm 25, które zostaną ocieplone styropianem i pokryte tynkiem cienkowarstwowym</li>
                  <li>• Użyjemy stropu typu TERIVA</li>
                  <li>• Na elewacje położymy tynki cienkowarstwowe</li>
                  <li>• Dach przykrywać będziemy dachówkami ceramicznymi</li>
                </ul>
              <br />
              <h4><strong>Opis domu Helios</strong></h4>
                <ul>
                  <li>• Helios to dom piętrowy z dwustanowiskowym garażem</li>
                  <li>• Projekt Helios jest rozwiązaniem dla rodziny czteroosobowej lub pięcioosnowowej</li>
                  <li>• Na piętrze domu Helios znajdują się 2 łazienki (wspólna i przynależna do głównej sypialni), a na parterze jest WC</li>
                  <li>• Helios posiada 3 duże sypialnie i dwa pomieszczenia dodatkowe, które także mogą być sypialniami</li>
                  <li>• <strong>PARTER:</strong> pokój dzienny z jadalnią 33,49 m², kuchnia 12,26 m², hol 8,97 m², sień 5,00 m², WC z natryskiem 3,67 m², pokój/gabinet 10.70 m², garaż 33,06 m², kotłownia 7,69 m²</li>
                  <li>• <strong>PIĘTRO:</strong> dwie mniejsze sypialnie 14,23 m² każda, sypialnia główna z garderobą i łazienką (16,66 m² + 4,07 m² + 7,68 m²), łazienka wspólna 9,24 m², hol 9,03 m², pokój 7,94 m²</li>
                  <li>• Powierzchnia całkowita: 259,08 m²</li>
                  <li>• Powierzchnia użytkowa: 157,19 m²</li>
                  <li>• Wysokość domu z podmurówką: 9,00 m</li>
                  <li>• Szerokość budynku: 12,02 m</li>
                  <li>• Długość budynku: 14,72 m</li>
                  <li>• Minimalna szerokość działki: 19,02 m</li>
                  <li>• Minimalna długość działki: 23,04 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Kasjopea154" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Kasjopea7" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>530,144 </strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Helios157.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Helios157.png" alt="blog" /></p>
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

    <RelatedProjectsHelios157 />

    </>
    )
}

export default ProjectsDetailsOne;
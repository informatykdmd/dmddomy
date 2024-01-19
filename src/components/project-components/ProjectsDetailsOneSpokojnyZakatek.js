import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsSpokojnyZakatek from '../../elements/RelatedProjectsSpokojnyZakatek';

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
                    <ZoomableImage src="images/project/bl-01-750x430-SpokojnyZakatek-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-SpokojnyZakatek-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-SpokojnyZakatek-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-SpokojnyZakatek-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Budowa Domu Spokojny Zakątek: Luksus i Przestronność dla Rodziny</h3>
              <p>
                Budowa domu Spokojny Zakątek to nie tylko praca dla naszych ekip budowlanych, ale również prawdziwa przyjemność, gdyż rezultat jest imponujący. Ta piękna, nowoczesna willa o powierzchni ponad 250 m² zachwyca swoją elegancją i funkcjonalnością, sprawiając, że to doskonały wybór dla nawet 6-osobowej rodziny.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Chociaż Spokojny Zakątek to projekt uznawany za nowość, opiera się na sprawdzonych technologiach, które stanowią fundament większości naszych domów. Z sukcesem zrealizowaliśmy budowę tego domu w lokalizacjach takich jak Bielany, Bemowo, Izabelin i Stare Babice.
              </p>

              <span><strong>Nietechniczny Opis Domu Kasjopea 7</strong></span><br />
              <p>
                Spokojny Zakątek to nowoczesna willa miejska, emanująca luksusem i rozłożystością. Przeznaczona dla rodziny 4-6 osobowej, cechuje się dwustanowiskowym garażem i nowoczesnym designem. Mimo dużej powierzchni, projekt ten nie jest rozłożysty, co przekłada się na doskonałe właściwości energooszczędne. Koszt budowy jest z kolei zminimalizowany dzięki efektywnemu wykorzystaniu przestrzeni wnętrza.
                <br />

                Dom Spokojny Zakątek to nie tylko miejsce do mieszkania, to prawdziwy projekt życiowy, który łączy w sobie nowoczesność, funkcjonalność i wyrafinowany styl.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu składa się z dwóch części. Po lewej stronie znajduje się gabinet, garaż z kotłownią i niewielka łazienka. Po prawej stronie od wejścia zlokalizowano salon otwarty na duży taras oraz kuchnię z dużą wyspą. Unikatowym elementem projektu jest osobny, zaciszny salon z wyjściem na taras.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze dominują foremne sypialnie, pozwalając na optymalne zagospodarowanie przestrzeni. Główna sypialnia to osobny apartament z własną łazienką i garderobą. Dodatkowo, z dala od sypialni, znajduje się pralnia prowadząca na strych-magazyn. Na tym poziomie jest także dodatkowa, przestronna łazienka o charakterze pokoju kąpielowego.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty i ściany fundamentowe z betonu – ławy oraz bloczki</li>
                  <li>• Ściany zewnętrzne z pustaków porotherm 25, ocieplane styropianem, przykryte tynkami mineralnymi</li>
                  <li>• Stropy monolityczne żelbetowe</li>
                  <li>• Elewacje z tynków cienkowarstwowych na izolacji ze styropianu</li>
                  <li>• Dach przykryty dachówką ceramiczną</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Spokojny Zakątek</strong></h4>
                <ul>
                  <li>• Luksusowa willa miejska dla 4-6 osobowej rodziny</li>
                  <li>• Foremna główna bryła plus dwie mniejsze bryły</li>
                  <li>• Garaż na 2 samochody</li>
                  <li>• 2 łazienki i 4 sypialnie</li>
                  <li>• <strong>PARTER: </strong> sień 8,32 m², hol 19,18 m², salon z jadalnią 50,89 m², kuchnia ze spiżarnią (22,67 m² + 3,44 m²), pokój rekreacyjny 25,30 m², pokój 12,41 m², łazienka 3,91 m², korytarz 6,73 m², garaż 52,05 m², kotłownia 16,20 m²</li>
                  <li>• <strong>PIĘTRO: </strong> trzy mniejsze sypialnie (15,81 m² + 14,59 m² + 14,47 m²) sypialnia z garderobą i łazienką (17,34 m², 4,39 m², 14,04 m²) łazienka wspólna 7,73 m², pralnia 4,39 m², strych 9,76 m²</li>
                  <li>• <strong>Powierzchnia całkowita: </strong> 393,35 m² + strych</li>
                  <li>• <strong>Powierzchnia użytkowa: </strong> 264,77 m² + strych</li>
                  <li>• <strong>Wysokość domu z podmurówką: </strong> 9,59 m</li>
                  <li>• <strong>Szerokość budynku: </strong> 23,28 m</li>
                  <li>• <strong>Długość budynku: </strong> 18,07 m</li>
                  <li>• <strong>Minimalna szerokość działki: </strong> 30,28 m</li>
                  <li>• <strong>Minimalna długość działki: </strong> 26,07 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Sydney" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-RezydencjaParkowa" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>914,317</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-SpokojnyZakatek.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-SpokojnyZakatek.png" alt="blog" /></p>
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

    <RelatedProjectsSpokojnyZakatek />

    </>
    )
}

export default ProjectsDetailsOne;
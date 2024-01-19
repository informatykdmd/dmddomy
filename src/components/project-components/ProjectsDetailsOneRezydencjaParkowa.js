import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsRezydencjaParkowa from '../../elements/RelatedProjectsRezydencjaParkowa';

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
                    <ZoomableImage src="images/project/bl-01-750x430-RezydencjaParkowa-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-RezydencjaParkowa-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-RezydencjaParkowa-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-RezydencjaParkowa-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Rezydencja Parkowa: Elegancja i Komfort na Dużej Działce</h3>
              <p>
                Budowa domu Rezydencja Parkowa to wyjątkowe wyzwanie, z którym odnajdujemy się doskonale. Ten reprezentacyjny budynek parterowy ze strychem do adaptacji został stworzony z myślą o klientach posiadających duże działki. Projekt Rezydencji Parkowej opiera się na standardowych technologiach, co gwarantuje nie tylko imponujący efekt, ale także płynną i bezproblemową realizację.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Odwaga stawiana przed nami podczas budowy Rezydencji Parkowej znalazła swoje rozwiązanie w miejscach takich jak Zielonki, Stare Babice i Legionowo. Nasza doświadczona ekipa doskonale radzi sobie z tego typu konstrukcjami, co przekłada się na optymalny koszt budowy.
              </p>

              <span><strong>Nietechniczny Opis Domu Kasjopea 7</strong></span><br />
              <p>
                Rezydencja Parkowa to piękna, rozłożysta willa podmiejska, stworzona z myślą o komforcie nawet sześcioosobowej rodziny. Z dworkowym stylem architektonicznym nawiązującym do polskiej i światowej architektury dworkowej, dom ten harmonizuje z otoczeniem. Oparcie projektu na nowoczesnym układzie wnętrza sprawia, że Rezydencja Parkowa jest miejscem, gdzie elegancja spotyka się z funkcjonalnością. Dwustanowiskowy garaż to kolejny atut tej nieruchomości.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Zaprojektowany na planie dwóch przenikających się prostokątów, parter Rezydencji Parkowej dzieli dom na trzy obszary: sypialniany, dzienny i gospodarczy. W strefie sypialnianej znajdują się przestronna sypialnia z łazienką i garderobą, dwie mniejsze sypialnie ze wspólną łazienką oraz taras. Drugą strefę stanowi ogromna przestrzeń pokoju dziennego połączonego z holem i jadalnią. Kuchnia, otwarta i wyposażona w wyspę kuchenną, stanowi serce domu. Garaż i pomieszczenia gospodarcze tworzą wydzieloną trzecią strefę.
              </p>
              <span><strong>Strych</strong></span><br />
              <p>              
                Strych Rezydencji Parkowej, mimo skosów, nadaje się do adaptacji, oferując dodatkową przestrzeń do dowolnego zagospodarowania. To miejsce, które daje możliwość stworzenia według własnych potrzeb i pomysłów.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty z betonowych ław</li>
                  <li>• Ściany fundamentowe z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne murowane z pustaków porotherm 25 (+ styropianem i tynk mineralny)</li>
                  <li>• Strop drewniany belkowy</li>
                  <li>• Tynki cienkowarstwowe na styropianie</li>
                  <li>• Dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis domu Rezydencja Parkowa</strong></h4>
                <ul>
                  <li>• Dom piętrowy z użytkowym poddaszem</li>
                  <li>• Propozycja dla 4-6 osób w rodzinie</li>
                  <li>• Garaż mieszczący 2 samochody</li>
                  <li>• 3 sypialnie + gabinet</li>
                  <li>• 3 łazienki</li>
                  <li>• <strong>PARTER: </strong> hol z pokojem dziennym, kuchnią i jadalnią połączone w jedną całość (15,18 m² + 64,34 m² + 28,91 m² + 19,85 m² = 128,28 m²), sień 8,16 m², łazienka wspólna 10,45 m², korytarz 9,19 m², dwie sypialnie (17,78 m² + 14,68 m²), sypialnia z łazienką i garderobą (34,74 m² + 14,36 m² + 6,93 m²), WC 2,66 m², garaż 42,60 m², kotłownia 9,10 m², magazyn 8,29 m², gabinet 11,68 m², spiżarnia 5,39 m²</li>
                  <li>• <strong>STRYCH: </strong> przestrzeń do adaptacji 66,86 m²</li>
                  <li>• Powierzchnia całkowita: 384,81 m2 + strych</li>
                  <li>• Powierzchnia użytkowa: 258,96 m2</li>
                  <li>• Wysokość domu z podmurówką: 7,68 m</li>
                  <li>• Szerokość budynku: 31,00 m</li>
                  <li>• Długość budynku: 21,52 m</li>
                  <li>• Minimalna szerokość działki: 38,00 m</li>
                  <li>• Minimalna długość działki: 29,52 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-SpokojnyZakatek" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-RezydencjaLesna" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>971,588</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-RezydencjaParkowa.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-RezydencjaParkowa.png" alt="blog" /></p>
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

    <RelatedProjectsRezydencjaParkowa />

    </>
    )
}

export default ProjectsDetailsOne;
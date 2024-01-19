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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaMalibu-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaMalibu-2.png" alt="Thumb" />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaMalibu-3.png" alt="Thumb" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaMalibu-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Budowa Domu Malibu: Harmonia Przestrzeni dla Dużej Rodziny</h3>
              <p>
                Budowa imponującej rezydencji podmiejskiej Malibu, choć z pozoru skomplikowana, opiera się na sprawdzonych technologiach, zastosowanych w licznych projektach tego rodzaju. Projekt, stworzony przez renomowaną firmę MG Projekt, wyróżnia się przestronnością i jest dedykowany nawet dużym rodzinom liczącym do 7 osób.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Nasza firma, DMD Domy i DMD Budownictwo, z powodzeniem zrealizowała budowę domu Malibu, utrzymując koszty w ramach wyznaczonych limitów. Nasze doświadczenie obejmuje budowę tego projektu w Janowie pod Warszawą, a także w innych lokalizacjach takich jak Stare Babice, Piaseczno, Lesznowola czy Komorów.
              </p>

              <span><strong>Dom Malibu – Nietechniczny Opis</strong></span><br />
              <p>
                Budowa domu Malibu przynosi nietypową konstrukcję, składającą się z trzech połączonych brył. Ten nietypowy układ umożliwia stworzenie efektownego wejścia, a wnętrze domu można efektywnie podzielić na różne strefy o różnych funkcjach. Dom Malibu zapewnia komfortowe warunki dla rodzin o liczbie członków od 4 do 7, a dodatkowo oferuje dwustanowiskowy garaż.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Po wejściu witają nas szatnia i hol, prowadzące do schodów. Po lewej stronie znajduje się duży salon, przechodzący płynnie w oranżerię, otwarty na obszerny taras. Kuchnia z jadalnią, także z dostępem do tarasu, zajmuje nieco oddzielone miejsce. Po przeciwnej stronie znajdują się gabinet, niewielka łazienka oraz kotłownia. Po prawej stronie umieszczony jest garaż na dwa auta i pomieszczenie gospodarcze.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro zostało zorganizowane wokół centralnie umieszczonego holu. Kształt kondygnacji, będący prostokątem, maksymalizuje użyteczność rozmieszczonych tu 4 sypialni. Na piętrze znajduje się także taras nad oranżerią i obszerne pomieszczenie do dowolnej aranżacji nad garażem.
              </p>
              <span><strong>Strych</strong></span><br />
              <p>              
                Strych to przestronne pomieszczenie ze skosami, które może znaleźć zastosowanie jako magazyn lub być zaadaptowane w inny, funkcjonalny sposób. Dom Malibu to harmonijne połączenie nowoczesności i przestronności, tworząc wyjątkowe miejsce dla każdej rodziny.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Betonowe ławy wykorzystujemy do budowy fundamentów</li>
                  <li>• Z betonowych bloczków wzniesiemy ściany fundamentowe</li>
                  <li>• Pustaki porotherm 25 wykorzystamy jako rdzeń ścian zewnętrznych</li>
                  <li>• Teriva to wykorzystywany przez nas system stropów</li>
                  <li>• Tynki mineralne cienkowarstwowe ocieplone styropianem posłużą nam do wykonania elewacji</li>
                  <li>• Dachówka ceramiczna będzie pokrywała dach</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Malibu</strong></h4>
                <ul>
                  <li>• Propozycja dla 4-7 osobowej rodziny</li>
                  <li>• Budynek piętrowy składający się z 3 połączonych brył</li>
                  <li>• Architektura inspirowana śródziemnomorskimi willami</li>
                  <li>• Garaż z miejscem na 2 samochody</li>
                  <li>• 2 łazienki</li>
                  <li>• 4 sypialnie</li>
                  <li>• <strong>PARTER:</strong> salon 49,16 m², oranżeria 15,69 m², jadalnia 21,56 m², kuchnia z przejściem i spiżarnią (16,58 m² + 5,89 m² + 1,63 m²), hol 26,13 m², gabinet 14,72 m², sień 9,59 m², łazienka 5,45 m², kotłownia 7,79 m², garaż 37,20 m², pomieszczenie gospodarcze 10.80 m²</li>
                  <li>• <strong>PIĘTRO:</strong> hol 19,02 m², mała sypialnia 12,35 kwa, sypialnia z garderobą (15,16 m² + 5,93 m²), sypialnia ze strychem nieużytkowym (14,44 m² + 3,34 m²), główna sypialnia z łazienka i garderobą (17,73 m² + 13,38 m² + 5,23 m²), łazienka wspólna 6,55 m², pralnia 5,25 m², przestrzeń rekreacyjna nad garażem 18,21 m²</li>
                  <li>• <strong>STRYCH:</strong> przestrzeń użytkowa 33,61 m²</li>
                  <li>• Powierzchnia całkowita: 438,43 m2</li>
                  <li>• Powierzchnia użytkowa: 315,88 m2</li>
                  <li>• Wysokość domu z podmurówką: 10,34 m</li>
                  <li>• Szerokość budynku: 18,16 m</li>
                  <li>• Długość budynku: 24,60 m</li>
                  <li>• Minimalna szerokość działki: 26,16 m</li>
                  <li>• Minimalna długość działki: 32,60 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomOtwarty" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomzWidokiem4" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>949,681</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-WillaMalibu.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-11-750x430-WillaMalibu.png" alt="blog" /></p>
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
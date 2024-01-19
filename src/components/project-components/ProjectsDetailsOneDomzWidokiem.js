import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsDomzWidokiem from '../../elements/RelatedProjectsDomzWidokiem';

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
                    <ZoomableImage src="images/project/bl-01-750x430-DomzWidokiem-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomzWidokiem-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomzWidokiem-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomzWidokiem-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom z Widokiem: Nowoczesna Willa z Imponującym Widokiem</h3>
              <p>
                Projekt Domu z Widokiem, jednego z największych hitów pracowni projektowej MG Projekt, stanowi wyjątkowe wyzwanie dla naszych ekip budowlanych. Budowa tego nowoczesnego domu jest stosunkowo prosta, a efekt końcowy imponuje swoim unikalnym designem.
                <br />

                Projekt Domu z Widokiem to nie tylko imponująca willa, ale także efektowna kompozycja architektoniczna, zaspokajająca oczekiwania klientów poszukujących nowoczesnej, funkcjonalnej i designerskiej przestrzeni mieszkalnej.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Koszt budowy domu Dom z Widokiem przyciąga wielu inwestorów, co sprawia, że mamy duże doświadczenie w różnych wersjach tego projektu. Przykładowe realizacje Domu z Widokiem obejmują wersję 4 w Izabelinie, a także wersję 3 w Piasecznie i Piastowie. Niestety, ze względu na prywatność klientów, nie uzyskaliśmy zgody na prezentację gotowych realizacji podstawowego projektu.
              </p>

              <span><strong>Dom z Widokiem – Nietechniczny Opis</strong></span><br />
              <p>
                Dom z Widokiem, będący nowoczesną willą miejską, zazwyczaj przeznaczony jest dla rodzin liczących 4-6 członków. Projekt ten doskonale radzi sobie z niekorzystnym ustawieniem działki względem stron świata.
                <br />

                Rezydencję cechuje piętrowa konstrukcja z garażem na dwa samochody, otwarte i zadaszone tarasy oraz liczne przeszklenia. Charakterystycznymi elementami są narożne okna, a nietypowy układ pomieszczeń sprawia, że bryła przybiera kształt litery „T”.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze dominuje duży pokój dzienny, który otwiera się na taras. Kuchnia z jadalnią są umieszczone na boku budynku. W okolicach schodów znajdują się łazienka i kotłownia, za nimi znajduje się gabinet. Oddzielony od reszty kondygnacji jest garaż na dwa samochody i pomieszczenie gospodarcze.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Centralnym punktem piętra jest duży hol z antresolą nad salonem. Z tyłu budynku znajdują się dwie sypialnie, a z przodu sypialnia główna z własną łazienką i garderobą. Łazienka wspólna znajduje się na strychu nad garażem, do którego wchodzi się z pomieszczenia gospodarczego na parterze.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty budujemy z betonowych ław. Do stworzenia ścian fundamentowych wykorzystujemy bloczki betonowe</li>
                  <li>• Do budowy ścian zewnętrznych posłużą pustaki porotherm 25 ocieplone styropianem</li>
                  <li>• Strop parteru i piętra powstanie jako monolit żelbetowy</li>
                  <li>• Na elewacje położymy tynki cienkowarstwowe na styropianie</li>
                  <li>• Na dachu położymy dachówkę ceramiczną</li>
                </ul>
              <br />
              <h4><strong>Opis Domu z Widokiem</strong></h4>
                <ul>
                  <li>• Dom z Widokiem to nowoczesny dom piętrowy.</li>
                  <li>• Zaprojektowany został dla 4-6 osób.</li>
                  <li>• Posiada garaż z dwoma stanowiskami.</li>
                  <li>• Znajdują się w nim 3 sypialnie.</li>
                  <li>• Posiada 3 duże łazienki.</li>
                  <li>• Posiada otwarte przestrzenie nad salonem i garażem.</li>
                  <li>• <strong>PARTER:</strong> pokój dzienny 54,49 m², jadalnia 19,98 m², kuchnia 19,61 m², hol ze spiżarnią (24,68 m² + 2,74 m²), gabinet 14,35 m², łazienka 7,59 m², kotłownia 9,60 m², sień z szatnią (4,24 m² + 3,14 m²), garaż 42,00 m², pomieszczenie gospodarcze 15,40 m².</li>
                  <li>• <strong>PIĘTRO:</strong> hol 8,51 m², antresola 23,47 m², dwie sypialnie 16,67 m² + 16,54 m², łazienka wspólna 11,37 m², sypialnia z łazienką i garderobą (17,66 m² + 18,18 m² + 6,22 m²), strych nad garażem 16,16 m².</li>
                  <li>• Powierzchnia całkowita: 432,48 m².</li>
                  <li>• Powierzchnia użytkowa: 269,44 m².</li>
                  <li>• Wysokość domu z podmurówką: 9,44 m.</li>
                  <li>• Szerokość budynku: 21,20 m.</li>
                  <li>• Długość budynku: 17,71 m.</li>
                  <li>• Minimalna szerokość działki: 30,30 m.</li>
                  <li>• Minimalna długość działki: 25,71 m.</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomzWidokiem4" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaSloneczna" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>929,702</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-DomzWidokiem.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-DomzWidokiem.png" alt="blog" /></p>
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

    <RelatedProjectsDomzWidokiem />

    </>
    )
}

export default ProjectsDetailsOne;
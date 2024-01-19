import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsRezydencjaLesna from '../../elements/RelatedProjectsRezydencjaLesna';

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
                    <ZoomableImage src="images/project/bl-01-750x430-RezydencjaLesna-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-RezydencjaLesna-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-RezydencjaLesna-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-RezydencjaLesna-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Rezydencja Leśna: Harmonia Nowoczesności i Komfortu</h3>
              <p>
                Przyjemność z budowy domu Rezydencja Leśna stała się dla nas codziennością, a doświadczenie zdobyte przy kilku już zrealizowanych projektach tego typu pozwala nam na sprawną i efektywną pracę. Dom ten, stworzony według projektu renomowanej pracowni MG PROJEKT, to nowoczesna rezydencja o średnim stopniu trudności w budowie.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Pragniemy podzielić się z Państwem zrealizowanymi projektami Rezydencji Leśnej, w tym dwoma domami w Starych Babicach i Pruszkowie. Nasze doświadczenie obejmuje także budowę podobnych domów w Warszawie i okolicach, takich jak Izabelin, Piastów, Zielonki, Klaudyn, Chotomów. Jako firma DMD Domy i DMD Budownictwo, rekomendowana przez MG Projekt, z dumą wykonujemy innowacyjne projekty.
              </p>

              <span><strong>Rezydencja Leśna – nietechniczny opis</strong></span><br />
              <p>
                Rezydencja Leśna to przestronny, piętrowy dom, idealny dla rodziny 4-6 osobowej. Jego nowoczesna architektura łączy komfort z funkcjonalnością. Z czterospadowym dachem i podziałem elewacji na poziome pasy, dom emanuje elegancją. Front budynku prezentuje się reprezentacyjnie, podczas gdy tył zaskakuje rozbudowanymi załamaniami i dobudówkami.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Wnętrze Rezydencji Leśnej to harmonijne połączenie komfortu i designu. Na parterze przestronny salon z kominkiem, jadalnią i holem zajmuje ponad 90 m2. Duże przeszklenia łączą salon z tarasem, a otwarta kuchnia z spiżarnią stanowi atrakcyjne centrum domu. Dodatkowo na parterze znajduje się gabinet, dwustanowiskowy garaż, kotłownia oraz wc.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro to oaza prywatności, z apartamentem rodziców dysponującym osobną łazienką i garderobą oraz obszernym balkonem. Pozostała przestrzeń to dwie łazienki, pralnia oraz trzy pokoje, z których dwa mają ponad 20 m2, a jeden 10 m2. Prawie 18-metrowy hol otwiera wiele możliwości aranżacyjnych.
              </p>
              <span><strong>Strych</strong></span><br />
              <p>              
                Nad piętrem znajduje się strych, który można zaadaptować na poddasze użytkowe. To dodatkowa przestrzeń, idealna na pokój rekreacyjny, pokój zabaw dla dzieci czy gościnny, a także wyposażona w toaletę. Rezydencja Leśna to nie tylko dom – to miejsce, gdzie elegancja spotyka się z funkcjonalnością, tworząc wyjątkowy zakątek dla całej rodziny.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty budujemy z betonowych ław a ściany fundamentowe z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne są murowane z pustaków POROTHERM 25 oraz styropianu i tynku cienkowarstwowego</li>
                  <li>• Stropy są monolityczne wylewane żelbetowe</li>
                  <li>• Elewacja to tynk cienkowarstwowy na styropianie</li>
                  <li>• Dach – dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis Budynku Rezydencja Leśna</strong></h4>
                <ul>
                  <li>• Dom dla 4-6 osób</li>
                  <li>• Parter, piętro, poddasze: 5 łazienek, 4 sypialnie, garaż na 2 samochody</li>
                  <li>• <strong>PARTER: </strong> salon + jadalnia 60,2 m², kuchnia 17,8 m², sień i hol 20 m², pokój 10 m², pomieszczenie gospodarcze 10,3 m², łazienka 2,7 m²</li>
                  <li>• <strong>PIĘTRO: </strong> sypialnie 29,5 m², 21 m² oraz 21,7 m², pokój 10 m², hol 17,7 m², łazienki: 12,3 m², 8,9 m², 7,5 m², suszarnia 11,4 m², garderoba: 9,5 m²</li>
                  <li>• <strong>PODDASZE: </strong> około 62 m² oraz łazienka 2 m²</li>
                  <li>• Powierzchnia całkowita: 441 m²</li>
                  <li>• Powierzchnia użytkowa: 323 m²</li>
                  <li>• Wysokość domu: 10 m</li>
                  <li>• Szerokość budynku: 15,2 m</li>
                  <li>• Długość budynku: 17,1 m</li>
                  <li>• Minimalna szerokość działki: 22,2 m</li>
                  <li>• Minimalna długość działki: 27,1 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-RezydencjaParkowa" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomOtwarty" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>786,174</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-RezydencjaLesna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-11-750x430-RezydencjaLesna.png" alt="blog" /></p>
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

    <RelatedProjectsRezydencjaLesna />

    </>
    )
}

export default ProjectsDetailsOne;
import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsWillaAnnaMaria from '../../elements/RelatedProjectsWillaAnnaMaria';

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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaAnnaMaria-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaAnnaMaria-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaAnnaMaria-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-12 p-b30">
              <div className="row">
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaAnnaMaria-4.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaAnnaMaria-5.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaAnnaMaria-6.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaAnnaMaria-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Anna Maria: Klasyczna Elegancja i Nowoczesna Funkcjonalność</h3>
              <p>
                Projekt domu Willa Anna Maria, stworzony przez renomowane biuro projektowe MG PROJEKT, to doskonała propozycja dla rodzin liczących od 4 do 6 osób, pragnących zamieszkać w przestronnym domu o klasycznej formie. Ten wygodny dom znakomicie prezentuje się na większych działkach, a koszt jego budowy w wersji ekonomicznej jest optymalny.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Popularny projekt Willa Anna Maria został z powodzeniem zrealizowany przez nasze doświadczone zespoły budowlane w różnych lokalizacjach, takich jak Chotomów, Piaseczno czy Warszawa Białołęka. Niestety, z powodu decyzji właścicieli, nie możemy zaprezentować efektów naszych prac, jednak budowa tego domu opiera się na nowoczesnych technologiach przy zachowaniu klasycznej formy budynku.
              </p>

              <span><strong>Willa Anna Maria – nietechniczny opis</strong></span><br />
              <p>
                Willa Anna Maria to imponujący, piętrowy dom o stylizowanej na klasyczne rezydencje podmiejskie bryle, z zastosowaniem nowoczesnych technologii konstrukcyjnych i nowatorskim układem pomieszczeń. Dwuspadowy dach, wykusze, podcienia i zadaszone tarasy nadają budynkowi charakter, a duże okna otwierają wnętrze na otaczający ogród.
              </p>
              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu Willa Anna Maria został podzielony na trzy obszary: przestronny salon z kuchnią i jadalnią, garaż z kotłownią oraz przyległy pokój i gabinet. Salon z jadalnią tworzą otwartą przestrzeń, harmonijnie wpisaną w obszerny taras otaczający dom. Kuchnia posiada wyspę, a przy schodach znajduje się miejsce na łazienkę.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro zaprojektowano wzdłuż długiego holu z antresolą nad jadalnią. Trzy sypialnie, łazienka połączona z sauną i osobna pralnia to główne elementy na tym poziomie. Skosy dachowe dodają uroku, nie wpływając znacząco na funkcjonalność pomieszczeń. Dodatkowym atutem jest pokój rekreacyjny.
              </p>
              <span><strong>Piwnica</strong></span><br />
              <p>              
                Budynek został także wyposażony w niewielką piwnicę, dodatkową przestrzeń do wykorzystania.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty – z betonowych ław; ściany fundamentowe z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne – ściany murowane z pustaków porotherm 25, ocieplane styropianem i zabezpieczone tynkiem mineralnym</li>
                  <li>• Strop – wylewany, monolit żelbetowy</li>
                  <li>• Elewacje – tynki cienkowarstwowe na styropianie</li>
                  <li>• Dach – dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Willa Anna Maria</strong></h4>
                <ul>
                  <li>• Dom dla 4-6 osób</li>
                  <li>• Garaż z miejscem na 2 samochody</li>
                  <li>• Parter i w pełni użytkowe piętro</li>
                  <li>• Aż 6 pokoi mogących pełnić rolę sypialni</li>
                  <li>• 3 łazienki</li>
                  <li>• <strong>PARTER: </strong> salon z jadalnią 59,89 m², kuchnia z wyspą 15,78 m², spiżarnia 1,56 m², sień 5,79 m², hol 21,39 m², łazienka 4,08 m², garaż 35,27 m², kotłownia 8,39 m², pokój 12,60 m², gabinet 15,04 m²</li>
                  <li>• <strong>PIĘTRO: </strong> dwie sypialnie (16,36 m² + 13,30 m²), sypialnia główna z łazienką i garderobą (19,90 m² + 12,87 m² + 8,40 m²), współdzielona łazienka z sauną (8,66 m² + 4,09 m²), pralnia 8,44 m², pokój rekreacyjny 33,45 m²</li>
                  
                  <li>• Powierzchnia całkowita: 406,91 m² + piwnica</li>
                  <li>• Powierzchnia użytkowa: 288,17 m² + piwnica</li>
                  <li>• Wysokość domu z podmurówką: 9,54 m</li>
                  <li>• Szerokość budynku: 18,58 m</li>
                  <li>• Długość budynku: 16,59 m</li>
                  <li>• Minimalna szerokość działki: 25,58 m</li>
                  <li>• Minimalna długość działki: 24,59 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaFloryda" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Topaz" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>959,491</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-WillaAnnaMaria.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-11-750x430-WillaAnnaMaria.png" alt="blog" /></p>
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

    <RelatedProjectsWillaAnnaMaria />

    </>
    )
}

export default ProjectsDetailsOne;
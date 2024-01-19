import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsWillaSloneczna from '../../elements/RelatedProjectsWillaSloneczna';

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
                    <ZoomableImage src="images/project/bl-01-750x430-WillaSloneczna-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-WillaSloneczna-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-WillaSloneczna-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 p-b30">
              <div className="row">
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaSloneczna-4.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaSloneczna-5.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-00-750x430-WillaSloneczna-6.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-WillaSloneczna-0.png" alt="Thumb" />
              </div>
            </div>
            
            <div className="col-md-8 det-content">
              <h3>Willa Słoneczna: Nowoczesny Design i Funkcjonalność dla Twojej Rodziny</h3>
              <p>
                Willa Słoneczna to wyjątkowy dom jednorodzinny stworzony z myślą o 4-6-osobowej rodzinie. Wyróżnia go nowoczesny design, a przede wszystkim płaski dach, co stanowi unikalny element wśród projektów firmy MG PROJEKT. Ten funkcjonalny budynek został zaprojektowany z myślą o efektywnym wykorzystaniu naturalnego nasłonecznienia, gwarantując jednocześnie maksymalną energooszczędność.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Budowa domu Willa Słoneczna to wyzwanie związane z jego zwartej bryłą, jednak nasz zespół ma bogate doświadczenie w wznoszeniu tego projektu. Pomimo braku możliwości prezentacji konkretnych realizacji, domy Willa Słoneczna powstały już w Warszawie i okolicach, w miejscowościach takich jak Bemowo czy Stare Babice.
              </p>

              <span><strong>Willa Słoneczna - Nietechniczny Opis </strong></span><br />
              <p>
                Willa Słoneczna, dedykowana rodzinom 4-6-osobowym, prezentuje się okazale dzięki swojej zwartej bryle i nowoczesnemu układowi. Charakterystyczną cechą frontowej elewacji są niewielkie okna, podczas gdy ogrodowa elewacja niemal w całości składa się z przeszkleń, zapewniając wnętrzu obfitą ilość naturalnego światła. Płaski dach i dwustanowiskowy garaż nadają projektowi nowoczesny charakter.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Przestrzenny hol prowadzi do salonu, jadalni i kuchni, tworząc otwartą i funkcjonalną strefę dzienną. Ściana salonu od strony ogrodu jest niemal w pełni przeszklona, łącząc wnętrze z otoczeniem. Na parterze znajduje się również dodatkowy pokój, kuchnia z wyspą i spiżarnią, a także łazienka. Garaż z pomieszczeniem gospodarczym jest dostępny z holu.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze znajdują się trzy sypialnie, z główną sypialnią posiadającą garderobę i przestronną łazienkę. Mniejszy pokój może pełnić funkcję dodatkowej sypialni, a centralny hol prowadzi na bardzo duży taras, dodatkowo zwiększający komfort przestrzeni.
              </p>
              <span><strong>Piwnica</strong></span><br />
              <p>              
                W piwnicy, poza magazynem i schowkiem, znajduje się własne Spa z pokojem kąpielowym, jacuzzi, sauną oraz dodatkową łazienką, tworząc oazę relaksu podczas codziennego życia.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundament: ławy i ściany betonowe</li>
                  <li>• Ściany zewnętrzne: pustaki porotherm 25 + styropian + tynk</li>
                  <li>• Strop: monolityczny</li>
                  <li>• Elewacje: styropian + tynk cienkowarstwowy</li>
                  <li>• Dach: papa termozgrzewalna</li>
                </ul>

              <br />
              <h4><strong>Opis Domu Willa Słoneczna</strong></h4>
                <ul>
                  <li>• Dom piętrowy</li>
                  <li>• Projekt dla 4-6 osób</li>
                  <li>• Dwustanowiskowy garaż</li>
                  <li>• 4 sypialnie + gabinet</li>
                  <li>• 4 łazienki</li>
                  <li>• <strong>PARTER: </strong> salon z jadalnią 57,68 m², kuchnia + spiżarnia 22,12 m², gabinet 11,74 m², sień + szatnia 6,04 m², hol 20,51 m², garaż 34,80 m², pomieszczenie gospodarcze 10,80 m², łazienka 3,74 m², garderoba/korytarz 3,29 m²</li>
                  <li>• <strong>PIĘTRO: </strong> hol 14,57 m², pokój 9,57 m², główna sypialnia z łazienką i garderobą (16,07 m² + 9,08 m² + 5,38 m²), dwie sypialnie (19,69 m² + 19,11 m²), łazienka (5,30 m²)</li>
                  <li>• <strong>PIWNICA: </strong> domowe spa + sauna (19,42 m² + 3,57 m²), łazienka 3,39 m², schowek i magazyn (2,45 m² i 2,59 m²)</li>
                  <li>• Powierzchnia całkowita: 402,25 m²</li>
                  <li>• Powierzchnia użytkowa: 223,89 m² + piwnica</li>
                  <li>• Wysokość domu z podmurówką: 7,51 m</li>
                  <li>• Szerokość budynku: 16 m</li>
                  <li>• Długość budynku: 17,65 m</li>
                  <li>• Minimalna szerokość działki: 24 m</li>
                  <li>• Minimalna długość działki: 25,65 m</li>
                </ul>

              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomzWidokiem" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaFloryda" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>954,810</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-WillaSloneczna.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-WillaSloneczna.png" alt="blog" /></p>
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

    <RelatedProjectsWillaSloneczna />

    </>
    )
}

export default ProjectsDetailsOne;
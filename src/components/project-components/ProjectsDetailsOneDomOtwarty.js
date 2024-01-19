import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsDomOtwarty  from '../../elements/RelatedProjectsDomOtwarty';

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
                    <ZoomableImage src="images/project/bl-01-750x430-DomOtwarty-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-DomOtwarty-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-DomOtwarty-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomOtwarty-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Otwarty: Nowoczesna Przestrzeń dla Rodziny</h3>
              <p>
                Budowa domu Dom Otwarty stanowi dla nas fascynujące wyzwanie, bowiem projekt ten reprezentuje nowoczesną konstrukcję parterową z poddaszem, stworzoną z myślą o sześcioosobowej rodzinie. Autorem tego innowacyjnego projektu jest renomowana firma MG Projekt. Pomimo nowoczesnych rozwiązań, koszt budowy tego domu jest stosunkowo niewielki, co sprawia, że jest to doskonała inwestycja w komfortowe i funkcjonalne miejsce zamieszkania.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Chociaż nie możemy podzielić się fotografiami z projektów Domu Otwartego ze względu na brak zgody właścicieli, to z dumą informujemy, że zrealizowaliśmy ten projekt w lokalizacjach takich jak Targówek, Rembertów i Legionowo. Nasza firma, DMD Domy i DMD Budownictwo, zyskała uznanie jako solidny wykonawca, prowadzący budowy zgodnie z najnowszymi trendami i standardami branżowymi.
              </p>

              <span><strong>Dom Otwarty – nietechniczny opis</strong></span><br />
              <p>
                Projekt Domu Otwartego charakteryzuje się foremną bryłą, wyróżniającą się dwustanowiskowym garażem. Jest to jednorodzinny dom parterowy z pełni użytkowym poddaszem, co niesie ze sobą obecność skosów, które jednak nie kolidują z funkcjonalnością pomieszczeń. Zaplanowany dla 4-6 osób, Dom Otwarty wyróżnia się efektownym designem, wszechobecnymi przeszkleniami oraz układem pomieszczeń, maksymalizującym wykorzystanie każdego metra kwadratowego. Kompaktowa bryła i zastosowane technologie gwarantują wysoką energooszczędność oraz sprawną i szybką budowę.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Centralnym punktem parteru jest obszerny salon z jadalnią, dominujący wszechobecne przeszklenia. Kuchnia, otwarta na jadalnię, tworzy funkcjonalną przestrzeń. Część gospodarcza obejmuje spiżarnię, kotłownię, toaletę i garaż, zlokalizowane przed schodami.
              </p>
              <span><strong>Poddasze</strong></span><br />
              <p>              
                Na poddaszu znajdują się dwie mniejsze sypialnie, sypialnia główna z garderobą i łazienką. Dodatkowo, na tej kondygnacji znalazły miejsce dodatkowy pokój, łazienka wspólna i pralnia.
              </p>
              <span><strong>Piwnica</strong></span><br />
              <p>              
                Piwnica to przestrzeń z małym WC oraz jednym dużym pomieszczeniem, które można dowolnie zaadaptować, tworząc np. domowe spa czy niewielką siłownię. W Domu Otwartym, każdy zakątek jest potencjalną strefą komfortu i funkcjonalności.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty – betonowe ławy</li>
                  <li>• Ściany fundamentowe – bloczki betonowe</li>
                  <li>• Ściany zewnętrzne – pustaki porotherm 25 ocieplone styropianem</li>
                  <li>• Stropy – Teriva</li>
                  <li>• Elewacje – tynki mineralne cienkowarstwowe ocieplone styropianem</li>
                  <li>• Pokrycie dachy – dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis domu Otwarty</strong></h4>
                <ul>
                  <li>• Budynek parterowy z poddaszem i piwnicą</li>
                  <li>• Nowoczesna willa miejska dla 4-6 osób</li>
                  <li>• Garaż na 2 samochody</li>
                  <li>• 2 łazienki na piętrze, WC na parterze i w piwnicy</li>
                  <li>• Skosy na poddaszu</li>
                  <li>• Posiada otwarte przestrzenie nad salonem i garażem</li>
                  <li>• <strong>PARTER: </strong> pokój dzienny z jadalnią 45,60 m², kuchnia z kątem śniadaniowym 23,93 m², hol 19,69 m², gabinet 13,17 m², WC 3,25 m², kotłownia 4,45 m², spiżarnia 2,06 m², sień 6,53 m², garaż 35,94 m²</li>
                  <li>• <strong>PODDASZE: </strong> hol 12,43 m², dwie sypialnie (12,38 m² + 18,60 m²), pokój 13,60 m², łazienka wspólna 7,26 m², sypialnia z garderobą i łazienką (21,95 m² + 6,29 m² + 7,15 m²), pralnia 5,69 m²</li>
                  <li>• <strong>PIWNICA: </strong> hol 9,03 m², WC 2,34 m², przestrzeń do zagospodarowania 46,92 m²</li>
                  <li>• <strong>Powierzchnia całkowita: </strong> 311,18 m² + piwnica</li>
                  <li>• <strong>Powierzchnia użytkowa: </strong> 219,59 m² (277,88 m² z piwnicą)</li>
                  <li>• <strong>Wysokość domu z podmurówką: </strong> 8,95 m</li>
                  <li>• <strong>Szerokość budynku: </strong> 16,58 m</li>
                  <li>• <strong>Długość budynku: </strong> 12,56 m</li>
                  <li>• <strong>Minimalna szerokość działki: </strong> 26,58 m</li>
                  <li>• <strong>Minimalna długość działki: </strong> 21,58 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-RezydencjaLesna" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-WillaMalibu" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>788,888</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-DomOtwarty.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-11-750x430-DomOtwarty.png" alt="blog" /></p>
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

    <RelatedProjectsDomOtwarty  />

    </>
    )
}

export default ProjectsDetailsOne;
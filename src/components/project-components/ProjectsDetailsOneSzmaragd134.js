import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsSzmaragd134 from '../../elements/RelatedProjectsSzmaragd134';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Szmaragd134-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Szmaragd134-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Szmaragd134-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Szmaragd134-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Szmaragd: Nowoczesna Elegancja dla Twojej Rodziny</h3>
              <p>
                Dom Szmaragd to jedno z najnowszych dzieł biura projektowego MG PROJEKT, oferującego 
                innowacyjne rozwiązania architektoniczne. Ten piętrowy dom z obszernym garażem zdobył 
                ogromne zainteresowanie ze względu na zgrabną formę i zastosowanie nowoczesnych konstrukcji.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Wielu szczęśliwych właścicieli domów Szmaragd, zrealizowanych przez naszą ekipę, choć 
                pozostają anonimowi, podkreśla wysoką jakość projektu. Dom Szmaragd stanowi jedną z wielu 
                propozycji MG PROJEKT, a współpraca z firmami partnerskimi, takimi jak DMD Domy 
                i DMD Budownictwo, pozwoliła nam zrealizować ten projekt wielokrotnie w różnych lokalizacjach, 
                m.in. Chotomów, Klaudyn, Stare Babice i Izabelin.
              </p>
              
              <span><strong>Dom Szmaragd – Nietechniczny Opis</strong></span><br />
              <p>
                Szmaragd to kompaktowy dom jednorodzinny, idealny dla rodzin cztero- lub pięcioosobowych. 
                Zaprojektowany z wykorzystaniem nowoczesnych rozwiązań architektonicznych, prezentuje się 
                jako budynek piętrowy o jednolitej bryle na planie kwadratu, co efektywnie minimalizuje 
                koszty budowy.
                <br />

                Jego znaczącym atutem jest dwustanowiskowy garaż, subtelnie wysunięty poza główną bryłę budynku. 
                Elewacja, utrzymana w stonowanej kolorystyce, harmonijnie współgra z otaczającą przyrodą. 
                Zróżnicowanie konstrukcji podkreślają podcienia wejściowy i ogrodowy, wykusze oraz niewielkie 
                balkony. Duże okna gwarantują obfitą ilość światła słonecznego w całym domu.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Szmaragd134-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Szmaragd134-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Nowoczesny układ parteru domu Szmaragd łączy przestrzeń dzienną, obejmującą salon i jadalnię. 
                Wejście przez hol prowadzi do częściowo zabudowanej kuchni, otwartej na jadalnię. Z jadalni 
                można wyjść na taras z podcieniem, tworząc idealną przestrzeń do relaksu.<br />

                Garaż i pomieszczenie gospodarcze posiadają osobne wejścia zewnętrzne i wewnętrzne, efektywnie 
                oddzielając je od reszty domu. Przy schodach znajduje się praktyczna toaleta.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Układ piętra opiera się na centralnym holu, umożliwiającym bezpośredni dostęp do wszystkich 
                pomieszczeń. Dwie sypialnie dzielą wspólny balkon, a główna sypialnia posiada własny balkon 
                i garderobę. Na piętrze znajduje się obszerna łazienka. Mały pokój naprzeciwko schodów można 
                zaaranżować na gabinet lub sypialnię gościnną.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty stworzymy poprzez ich wylanie</li>
                  <li>• Ściany zewnętrzne wymurujemy w systemie dwuwarstwowym z bloczków porotherm ocieplonych styropianem 18 lub wełną mineralną</li>
                  <li>• Wykorzystamy stropy TERIVA</li>
                  <li>• Elewacja powstanie z tynku cienkowarstwowego</li>
                  <li>• Do pokrycia dachu wykorzystamy dachówki lub blachodachówki</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Szmaragd</strong></h4>
                <ul>
                  <li>• Projekt przewidziany dla rodziny składającej się z 4-5 osób</li>
                  <li>• Dom Szmaragd oferuje parter, piętro i garaż na dwa samochody</li>
                  <li>• W domu są 2 łazienki i 3 sypialnie oraz dodatkowa garderoba, która także może zostać małą sypialnią</li>
                  <li>• <strong>PARTER: </strong> salon z jadalnią 37,27 m², półotwarta kuchnia 10,89 m², hol 8,65 m², sień 4,20 m², WC 1,74 m², garaż 33,54 m², pomieszczenie gospodarcze 7,58 m²</li>
                  <li>• <strong>PIĘTRO: </strong> trzy sypialnie (14,56 m², 15,41 m² oraz 14,87 m² + garderoba 2,60 m²), pokój/garderoba 7,00 m², hol 7,29 m², łazienka 9,50 m²</li>
                  <li>• Powierzchnia całkowita: 227,52 m2</li>
                  <li>• Powierzchnia użytkowa: 133,87 m2</li>
                  <li>• Wysokość domu z podmurówką: 9,10 m</li>
                  <li>• Szerokość budynku: 11,93 m</li>
                  <li>• Długość budynku: 13,31 m</li>
                  <li>• Minimalna szerokość działki: 18,93 m</li>
                  <li>• Minimalna długość działki: 21,31 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Szafir181" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Modena147" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>467,095</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Szmaragd134.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Szmaragd134.png" alt="blog" /></p>
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

    <RelatedProjectsSzmaragd134 />

    </>
    )
}

export default ProjectsDetailsOne;
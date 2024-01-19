import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsSzafir181 from '../../elements/RelatedProjectsSzafir181';

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
                <div className="col-md-12">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-01-1920x1075-Szafir181-1.png" alt="Thumb" />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-01-750x430-Szafir181-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Szafir181-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Szafir181-3.png" alt="Thumb" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Szafir181-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Szafir: Prosta Elegancja i Funkcjonalność dla Rodzin</h3>
              <p>
                Projekt domu Szafir, jednego z najnowszych i jednocześnie najczęściej wybieranych 
                rozwiązań biura projektowego MG PROJEKT, cieszy się dużą popularnością ze względu 
                na swoją prostotę, użyteczność i estetykę. Ten nowoczesny dom może być zbudowany 
                nawet na trudnych działkach, a jego koszty budowy są atrakcyjne. Pomimo młodego 
                wieku projektu, dom Szafir zdążył już zyskać uznanie klientów na terenie Warszawy 
                i okolic, takich jak Lesznowola, Jabłonna, Bemowo czy Izabelin.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Warto zauważyć, że choć właściciele zbudowanych domów Szafir pozostali anonimowi 
                i nie wyrazili zgody na prezentację swoich nieruchomości, to dom Szafir cieszy się 
                dużym uznaniem wśród klientów MG PROJEKT. Jako firma partnerska biura, mieliśmy 
                okazję uczestniczyć w kilku realizacjach tego projektu na terenie Warszawy 
                i okolic, takich jak Lesznowola, Jabłonna, Bemowo i Izabelin. To doświadczenie 
                pozwoliło nam doskonalić proces budowy i dostosowywać go do specyfiki różnych lokalizacji.
              </p>
              
              <span><strong>Dom Szafir – Nietechniczny Opis</strong></span><br />
              <p>
                Dom Szafir to jednorodzinna rezydencja, idealna dla rodzin liczących od 4 do 6 osób. 
                Jego prostokątny plan pozwala na optymalne wykorzystanie przestrzeni, minimalizując 
                koszty inwestycji. Pomimo minimalistycznej konstrukcji, dom Szafir wyróżnia się dzięki 
                liczby detali architektonicznych, nadając mu wyjątkowego charakteru. Jest to również 
                dom przyjazny dla portfela, zarówno podczas budowy, jak i eksploatacji.
                <br />

                Jedną z istotnych cech projektu jest umieszczenie tylko dwóch słupów konstrukcyjnych 
                wewnątrz, co pozwala na elastyczne kształtowanie przestrzeni, zarówno podczas budowy, 
                jak i w przyszłości, dostosowując ją do zmieniających się potrzeb.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Szafir181-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Szafir181-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Dom Szafir zachwyca przestronnością i nowoczesnym designem. Wchodząc przez wiatrołap, 
                natrafiamy na ogromny salon połączony z jadalnią, kuchnią i holu. Te elementy łączą 
                się w harmonijną przestrzeń o powierzchni 72,52 m², dodatkowo wzbogaconą o wykusz 
                w jadalni, który przenika aż na taras. Kuchnia z dużą wyspą wpisuje się w nowoczesny 
                styl, a obok znajdują się łazienka z sauną, pomieszczenie gospodarcze i gabinet.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro domu Szafir kryje cztery foremne sypialnie, do których prowadzi centralnie 
                położony hol, zapewniając maksymalną użyteczność przestrzeni. Dodatkowo, na piętrze 
                znajduje się wspólna łazienka, co sprawia, że ten dom doskonale spełnia oczekiwania 
                nowoczesnych rodzin. Prosta elegancja, funkcjonalność i elastyczność to cechy, które 
                czynią dom Szafir wyjątkowym wyborem.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty domu Szafir zostaną zbudowane z betonowych ław, a ściany fundamentowe z bloczków betonowych</li>
                  <li>• Na ściany zewnętrzne użyte będą pustaki porotherm 25 ze styropianem i tynkami cienkowarstwowymi</li>
                  <li>• Strop będzie monolityczny, wylewany z żelbetu</li>
                  <li>• Na elewacjach zostanie położony tynk cienkowarstwowy na styropianie</li>
                  <li>• Dach zostanie pokryty dachówką ceramiczną</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Szafir</strong></h4>
                <ul>
                  <li>• Dom Szafir może wygodnie użytkować rodzina licząca 4-6 członków</li>
                  <li>• Szafir jest domem piętrowym bez garażu</li>
                  <li>• W budynku znajdują się 2 łazienki (po 1 na każde piętro)</li>
                  <li>• Do dyspozycji domowników mamy 4 sypialnie, wszystkie na piętrze</li>
                  <li>• <strong>PARTER:</strong> salon z jadalnią 44,34 m², otwarta kuchnia z wyspą 15,93 m², hol 12,25 m², wiatrołap 2,86 m², łazienka z sauną 8,37 m², pomieszczenie gospodarcze 4,70 m², gabinet 10,58 m²</li>
                  <li>• <strong>PIĘTRO:</strong> cztery sypialnie (17,78 m², 17,74 m², 15,30 m² oraz 14,21 m²), hol 12,05 m², łazienka 10,27 m²</li>
                  <li>• Powierzchnia całkowita: 216,01 m²</li>
                  <li>• Powierzchnia użytkowa: 181,20 m²</li>
                  <li>• Wysokość domu z podmurówką: 9,37 m</li>
                  <li>• Szerokość budynku: 11,64 m</li>
                  <li>• Długość budynku: 11,70 m</li>
                  <li>• Minimalna szerokość działki: 19,64 m</li>
                  <li>• Minimalna długość działki: 21,31 m</li>
                </ul>


              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Riwiera5" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Szmaragd134" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>SSO - Stan surowy otwarty</h5><span><strong>Czas realizacji:</strong> 3 miesiące <br />fundamenty, ściany, stropy, dach</span>
                  </li>
                  <li>
                  <h5>SSZ - Stan surowy zamknięty</h5><span><strong>Czas realizacji:</strong> pół roku <br />SSO, okna, drzwi, elektryka, instalacje wodno-kanalizacyjne</span>
                  </li>
                  <li>
                  <h5>Stan developerski</h5><span><strong>Czas realizacji:</strong> jeden rok <br />SSZ, elewacja, wylewki, tynki wewnętrzne</span>
                  </li>
                  <li>
                    Koszt realizacji <span><h1><strong>467,140</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Szafir181.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Szafir181.png" alt="blog" /></p>
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

    <RelatedProjectsSzafir181 />

    </>
    )
}

export default ProjectsDetailsOne;
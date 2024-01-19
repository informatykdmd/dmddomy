import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsOpalElegancja from '../../elements/RelatedProjectsOpalElegancja';

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
                    <ZoomableImage src="images/project/bl-01-750x430-OpalElegancja-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-OpalElegancja-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-OpalElegancja-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-OpalElegancja-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Opal: Nowoczesna Piętrowa Willa Miejska</h3>
              <p>
                Projekt Domu Opal, stworzony przez renomowane biuro projektowe MG PROJEKT, 
                cieszy się ogromną popularnością wśród rodzin składających się z 4-5 członków. 
                Nasze zrealizowane inwestycje w miejscowościach takich jak Zielonka i Pruszków 
                potwierdzają, że budowa Domu Opal przebiega sprawnie i bez komplikacji, dzięki 
                doświadczeniu naszych pracowników oraz sprawdzonym technologiom.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom Opal to projekt, który został wielokrotnie zrealizowany przez nasze biuro, 
                m.in. w Zielonce i Pruszkowie. Dzięki naszemu doświadczeniu w wykorzystywaniu 
                sprawdzonych technologii, zyskaliśmy uznanie w całej Warszawie, a także w 
                miejscowościach takich jak Klaudyn, Chotomów i Izabelin.
              </p>
              <p>
                Pracownia projektowa MG PROJEKT przygotowała Dom Opal, a nasze firmy, 
                DMD Domy i DMD Budownictwo, są rekomendowanymi partnerami w realizacji projektów, 
                co potwierdza wielokrotnie przetestowana współpraca i znakomite rezultaty.
              </p>
              <span><strong>Dom Opal – Nietechniczny Opis</strong></span><br />
              <p>
                Dom Opal to nowoczesna piętrowa willa miejska, idealna dla rodziny 4-5 osobowej. 
                Jego regularna bryła umożliwia efektywną inwestycję, obniżając jednocześnie 
                koszty budowy i zużycie energii w okresie eksploatacji. Dodatkowo, garaż 
                dobudowany do głównej bryły nie stanowi uciążliwości dla mieszkańców. 
                Duże okna wpuszczające masę światła dziennego nadają przestronności salonowi 
                z jadalnią, otwierając go na ogród.<br />

                Elewacja budynku ozdobiona jest drobnymi elementami architektonicznymi, 
                klinkierem i drewnem, nadającymi mu spokojny, elegancki wygląd. Duży balkon-taras 
                z tyłu budynku to dodatkowy atut, osłonięty od ulicy.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-OpalElegancja-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-OpalElegancja-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze przyciąga uwagę nowoczesny układ pomieszczeń, z połączonym pokojem 
                dziennym, jadalnią i częściowo otwartą kuchnią. Duży taras z podcieniem dostępny 
                z jadalni stanowi idealne miejsce na relaks. W tyle znajduje się niewielki gabinet 
                lub pokój gościnny, a także WC z natryskiem i przestronna spiżarnia. 
                Garaż dostępny jest przez sień, a wejście do kotłowni znajduje się w garażu.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro to centralny hol z łazienką oraz 3 sypialnie, z których każda posiada własną 
                garderobę. Główna sypialnia ma osobną łazienkę i balkon. Pralnio-suszarnia na 
                piętrze to praktyczne rozwiązanie, oddzielając sprzęt związany z tymi czynnościami 
                od łazienek.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Betonowe ławy i bloczki betonowe wykorzystujemy do stworzenia fundamentów </li>
                  <li>• Ściany zewnętrzne murujemy z bloków porotherm 25, ocieplamy styropianem i wykańczamy tynkiem cienkowarstwowym </li>
                  <li>• TERIVA – technologia stropów </li>
                  <li>• Wykonujemy elewację z tynku cienkowarstwowego </li>
                  <li>• Dach pokryty dachówką </li>
                </ul>
              <br />
              <h4><strong>Opis Domu Opal</strong></h4>
                <ul>
                  <li>• Projekt przeznaczony jest dla 4-5 domowników </li>
                  <li>• Dom Opal to parter, piętro i dwustanowiskowy garaż </li>
                  <li>• Do dyspozycji domowników są 3 łazienki i 3 sypialnie oraz jeden pokój dający się adaptować na sypialnię </li>
                  <li>• Dom z widokiem 3 posiada trzy sypialnie oraz pokój mogący pełnić rolę sypialni </li>
                  <li>• <strong>PARTER: </strong>salon 35,73 m², jadalnia 13,25 m², kuchnia 11,35 m², spiżarnia 2,26 m², hol 9,80 m², sień 5,51 m², wc z natryskiem 4,41 m², gabinet 9,61 m², kotłownia + garaż (odpowiednio 7,03 m² i 37,25 m²)</li>
                  <li>• <strong>PIĘTRO: </strong>sypialnie z garderobami (23,30 m², 18,13 m² oraz 17,25 m²), pralnia/suszarnia 6,48 m², hol 10,19 m², łazienki: 9,14 m² 7,25 m²</li>
                  <li>• Powierzchnia całkowita: 293,78 m2 </li>
                  <li>• Powierzchnia użytkowa: 181,39 m2 </li>
                  <li>• Wysokość domu z podmurówką: 9,75 m </li>
                  <li>• Szerokość budynku: 14 m </li>
                  <li>• Długość budynku: 15,6 m </li>
                  <li>• Minimalna szerokość działki: 21,6 m </li>
                  <li>• Minimalna długość działki: 23,6 m </li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-DomzWidokiem3" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-willaParkowa160" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>612,036</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-OpalElegancja.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-OpalElegancja.png" alt="blog" /></p>
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

    <RelatedProjectsOpalElegancja />

    </>
    )
}

export default ProjectsDetailsOne;
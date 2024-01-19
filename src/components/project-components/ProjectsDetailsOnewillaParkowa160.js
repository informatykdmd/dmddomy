import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectswillaParkowa160 from '../../elements/RelatedProjectswillaParkowa160';

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
                    <ZoomableImage src="images/project/bl-01-750x430-willaParkowa160-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-willaParkowa160-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-willaParkowa160-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-willaParkowa160-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Willa Parkowa: Elegancka i Przestronna Posiadłość z Inspiracji Rezydencją Parkową</h3>
              <p>
                Projekt budowy Willi Parkowej, autorstwa cenionej pracowni projektowej MG PROJEKT, 
                to wyjątkowe wyzwanie, które z radością podjęliśmy. Ta urokliwa parterowa willa z 
                dużym poddaszem prezentuje formę odbiegającą od powszechnie dominującej nowoczesnej 
                stylistyki. Dedykowana dla pięcioosobowej rodziny, Willa Parkowa łączy w sobie 
                nowoczesne technologie budowlane z niezwykłym urokiem architektonicznym. Projekt 
                ten bazuje na jednym z naszych największych hitów, Rezydencji Parkowej.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Budowa Willi Parkowej to dla nas przyjemność, a liczne zrealizowane inwestycje, 
                między innymi w Zielonce, Pruszkowie, Piastowie, Starych Babicach oraz na Białołęce, 
                potwierdzają nasze doświadczenie w efektywnej realizacji tego projektu. 
                Chociaż ze względu na prywatność właścicieli nie możemy podzielić się zdjęciami 
                zrealizowanych Willi Parkowych, to jednak zapraszamy do zapoznania się z podobnymi 
                projektami MG PROJEKT.
              </p>
              <p>
                Pracownia projektowa MG PROJEKT przygotowała Dom Opal, a nasze firmy, 
                DMD Domy i DMD Budownictwo, są rekomendowanymi partnerami w realizacji projektów, 
                co potwierdza wielokrotnie przetestowana współpraca i znakomite rezultaty.
              </p>
              <span><strong>Willa Parkowa – Nietechniczny Opis</strong></span><br />
              <p>
                Koszt budowy Willi Parkowej zaskakuje swoją dostępnością, biorąc pod uwagę imponujący 
                wygląd projektu. To zasługa adaptacji projektu Rezydencji Parkowej, gdzie zmniejszenie 
                wielkości przekłada się na znaczne obniżenie kosztów, zachowując jednocześnie pełną 
                funkcjonalność.<br />

                Willa Parkowa to parterowy dom z użytkowym poddaszem, skonstruowany z myślą o pięcioosobowej 
                rodzinie. Charakteryzuje się rozłożystą bryłą, dwustanowiskowym garażem, i dużym zadaszonym 
                tarasem od strony ogrodu. Jego styl nawiązuje do willi podmiejskiej, z odrobiną klasycznej 
                estetyki.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-willaParkowa160-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-willaParkowa160-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Na parterze funkcjonalność przestrzeni została starannie podzielona na dwie części - dzienną i 
                sypialnianą. Impresyjny pokój dzienny połączony z holem i jadalnią otwiera się na taras z podcieniem. 
                Kuchnia z dużą wyspą i spiżarnią stanowi idealne dopełnienie tej przestrzeni.<br />

                W części sypialnianej znajdują się dwie sypialnie, dzielące wspólną łazienkę, oraz główna sypialnia 
                z łazienką, garderobą i własnym tarasem. Dodatkowo, garaż, kotłownia i funkcjonalna szatnia tworzą 
                oddzielną strefę użytkową.
              </p>
              <span><strong>Strych</strong></span><br />
              <p>              
                Poddasze, osiągalne poprzez reprezentacyjne schody, kryje przestronny pokój, który może pełnić rolę 
                dodatkowej sypialni lub gabinetu. Nad salonem rozciąga się antresola, a nad garażem znajduje się 
                praktyczny strych, idealny na magazynowanie z uwagi na niewielką wysokość pomieszczenia.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Betonowe ławy i ściany fundamentowe z bloczków betonowych – fundamenty</li>
                  <li>• Pustak porotherm 25 ocieplony styropianem i pokryty tynkiem cienkowarstwowym – ściany zewnętrzne</li>
                  <li>• Monolit żelbetowy – strop</li>
                  <li>• Tynki cienkowarstwowe na styropianie – elewacje</li>
                  <li>• Dachówka ceramiczna – pokrycie dachu</li>
                </ul>

              <br />
              <h4><strong>Opis Domu Willa Parkowa</strong></h4>
                <ul>
                  <li>• Budowa domu Willa Parkowa to propozycja dla rodziny 4-5 osobowej </li>
                  <li>• Dom Willa Parkowa jest parterowy i posiada duży strych nadający się do adaptacji </li>
                  <li>• Do dyspozycji domowników są 2 duże łazienki i małe WC </li>
                  <li>• Willa Parkowa przewiduje 3 pełnoprawne sypialnie oraz przestrzeń na czwartą sypialnię na poddaszu </li>
                  <li>• <strong>PARTER: </strong>pokój dzienny połączony z jadalnią i holem 57,33 m², kuchnia z wyspą kuchenną 14,50 m² (+ spiżarnia 1,58 m²), 3 sypialnie (18.21 m², 14,66 m² i 14,66 m²), garderoba 6,72 m², dwie łazienki (7,87 m² i 6,72 m²), WC 1,75 m², sień 6,32 m², szatnia 6,20 m², garaż 36,30 m², kotłownia 6,20 m²</li>
                  <li>• <strong>STRYCH: </strong>antresola nad salonem 15,80 m² (bez skosów), sypialnia lub gabinet 17,79 m² (bez skosów), strych 37,18 m² (w całości obniżony sufit)</li>
                  <li>• Powierzchnia całkowita: 279,98 m2 </li>
                  <li>• Powierzchnia użytkowa: 159,04 m2 </li>
                  <li>• Wysokość domu z podmurówką: 7,11  m </li>
                  <li>• Szerokość budynku: 19,86 m </li>
                  <li>• Długość budynku: 16,04 m </li>
                  <li>• Minimalna szerokość działki: 27,86 m </li>
                  <li>• Minimalna długość działki: 25,64 m </li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-OpalElegancja" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Tytan134" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>652,390</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-willaParkowa160.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-willaParkowa160.png" alt="blog" /></p>
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

    <RelatedProjectswillaParkowa160 />

    </>
    )
}

export default ProjectsDetailsOne;
import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsTurkus150 from '../../elements/RelatedProjectsTurkus150';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Turkus150-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Turkus150-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Turkus150-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Turkus150-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Turkus: Nowoczesna Elegancja dla Pięcioosobowej Rodziny</h3>
              <p>
                Projekt piętrowego domu Turkus, stworzony przez uznane biuro projektowe MG PROJEKT, 
                stanowi uroczą propozycję dla rodzin poszukujących funkcjonalnego domu z dwustanowiskowym 
                garażem. Klasyczna elegancja współgra tutaj z nowoczesną architekturą, tworząc harmonijną 
                całość. Proces budowy domu Turkus jest szybki i sprawny, dzięki bogatemu doświadczeniu 
                zespołu wykonawczego.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dzięki zdobytym umiejętnościom i praktyce, budowa domu Turkus przebiega efektywnie. 
                Pomimo braku możliwości prezentacji gotowych realizacji ze względów prywatności 
                właścicieli, projekt ten cieszył się popularnością w różnych lokalizacjach, m.in. 
                Warszawie Włochy, Dziekanowie Leśnym, Łomiankach i Izabelinie.
              </p>
              
              <span><strong>Dom Turkus – Nietechniczny Opis</strong></span><br />
              <p>
                Piętrowa willa miejska Turkus to idealne rozwiązanie dla pięcioosobowej rodziny, 
                łącząc komfort zamieszkania z niewielkimi wymaganiami co do działki. Kompaktowa bryła 
                budynku wpisuje się w trend energooszczędności, a zastosowane elementy architektoniczne, 
                takie jak okna narożne, wykusze, podcienia i boniowane elewacje, nadają mu wyjątkowy 
                charakter.<br />

                Wnętrze domu Turkus zostało zaprojektowane z myślą o funkcjonalności i efektywnym 
                wykorzystaniu przestrzeni, podkreślając nowoczesny układ pomieszczeń.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Turkus150-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Turkus150-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu Turkus został podzielony na dwie części: lewą, z połączoną jadalnią i salonem 
                otwartym na przestronną kuchnię, oraz prawą, z dwustanowiskowym garażem, kotłownią, 
                pokojem-gabinetem i łazienką. Taras z podcieniem tworzy przyjemne miejsce do relaksu.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze zaplanowano trzy sypialnie, z których dwie dzielą jedną łazienkę, a główna 
                sypialnia posiada własną łazienkę, balkon i garderobę. Układ ten gwarantuje maksymalną 
                użyteczność przestrzeni sypialnianej, spełniając oczekiwania każdej pięcioosobowej rodziny.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty: betonowe ławy i bloczki betonowe</li>
                  <li>• Ściany zewnętrzne: pustaki porotherm 25, styropian, tynk</li>
                  <li>• Strop: TERIVA</li>
                  <li>• Elewacje: tynk cienkowarstwowy, klinkier, boniowania</li>
                  <li>• Dach: dachówka</li>
                </ul>
              <br />
              <h4><strong>Opis Domu Turkus</strong></h4>
                <ul>
                  <li>• Turkus jest domem piętrowym</li>
                  <li>• W domu Turkus komfortowo zamieszka rodzina pięcioosobowa</li>
                  <li>• Integralną częścią domu Turkus jest dwustanowiskowy garaż</li>
                  <li>• W domu Turkus przewidziano 3 sypialnie na piętrze i gabinet-sypialnię na parterze</li>
                  <li>• <strong>PARTER:</strong> salon z jadalnią 35,61 m², kuchnia 9,99 m², pokój 11,73 m², hol 10,81 m², sień 5,30 m², łazienka 3,77 m², garaż 32,29 m², kotłownia 7,90 m²</li>
                  <li>• <strong>PIĘTRO:</strong> 2 sypialnie (14,22 m² + 12,13 m²), główna sypialnia z garderobą i łazienką (14,94 m² + 5,48 m² + łazienka 9,99 m²), hol 10,32 m², łazienka wspólna 5,43 m²</li>
                  <li>• Powierzchnia całkowita: 249,51 m²</li>
                  <li>• Powierzchnia użytkowa: 149,27 m²</li>
                  <li>• Wysokość domu z podmurówką: 9,26 m</li>
                  <li>• Szerokość budynku: 14,62 m</li>
                  <li>• Długość budynku: 13,87 m</li>
                  <li>• Minimalna szerokość działki: 21,62 m</li>
                  <li>• Minimalna długość działki: 21,87 m</li>
                </ul>


              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Tytan134" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Riwiera5" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>530,911</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Turkus150.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Turkus150.png" alt="blog" /></p>
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

    <RelatedProjectsTurkus150 />

    </>
    )
}

export default ProjectsDetailsOne;
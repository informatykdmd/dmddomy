import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsModena147 from '../../elements/RelatedProjectsModena147';

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
                    <ZoomableImage src="images/project/bl-01-750x430-Modena147-1.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-02-750x430-Modena147-2.png" alt="Thumb" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project-thumb">
                    <ZoomableImage src="images/project/bl-03-750x430-Modena147-3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-Modena147-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Dom Modena: Nowoczesna Elegancja i Funkcjonalność dla Twojej Rodziny</h3>
              <p>
                Budowa domu Modena to propozycja skierowana do rodzin ceniących nowoczesną architekturę, 
                priorytetowo traktujących funkcjonalność i oszczędność. Nasza firma budowlana, 
                specjalizująca się w nowoczesnych materiałach i technologiach, gwarantuje nie tylko 
                niski koszt budowy, ale także efektywność energetyczną.
              </p>

              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Mimo iż właściciele domów Modena preferują pozostać anonimowi, nasz zespół ma bogate 
                doświadczenie w realizacji tego projektu. Dom Modena wyrastał już m.in. na Bielanach, 
                w Łomiankach i w Starych Babicach. Koszt budowy tego projektu potwierdza, że to jedna 
                z najbardziej udanych inwestycji studia projektowego MG PROJEKT.
              </p>
              
              <span><strong>Dom Modena – Nietechniczny Opis</strong></span><br />
              <p>
                Dom Modena to nowoczesna willa miejska z atrakcyjnym, częściowo zadaszonym tarasem. 
                Inspirowany współczesną architekturą metropolii, zachwyca nie tylko estetyką, ale również 
                funkcjonalnością. Zastosowano innowacyjne rozmieszczenie okien, zapewniające obfitą ilość 
                światła dziennego, oraz efektowne okładziny z włókna cementowego.
                <br />

                Pomimo dopasowania do ograniczonej przestrzeni miejskiej, dom Modena zapewnia komfort 
                dla rodziny 4-5 osobowej. Dwustanowiskowy garaż oraz regularna bryła budynku minimalizują 
                zarówno koszty budowy, jak i utrzymania.
                {/* <p><ZoomableImage src="images/project/bl-xx-750x430-Modena147-1.png" alt="Thumb" /></p>
                <p><ZoomableImage src="images/project/bl-xx-750x430-Modena147-2.png" alt="Thumb" /></p> */}
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Nowoczesny układ pomieszczeń na parterze obejmuje przestronny pokój z jadalnią, tworzący 
                otwartą, mocno przeszkloną przestrzeń z kominkiem. Wyjście z pokoju prowadzi na obszerny 
                taras z podcieniem. Kuchnia ze spiżarnią jest delikatnie odseparowana, a po prawej stronie 
                holu znajduje się dwustanowiskowy garaż, poprzedzony kotłownią. Przy schodach umieszczono 
                praktyczne WC.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Na piętrze klasyczny hol prowadzi do głównej sypialni z garderobą, łazienką i balkonem. 
                Obok znajduje się wszechstronny pokój, idealny do różnych zastosowań, oraz dwie mniejsze 
                sypialnie. Całość uzupełnia wspólna łazienka i przylegająca do niej pralnia. Architektura 
                piętra harmonijnie łączy funkcjonalność z estetyką.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Fundamenty zbudowane zostaną z betonowych ław</li>
                  <li>• Ściany fundamentowe powstaną z bloczków betonowych</li>
                  <li>• Ściany zewnętrzne składać się będą z pustaków porotherm 25, styropianu i tynku cienkowarstwowego</li>
                  <li>• Strop będzie miał postać stropu TERIVA</li>
                  <li>• Elewacje pokryje tynk cienkowarstwowy i okładziny z włókna cementowego</li>
                  <li>• Na dachu położona zostanie dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis domu Modena</strong></h4>
                <ul>
                  <li>• Projekt Modena przewidziano dla pięcioosobowej rodziny lub mniejszej</li>
                  <li>• Dom Modena posiada dwa użytkowe poziomy: parter i piętro</li>
                  <li>• W domu Modena przewidziano dwustanowiskowy garaż</li>
                  <li>• Dom Modena oferuje 3 sypialnie zlokalizowane na piętrze</li>
                  <li>• <strong>PARTER:</strong> salon z jadalnią 44,37 m², kuchnia ze spiżarnią (13,18 m² + 1,94 m²), hol 3,82 m², sień 2,93 m², WC 2,34 m², garaż 33,00 m², kotłownia 7,97 m²</li>
                  <li>• <strong>PIĘTRO:</strong> 2 sypialnie (15,59 m² + 11,58 m²), główna sypialnia z balkonem 12,53 m², łazienka głównej sypialni 4,54 m², garderoba głównej sypialni 4,41 m², pokój-gabinet 8,64 m², hol 6,55 m², pralnia 4,97 m², łazienka wspólna 10,34 m²</li>
                  <li>• Powierzchnia całkowita: 254,41 m²</li>
                  <li>• Powierzchnia użytkowa: 149,27 m²</li>
                  <li>• Wysokość domu z podmurówką: 8,10 m</li>
                  <li>• Szerokość budynku: 12,89 m</li>
                  <li>• Długość budynku: 14,19 m</li>
                  <li>• Minimalna szerokość działki: 21,60 m</li>
                  <li>• Minimalna długość działki: 22,19 m</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-Szmaragd134" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-Kasjopea154" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>515,064</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-Modena147.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-Modena147.png" alt="blog" /></p>
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

    <RelatedProjectsModena147 />

    </>
    )
}

export default ProjectsDetailsOne;
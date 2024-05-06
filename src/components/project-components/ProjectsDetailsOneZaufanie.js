import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

    return(
    <>
    {/* Projects Section*/}
    <section className="single-portfolio-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-koparka-0.png" alt="Oferta" />
              </div>
            </div>
            <div className="col-md-8 det-content">
                <h3>Usługa koparką kołową - Wkop się w jakość i precyzję</h3>
                <p>
                    Gdy planujesz budowę domu, pierwszym krokiem jest właściwe przygotowanie terenu. 
                    Specjalistyczne usługi koparką kołową oferowane przez naszą firmę zapewniają solidną 
                    podstawę dla każdego projektu budowlanego. Niezależnie od tego, czy potrzebujesz wykopać 
                    fundamenty, wyrównać teren, czy przygotować infrastrukturę pod instalacje – jesteśmy do Twojej dyspozycji.
                </p>

                <span><strong>Wykopy pod fundamenty - Fundamenty sukcesu</strong></span><br />
                <p>
                    Każdy stabilny budynek zaczyna się od solidnych fundamentów. Nasza koparka kołowa, 
                    dzięki swojej precyzji i mocy, zapewnia szybkie i dokładne wykopy pod fundamenty, 
                    dostosowane do specyfikacji twojego projektu. Wykorzystanie zaawansowanej technologii 
                    pozwala nam minimalizować ryzyko błędów i zapewniać najlepszą możliwą jakość pracy.
                </p>

                <span><strong>Niwelacja terenu - Poziom wyżej w przygotowaniu terenu</strong></span><br />
                <p>
                    Niwelacja terenu to kluczowy etap przygotowania pod budowę. Dzięki naszym usługom, 
                    możesz liczyć na perfekcyjnie przygotowany grunt, co jest niezbędne dla bezpieczeństwa 
                    i stabilności konstrukcji. Nasza koparka kołowa, wyposażona w najnowsze technologie, 
                    pozwala na szybką i skuteczną niwelację, przygotowując teren pod dalsze etapy budowy.
                </p>

                <span><strong>Przygotowanie do instalacji - Podłącz się do jakości</strong></span><br />
                <p>
                    Przygotowanie terenu pod instalacje kanalizacyjne i wodociągowe wymaga szczególnej precyzji. 
                    Nasze doświadczenie i specjalistyczny sprzęt gwarantują, że infrastruktura Twojego domu 
                    zostanie przygotowana zgodnie z najwyższymi standardami, zapewniając bezproblemowe 
                    użytkowanie na lata.
                </p>
                <p>
                    Nie ryzykuj fundamentów swojego przyszłego domu. Zaufaj profesjonalistom. 
                </p>

                <em>
                    Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych usługach 
                    i rozpocząć współpracę, która położy solidne podstawy pod Twój nowy dom.
                </em>


            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>Zalety koparki kołowej</h5><span><strong>Mobilność i precyzja:</strong> <br />Idealna do pracy w trudnych warunkach i na ograniczonej przestrzeni.<br /><strong>Wszechstronność zastosowań:</strong> <br />Od wykopów po niwelację i prace instalacyjne.</span>
                  </li>
                  <li>
                    <h5>Gwarancja jakości</h5><span><strong>Doświadczenie:</strong> <br />Wieloletnia praktyka i setki zadowolonych klientów.<br /><strong>Bezpieczeństwo: </strong> <br />Przestrzeganie wszystkich norm bezpieczeństwa budowlanego.<br /><strong>Zadowolenie klienta:  </strong> <br />Indywidualne podejście do każdego projektu.</span>
                  </li>
                  
                </ul>
                    
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

    {/* <RelatedProjectsKasjopea7 /> */}

    </>
    )
}

export default ProjectsDetailsOne;
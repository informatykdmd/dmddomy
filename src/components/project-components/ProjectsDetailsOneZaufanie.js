import ZoomableImage from '../../supportscripts/ZoomableImage';

const ProjectsDetailsOne = () => { 

    return(
    <>
    {/* Projects Section*/}
    <section className="single-portfolio-section section-padding-all">
        <div className="default-container">
          <div className="row">
            {/* <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-koparka-0.png" alt="Oferta" />
              </div>
            </div> */}
            <div className="col-md-8 det-content">
                <h3>Generalny Wykonawca: Gwarancja spokoju przy budowie domu</h3>
                <p>
                    W dzisiejszych dynamicznych czasach, równoważenie życia zawodowego, rodzinnego i pasji 
                    może być wyzwaniem. Dodatkowym obciążeniem jest budowa własnego domu, która wymaga nie 
                    tylko czasu, ale i specjalistycznej wiedzy. Czy warto zatem powierzyć to zadanie Generalnemu 
                    Wykonawcy? Przekonaj się, jakie korzyści niesie za sobą ta decyzja.
                </p>

                <span><strong>Partnerstwo i wsparcie</strong></span><br />
                <p>
                    Generalny Wykonawca to nie tylko osoba, która zajmie się technicznymi aspektami budowy. 
                    To partner, który może znacząco odciążyć Cię od stresu związanego z zarządzaniem projektami, 
                    koordynacją prac oraz kontrolą budżetu. Dzięki kompleksowej ofercie, klienci otrzymują nie 
                    tylko usługi związane z budową, ale także doradztwo budowlane i optymalizację procesu.
                </p>

                <span><strong>Pewność i profesjonalizm</strong></span><br />
                <p>
                    To idealne rozwiązanie dla tych, którzy cenią sobie spokój i pewność, że ich inwestycja 
                    jest realizowana profesjonalnie. Zlecając prace generalnemu wykonawcy, masz pewność, że 
                    wszystkie etapy projektu są odpowiednio zaplanowane i realizowane zgodnie z najwyższymi 
                    standardami.
                </p>

                <span><strong>Zarządzanie i koordynacja</strong></span><br />
                <p>
                    Co więcej, generalny wykonawca zarządza całym personelem – od projektantów po kierowników 
                    budów. Gwarantuje to, że każde zadanie jest wykonane przez specjalistów w swojej dziedzinie, 
                    co przekłada się na wysoką jakość i efektywność prowadzonych prac.
                </p>
                
                <em>
                    Mając na uwadze te korzyści, warto rozważyć, czy zarządzanie własną budową jest najlepszą opcją. 
                    Czasami lepiej powierzyć to zadanie profesjonalistom, aby mieć pewność, że nasz dom będzie bezpieczny, 
                    solidny i zbudowany zgodnie z najnowszymi standardami budowlanymi. Skontaktuj się z nami już dziś, 
                    aby dowiedzieć się więcej o naszych usługach oraz jak rozpocząć współpracę.
                </em>


            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>Spokój i bezpieczeństwo</h5>
                    <span>Generalny Wykonawca zapewnia kompleksową obsługę, co minimalizuje ryzyko błędów i problemów na budowie.</span>
                  </li>
                  <li>
                    <h5>Oszczędność czasu</h5>
                    <span>Dzięki delegowaniu obowiązków związanych z budową, zyskujesz więcej czasu na osobiste pasje i rodzinę.</span>
                  </li>
                  <li>
                    <h5>Profesjonalizm i doświadczenie</h5>
                    <span>Skorzystanie z usług doświadczonych specjalistów gwarantuje wysoką jakość wykonania i terminowość.</span>
                  </li>
                  <li>
                    <h5>Realne gwarancje</h5>
                    <span>Jako klient otrzymujesz realną gwarancję na wykonane prace, co jest rzadkością w przypadku zarządzania budową we własnym zakresie.</span>
                  </li>
                  <li>
                    <h5>Optymalizacja kosztów</h5>
                    <span>Choć początkowa cena za usługi generalnego wykonawcy może wydawać się wyższa, w długoterminowej perspektywie pozwala uniknąć wielu dodatkowych kosztów.</span>
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
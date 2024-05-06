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
                <h3>Bezpłatne konsultacje budowlane</h3>
                <p>
                  Zastanawiasz się nad budową domu, ale nie wiesz jak zacząć? Skorzystaj z naszej oferty 
                  bezpłatnych konsultacji budowlanych i poznaj najlepsze praktyki oraz najnowsze rozwiązania 
                  technologiczne, które pomogą Ci zrealizować Twój wymarzony dom.
                </p>

                <span><strong>Profesjonalne doradztwo na każdym etapie</strong></span><br />
                <p>
                  W DMD Domy oferujemy profesjonalne doradztwo na każdym etapie budowy domu – od koncepcji 
                  po realizację. Dzięki temu możesz liczyć na wsparcie naszych ekspertów niezależnie od tego, 
                  w jakim momencie procesu budowlanego się znajdujesz.
                </p>

                <span><strong>Elastyczne formy konsultacji</strong></span><br />
                <p>
                  Nasze konsultacje dostępne są w formie telefonicznej, mailowej oraz online, co pozwala na 
                  elastyczne dostosowanie do Twoich potrzeb i harmonogramu. Bez względu na to, czy dopiero 
                  zaczynasz planować, czy już posiadasz projekt i zastanawiasz się nad wyborem technologii 
                  budowlanej, nasi eksperci są gotowi, aby Ci pomóc w każdej sytuacji.
                </p>

                <span><strong>Zaplanuj swoją konsultację już dziś!</strong></span><br />
                <p>
                  Nie pozostawaj sam z pytaniami i wątpliwościami! Zarejestruj się na bezpłatne konsultacje 
                  budowlane w DMD Domy i podejmij najlepsze decyzje dotyczące Twojego przyszłego domu. 
                  Dzięki naszym konsultacjom zyskujesz dostęp do fachowej wiedzy, którą możesz wykorzystać, 
                  by Twoja inwestycja przebiegła sprawnie i bez niepotrzebnego stresu.
                </p>

            </div>
            <div className="col-md-4 mt-4">
              <div className="info">
                <ul>
                  <li>
                    <h5>Idealny moment na konsultacje</h5><span><strong>Planujesz budowę domu?:</strong> <br />Potrzebujesz pomocy w sprecyzowaniu swoich potrzeb.<br /><strong>Masz już projekt?:</strong> <br />Zastanawiasz się nad wyborem materiałów lub technologii budowlanych.<br /><strong>Rozpocząłeś już budowę?:</strong> <br />Napotkałeś problemy, które wymagają ekspertyzy i doradztwa.</span>
                  </li>
                  <li>
                    <h5>Jak to działa?</h5><span><strong>Zostaw swój kontakt:</strong> <br />Skorzystaj z <a href="/contact-us">formularza</a> na naszej stronie internetowej.<br /><strong>Odezwiemy się do Ciebie w ciągu 48 godzin:</strong> <br />Ustalimy dogodny termin i formę konsultacji.<br /><strong>Skorzystaj z wiedzy naszych ekspertów:</strong> <br />Zaplanuj budowę domu z pełnym spokojem.</span>
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
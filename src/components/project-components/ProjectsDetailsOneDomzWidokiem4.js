import ZoomableImage from '../../supportscripts/ZoomableImage';
import { Link } from 'react-router-dom';
import RelatedProjectsDomzWidokiem4 from '../../elements/RelatedProjectsDomzWidokiem4';

const ProjectsDetailsOne = () => { 
    return(
    <>
    {/* Projects Section*/}
    <section className="single-portfolio-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12 p-b30">            
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-02-1920x1075-DomzWidokiem4-0.png" alt="Thumb" />
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="project-thumb">
                <ZoomableImage src="images/project/bl-01-1920x1075-DomzWidokiem4-0.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-md-8 det-content">
              <h3>Budowa Domu z Widokiem 4: Nowoczesna Willa dla Komfortowej Rodziny</h3>
              <p>
                Projekt Domu z Widokiem 4 to jedna z wersji popularnego projektu Domu z Widokiem, który z powodzeniem realizujemy. Ten nowoczesny, wygodny dom oferuje komfortowe warunki dla rodziny sześcioosobowej, a dzięki elastyczności adaptacji, można go dostosować do trudnych warunków działki. Koszt budowy domu z Widokiem 4 jest atrakcyjny, co sprawia, że jest to jedna z najczęściej wybieranych opcji z oferty MG Projekt.
                <br />
                Dom z Widokiem 4 to harmonijna mieszanka nowoczesności, funkcjonalności i elastyczności, tworząca przestrzeń idealną dla zadowalającego życia rodzinnego.
              </p>
              <span><strong>Realizacje i Doświadczenie</strong></span><br />
              <p>              
                Dom z Widokiem 4 to projekt, który już wielokrotnie z sukcesem zrealizowaliśmy, a różnice między poszczególnymi adaptacjami są niewielkie. Posiadamy bogate doświadczenie w budowie tego typu domów, a nasze ekipy doskonale znają zastosowane technologie. Jedna z udanych realizacji miała miejsce w zachodniej Warszawie, w Izabelinie.
              </p>

              <span><strong>Dom z Widokiem 4 – Nietechniczny Opis</strong></span><br />
              <p>
                Dom z Widokiem 4 została zaprojektowana z myślą o rodzinie sześcioosobowej, ale łatwo dostosować ją do mniejszej liczby domowników. To idealne rozwiązanie również dla nieforemnej działki lub takiej, która jest niekorzystnie ustawiona. Charakterystyczną cechą bryły budynku jest kształt litery "T", w skład którego wchodzi część główna i przyległy garaż na dwa samochody.
              </p>

              <span><strong>Parter</strong></span><br />
              <p>              
                Parter domu został podzielony na dwie części, oddzielone linią sieni. Po lewej stronie znajduje się garaż i pomieszczenia gospodarcze, natomiast po prawej stronie ulokowane są pomieszczenia wykorzystywane przez domowników. Duży salon z otwartą przestrzenią nad nim, taras przyległy do całego boku budynku, kuchnia z wyspą oraz jadalnia to centralne elementy parteru. Dodatkowo, znajduje się tu również pokój lub gabinet.
              </p>
              <span><strong>Piętro</strong></span><br />
              <p>              
                Piętro zostało starannie zaplanowane z centralnie usytuowanym holem. Znajdują się na nim dwie mniejsze sypialnie od strony ogrodu oraz główna sypialnia z łazienką i garderobą, usytuowana na froncie budynku. Ponadto, na piętrze znajduje się niewielki strych nad garażem, nie połączony z resztą piętra.
              </p>
              <h4><strong>Technologie wykorzystywane w budowie</strong></h4>
                <ul>
                  <li>• Konstrukcja fundamentów i ścian fundamentowych – bloczki i ławy betonowe</li>
                  <li>• Ściany zewnętrzne – pustaki porotherm 25 i styropian</li>
                  <li>• Strop (parter i piętro) – monolit żelbetowy</li>
                  <li>• Elewacje – tynki cienkowarstwowe na styropianie</li>
                  <li>• Dach – dachówka ceramiczna</li>
                </ul>
              <br />
              <h4><strong>Opis Domu z Widokiem 4</strong></h4>
                <ul>
                    <li>Dom z Widokiem 4 jest nowoczesną konstrukcją piętrową dla 4-6 osób</li>
                    <li>Przewidziano w nim garaż na 2 auta</li>
                    <li>Posiada 3 sypialnie, wszystkie na piętrze</li>
                    <li>W projekcie są 2 łazienki na piętrze i jedna na parterze</li>
                    <li> Nad salonem pojawia się otwarta przestrzeń</li>
                    <li><strong>PARTER:</strong> pokój dzienny 53,23 m², jadalnia 19,98 m², kuchnia 19,61 m², hol ze spiżarnią (24,68 m² + 2,74 m²), gabinet 14,35 m², łazienka 7,59 m², kotłownia 9,60 m², sień 7,57 m², garaż 42,00 m², pomieszczenie gospodarcze 15,40 m²</li>
                    <li><strong>PIĘTRO:</strong> hol 17,15 m², antresola 17,47 m², dwie sypialnie 16,54 m² + 15,85 m², łazienka wspólna 11,37 m², sypialnia z łazienką i garderobą (17,66 m² + 15,54 m² + 7,58 m²), strych nad garażem 16,16 m²</li>
                    <li>Powierzchnia użytkowa: 285,31 m²</li>
                    <li>Wysokość domu z podmurówką: 9,44 m</li>
                    <li>Szerokość budynku: 21,42 m</li>
                    <li>Długość budynku: 17,71 m</li>
                    <li>Minimalna szerokość działki: 30,30 m</li>
                    <li>Minimalna długość działki: 25,71 m</li>
                    <li>Powierzchnia całkowita: 441,87 m²</li>
                </ul>
              <div className="portfolio-tags"></div>
              <div className="blog-nav clearfix">
                <Link to="/single-project-WillaMalibu" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-project-DomzWidokiem" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
                    Koszt realizacji <span><h1><strong>881,211</strong> ZŁ</h1></span>
                  </li>
                  <li></li>
                  </ul>
                    <li>
                      <p><ZoomableImage src="images/project/bl-04-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-05-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-06-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-07-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-08-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-09-750x430-DomzWidokiem4.png" alt="blog" /></p>
                    </li>
                    <li>
                    <p><ZoomableImage src="images/project/bl-10-750x430-DomzWidokiem4.png" alt="blog" /></p>
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

    <RelatedProjectsDomzWidokiem4 />

    </>
    )
}

export default ProjectsDetailsOne;
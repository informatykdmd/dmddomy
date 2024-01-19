import React from 'react';
// import { Link } from 'react-router-dom';
// import BlogCommentForm from '../../elements/BlogCommentForm';

const BlogDetailsFullwidthArchitekciMAG = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Architekci MAG</h3>
                  <h5>Relacje</h5>
                  <p>
                    Jesteśmy niewielkim zespołem architektów, inżynierów i projektantów. Wierzymy w pracę z ludźmi, 
                    którzy faktycznie realizują projekt, w taki sposób aby klient miał kontakt z twórcą od wizji 
                    po jej realizację. Cenimy wypracowane relacje wewnętrzne i zewnętrzne. Wypracowane relacje 
                    z inwestorami owocują dobrą współpracą przez lata. 
                  </p>
                  
                </div>
                <blockquote>
                  <p> 
                    “ Dla nas, projektowanie jest czymś więcej niż tworzeniem pięknych wizualizacji. To zrozumienie 
                    potrzeb klienta, estetyki i atmosfery, z którą się identyfikuje, dzielenie się wiedzą 
                    i zdobytymi doświadczeniami. To prawdziwa pasja tworzenia unikalnych i indywidualnych koncepcji 
                    ale osadzona w realistycznych ramach umożliwiających ich dalszą realizację. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <h5>Wiedza i doświadczenie</h5>
                    <p>
                      Dzielimy się naszymi kompetencjami w prowadzeniu przez skomplikowany proces administracyjny. 
                      Przekazujemy wiedzę o najnowszych technologiach, materiałoznawstwie jak również ekologii 
                      i zrównoważonym rozwoju. Twórczość i kreatywność mogą być elastyczne, budżety czasami nie. 
                      Podchodzimy realistycznie do tego co jest konieczne by dostarczyć najlepszy rezultat 
                      i jesteśmy szczerzy w kontekście kosztów i dostępnych opcji.
                    </p>
                    <h5>Specjalizacje</h5>
                    <p className="box-letter">
                      Specjalizujemy się w projektowaniu budynków mieszkalnych jedno i wielorodzinnych. 
                      Modernizacja historycznych obiektów, również tych objętych ochroną konserwatorską jest 
                      naszą mocną stroną. Posiadamy doświadczenia z zakresu architektury wnętrz prywatnych 
                      i publicznych. Szczycimy się ilością zrealizowanych obiektów. 
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logomag.png" alt="" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://magarchitekci.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/MagArchitects/" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.youtube.com/channel/UCOBslw4dtjOtZBFQ5DPraFQ" rel="noreferrer" target="_blank"><i className="fa fa-youtube" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/mag_architekci/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogDetailsFullwidthArchitekciMAG;
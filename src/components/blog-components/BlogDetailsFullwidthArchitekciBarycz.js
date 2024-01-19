import React from 'react';
// import { Link } from 'react-router-dom';
// import BlogCommentForm from '../../elements/BlogCommentForm';

const BlogDetailsFullwidthArchitekciBarycz = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Biuro Architektoniczne Barycz i Saramowicz</h3>
                  
                  <p>
                    Jesteśmy cenionymi architektami, założycielami Biura Projektów Barycz i Saramowicz. 
                    Specjalizujemy się w projektowaniu różnorodnych budynków, takich jak architektura 
                    mieszkaniowa, budynki użyteczności publicznej, przemysłowe i handlowe, a także wnętrza. 
                    Zajmujemy się pełnym procesem inwestycyjnym, obejmującym planowanie, projektowanie 
                    architektoniczno-budowlane, aranżację wnętrz oraz nadzór autorski nad procesem budowlanym.
                  </p>
                  
                </div>
                <blockquote>
                  <p> 
                    “ Projektujemy i realizujemy inwestycje z myślą, aby piękno stanowiło esencję celowości, 
                    tworząc harmonię pomiędzy formą a funkcją. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <p>
                      Nasze biuro zatrudnia 24 projektantów różnych specjalizacji, takich jak architekci, 
                      architekci wnętrz, konstruktorzy i inni. Zdobylismy wiele prestiżowych nagród 
                      architektonicznych, w tym Nagrodę Główną SARP Projekt Roku i Nagrodę V Międzynarodowego 
                      Biennale Architektury.
                    </p>
                    <p>
                      Ważniejsze projekty obejmują zespoły apartamentów, hotele, budynki biurowo-mieszkalne, 
                      rezydencje mieszkalne, centra rekreacyjne i inne. Wśród naszych osiągnięć znajduje się 
                      również udział w tworzeniu kierunku "Architektura i Urbanistyka" w Krakowskiej Szkole 
                      Wyższej im. Frycza Modrzewskiego, gdzie prowadzimy mistrzowską klasę projektową.
                    </p>
                    <p className="box-letter">
                      Jako architekci wyróżniamy się nie tylko wysokim poziomem fachowości, ale także 
                      zaangażowaniem w rozwój branży architektonicznej poprzez edukację. Jesteśmy także 
                      współzałożycielami kierunku "Architektura i Urbanistyka" w Krakowskiej Szkole Wyższej 
                      im. Frycza Modrzewskiego. Mottem naszej działalności jest dbałość o estetykę i 
                      funkcjonalność, co widoczne jest w licznych projektach, które tworzymy.
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logobarycz.png" alt="" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="http://http://www.barycz-saramowicz.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
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

export default BlogDetailsFullwidthArchitekciBarycz;
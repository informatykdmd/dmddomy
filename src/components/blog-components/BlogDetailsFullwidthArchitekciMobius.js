import React from 'react';
// import { Link } from 'react-router-dom';
// import BlogCommentForm from '../../elements/BlogCommentForm';

const BlogDetailsFullwidthArchitekciMobius = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Przemek Olczyk - Mobius Architekci</h3>
                  
                  <p>
                    Biuro architektoniczne Mobius wyróżnia się kompleksowym podejściem do projektowania, 
                    oferując usługi w pełnym zakresie architektonicznym. Nasza misja jest ukierunkowana 
                    na odnajdywanie fragmentów unikalności i oryginalności w obszarze architektury współczesnej. 
                    Dążymy do tworzenia niekonwencjonalnych form, przekształcania pomysłów w konkretne kształty 
                    oraz formy w emocje.
                  </p>
                  
                </div>
                <blockquote>
                  <p> 
                    “ Naszym celem jest odnajdywanie fragmentów unikalności i oryginalności w obszarze 
                    architektury współczesnej. Powoływanie do istnienia niekonwencjonalnych form. 
                    Przeobrażanie pomysłów w kształty, a form w emocje. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <p>
                      Współpracujemy wyłącznie z renomowanymi biurami inżynierskimi, co pozwala nam zapewnić 
                      kompleksowe podejście do każdego projektu. Nasz zespół składa się z doświadczonych 
                      architektów o różnorodnych umiejętnościach i specjalizacjach, co pozwala nam sprostać 
                      różnorodnym wymaganiom klientów. 
                    </p>
                    <p className="box-letter">
                      Nieograniczone możliwości lokalizacyjne to kolejna cecha, która wyróżnia nasze biuro. 
                      Realizujemy projekty na terenie całej Polski i Europy, co umożliwia nam dostosowanie 
                      się do różnych warunków klimatycznych, kulturowych i urbanistycznych. Bez względu na 
                      lokalizację, nasze projekty zawsze odzwierciedlają unikalne cechy otoczenia, w którym 
                      są realizowane.
                    </p>
                    <p>
                      Mobius to nie tylko biuro architektoniczne, ale także miejsce, gdzie pasja, innowacja 
                      i profesjonalizm spotykają się, tworząc projekty, które nie tylko spełniają oczekiwania 
                      klientów, ale również stanowią inspirację dla całej branży architektonicznej.
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logomobius.png" alt="blog" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://mobius.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/mobiusarchitekci/" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/mobius_architekci/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
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

export default BlogDetailsFullwidthArchitekciMobius;
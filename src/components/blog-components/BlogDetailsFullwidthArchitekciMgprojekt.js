import React from 'react';


const BlogDetailsFullwidthArchitekciMgprojekt = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                <div className="det-content">
                  <h3>MG Projekt Pracownia Architektoniczna</h3>
                  <h5>Projekty domów</h5>
                  <p>
                    Projekty domów jednorodzinnych z autorskiej Pracowni Architektonicznej MGProjekt to gwarancja udanej 
                    budowy - od początku działalności, czyli od 1998 roku zaufało nam już kilkadziesiąt tysięcy polskich rodzin!
                  </p>
                </div>
                <blockquote>
                  <p> 
                    “ Jako jedna z największych pracowni architektonicznych opracowujemy projekty domów dla potrzeb budownictwa 
                    jednorodzinnego - są to zarówno gotowe projekty domów dostępne od ręki, jak i projekty domów na indywidualne 
                    zamówienie. Indywidualny projekt domu dopasowany jest do wymagań i potrzeb inwestora - każdy może 
                    z naszą pracownią stworzyć swój wymarzony dom.  ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <h5>Idealny projekt budowlany domu jednorodzinnego</h5>
                    <p>
                      Dom jednorodzinny jest nie tylko dachem nad głową dającym schronienie domownikom, lecz przede wszystkim miejscem, 
                      w którym żyją we własnym domu osoby darzące się wzajemnie miłością i troską.
                    </p>
                    <p className="box-letter">
                      Bez wypełnienia domostwa rodzinną atmosferą i przytulnością dom staje się jedynie konstrukcją czterech ścian.
                    </p>
                    <p>
                      Funkcjonalność gotowych projektów domów oraz napełnienie budynku swojego rodzaju magią to klucz do tego, 
                      aby przyszły dom stał się przyjaznym i ciepłym gniazdkiem, a życie we własnym domu było czystą przyjemnością.
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logomg.png" alt="" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.mgprojekt.com.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/mgprojekt" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.youtube.com/mgprojekt" rel="noreferrer" target="_blank"><i className="fa fa-youtube" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/mgprojekt/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://twitter.com/mgprojekt/" rel="noreferrer" target="_blank"><i className="fa fa-twitter" /></a>
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

export default BlogDetailsFullwidthArchitekciMgprojekt;
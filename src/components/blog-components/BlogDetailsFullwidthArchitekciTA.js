import React from 'react';

const BlogDetailsFullwidthArchitekciTA = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Trzop Architekci </h3>
                  
                  <p>
                    Zespół projektowy prowadzony przez Bartosza Trzopa, składa się z kreatywnych i doświadczonych projektantów, 
                    dla których architektura to nie tylko praca.
                  </p>
                  <p>
                    Główna gałąź działalności pracowni Trzop Architekci to projekty przestrzeni biurowych dla największych 
                    rodzimych i zagranicznych korporacji na polskim rynku. Zrealizowaliśmy już blisko 300 000 mkw powierzchni 
                    biurowych, a wśród naszych klientów są takie firmy jak Google, Microsoft, Honeywell, Santander czy L’Oréal. 
                    Mniejszą, ale równie ważną część stanowią projekty kubaturowe, wśród których można znaleźć zarówno budynki 
                    biurowe, jak i domy jednorodzinne czy rezydencje. TA jest jedną z kilku pracowni, która tworzyła 
                    Centrum Praskie Koneser, projektując w nim dwa budynki i centrum wystawowe.
                  </p>
                </div>
                <blockquote>
                  <p> 
                    “ Zakładamy, że projekt budynku czy też wnętrza, ma nie tylko spełniać oczekiwania inwestora, 
                    ale także wpływać na poprawę jakości życia i zdrowia użytkowników przez zaproponowane rozwiązania 
                    i materiały. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <p>
                      Ważną ideą kultywowaną przez projektantów TA jest zrównoważony rozwój. Bardzo dużą rolę przywiązujemy 
                      do ekologii, a co za tym idzie, zarówno doboru odpowiednich materiałów, jak i energooszczędnych 
                      i zdrowych systemów dla budynku. Większość projektów w pracowni powstaje wg. zasad certyfikacji 
                      LEED czy BREEAM. Także projekty przestrzeni biurowych, w oparciu o myśl tworzenia maksymalnie 
                      zdrowego i przyjaznego środowiska pracy, oparte są  o zasady Well Certificate.
                    </p>
                    <p className="box-letter">
                      Ważną cechą naszych projektów jest również elastyczność projektowanej przestrzeni. 
                      W obecnie szybko zmieniającym się świecie, sposobie życia i pracy, ważne jest, żeby 
                      budynek mógł się przystosować do nowej funkcji lub tej samej funkcji wykonywanej w odmienny sposób. 
                      Jest to bardzo istotny element zwłaszcza przy projektowaniu biur, gdzie procesy organizacyjne, 
                      a zatem również i przestrzeń, muszą nadążać nad innowacjami technologicznymi i zmianą sposobu pracy.  
                      Biuro ma dzisiaj odzwierciedlać kulturę organizacji, integrować ją i wspierać ale również 
                      inspirować pracowników i dostosowywać przestrzeń do nowej rzeczywistości, sposobów komunikacji 
                      i strategii biznesowych.
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logota.png" alt="blog" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.trzoparchitekci.pl/pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/trzoparchitekci" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.youtube.com/mgprojekt" rel="noreferrer" target="_blank"><i className="fa fa-linkedin" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/trzoparchitekci/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
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

export default BlogDetailsFullwidthArchitekciTA;
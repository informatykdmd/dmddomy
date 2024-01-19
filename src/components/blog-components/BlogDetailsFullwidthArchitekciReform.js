import React from 'react';


const BlogDetailsFullwidthArchitekciReform = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                
                <div className="det-content">
                  <h3>Reform Architekt</h3>
                  
                  <p>
                    Zanim rozpocznę pracę nad projektem – zawsze muszę zobaczyć miejsce, w którym dana bryła 
                    ma stanąć. Na to, jak finalnie będzie wyglądał projekt wpływa wiele czynników, w tym 
                    także otoczenie. Zależy mi, żeby obiekt wpisywał się w to, co go otacza i tworzył spójną całość.
                  </p>
                  
                </div>
                <blockquote>
                  <p> 
                    “ Za dużo od siebie i od innych nie wymagam. Jedynie 100% perfekcji. ” <br />
                    <p style={{textAlign: 'right'}}>Marcin Tomaszewski</p>
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <p>
                      Kolejnym krokiem jest dla mnie poszukiwanie inspiracji, których nigdy nie traktuję jeden do jeden. 
                      Zawsze staram się przełożyć je na język architektoniczny i zadbać o to, żeby nie były one wprost 
                      interpretowane. Dzięki temu każdy z moich projektów jest tak inny, nieoczywisty i perfekcyjny w każdym calu.
                    </p>
                    <p className="box-letter">
                      Projekty, które powstają w mojej pracowni są dokładnie tymi, z którymi sam się utożsamiam. 
                      Nigdy nie projektuję wbrew temu, co mi się podoba i co czuję.
                    </p>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/architekci/bl-09-750x430-logoreform.png" alt="" />
                    </div>
                  </div>
                </div>
                {/*Social Box*/}
                <div style={{display: 'flex'}}>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://reformarchitekt.pl/" rel="noreferrer" target="_blank"><i className="fa fa-home" /></a>
                  </div>
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.facebook.com/reformarchitekt/" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a>
                  </div>
                  
                  <div style={{marigin : '8px', padding : '8px', background : 'none', cursor: 'pointer', fontSize: 25 }}>
                    <a href="https://www.instagram.com/reformarchitekt.pl/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
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

export default BlogDetailsFullwidthArchitekciReform;
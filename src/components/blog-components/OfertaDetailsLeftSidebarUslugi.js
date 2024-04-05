import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLeftUslugi from '../../elements/SidebarLeftUslugi';
import ProjectsTwo from '../section-components/ProjectsTwo';

const BlogDetailsLeftSidebar = () => {
  const TITLE = `Buduj z Nami - Najgorętsze Trendy w Naszej Ofercie Głównej`;
  const CONTENT_MAIN = `
    Z radością przedstawiamy naszą ofertę budowy domów parterowych z projektów gotowych, dostosowanych 
    do różnorodnych potrzeb naszych Klientów. Nasza firma zyskała uznanie dzięki realizacji 
    kilkunastu efektownych, funkcjonalnych domów parterowych o zróżnicowanych rozmiarach. Oferujemy zarówno 
    domy małe, idealne dla tych, którzy pragną intymnej przestrzeni, jak i domy parterowe reprezentacyjne, 
    dostojne i obszerne.`;
  const HEADER_FOTO = `images/offers/bl-09-750x430-MalePerly1.png`;
  const handleShareClickFB = () => {
    const shareUrl = "https://www.facebook.com/sharer/sharer.php";
    const title = encodeURIComponent(TITLE);
    const description = encodeURIComponent(CONTENT_MAIN);
    const imageUrl = encodeURIComponent("https://dmddomy.pl/" + HEADER_FOTO);
    const url = encodeURIComponent(`https://dmddomy.pl/`);

    window.open(`${shareUrl}?u=${url}&title=${title}&description=${description}&picture=${imageUrl}`, '_blank');
  };

  const handleShareClickTwitter = () => {
    const shareUrl = "https://twitter.com/intent/tweet";
    const text = encodeURIComponent(CONTENT_MAIN);
    const url = encodeURIComponent(`https://dmddomy.pl/oferta-poddasze`);
  
    window.open(`${shareUrl}?text=${text}&url=${url}`, '_blank');
  };
  
  function handleDownload(e) {
    e.preventDefault(); 
    // Pobieranie pliku PDF
    const link = document.createElement('a');
    link.href = '/downloads/dmd_domy_stodoly_download.pdf'; 
    link.download = 'dmd_domy_stodoly_download.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-8 order-md-2">
              <div className="blog-detail mt-30">
                
            <div className="det-content">
                <h3>Usługi dodatkowe - Zwiększ potencjał swojej budowy</h3>
                <blockquote>
                    <p>
                        Rozpoczynając budowę domu, stajesz przed wieloma wyzwaniami. Oferujemy profesjonalne wsparcie 
                        na każdym etapie - począwszy od przygotowania terenu, aż po finalne prace. Nasza pierwsza 
                        usługa, koparka kołowa, to tylko początek szerokiego zakresu wsparcia, które planujemy oferować.
                    </p>
                </blockquote>
                <p>
                    Nasze usługi dodatkowe są zaprojektowane tak, aby zapewnić Ci elastyczność i wsparcie w kluczowych 
                    momentach budowy Twojego domu. Obecnie oferujemy specjalistyczne usługi koparką kołową, które 
                    obejmują wykopy pod fundamenty, niwelację terenu, a także przygotowanie do instalacji kanalizacyjnych 
                    i wodociągowych. Te prace wymagają precyzji i doświadczenia, dlatego zlecając je nam, możesz być pewny, 
                    że wszystko zostanie wykonane z najwyższą starannością i zgodnie z planem budowy.
                </p>
                <p>
                    W przyszłości planujemy rozszerzyć naszą ofertę o kolejne usługi, które będą obejmować szeroki 
                    zakres prac związanych z przygotowaniem i realizacją budowy domu. Nasz zespół to specjaliści 
                    z wieloletnim doświadczeniem, gotowi sprostać nawet najbardziej wymagającym zadaniom.
                </p>      
            </div>

            <blockquote>
                <p>
                    "Z nami Twoja budowa nabierze tempa. Nasze usługi dodatkowe to gwarancja jakości i efektywności, 
                    kiedy najbardziej jej potrzebujesz."
                </p>
            </blockquote>

            <div className="det-list">
              <div className="row">
                <div className="col-sm-7">
                    <h3>Dlaczego warto skorzystać z naszych usług dodatkowych?</h3>
                    <ul>
                        <li>
                            <p>Doświadczenie i precyzja: Nasz zespół specjalistów zapewnia, że wszystkie prace zostaną wykonane z największą starannością i zgodnie z najnowszymi standardami budowlanymi.</p>
                        </li>
                        <li>
                            <p>Elastyczność: Oferujemy możliwość dostosowania zakresu usług do indywidualnych potrzeb Twojego projektu, co pozwala na optymalizację czasu i kosztów.</p>
                        </li>
                        <li>
                            <p>Zaangażowanie: Jesteśmy z Tobą na każdym etapie projektu, oferując wsparcie i doradztwo, by maksymalnie ułatwić realizację Twojego marzenia o idealnym domu.</p>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-5">
                    <p><img src="images/offers/bl-09-750x430-Uslugi1.png" alt="" /></p>
                    <p><img src="images/offers/bl-09-750x430-Uslugi2.png" alt="" /></p>
                    <p><img src="images/offers/bl-09-750x430-Uslugi3.png" alt="" /></p>
                </div>
              </div>
            </div>

                {/* <div className="blog-tags">
                  <div className="row">
                    <div className="col-md-4 text-right">
                      <span className="title">Udostępnij :</span>
                      <button onClick={handleShareClickFB} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook" />
                      </button>
                      <button onClick={handleShareClickTwitter} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter" />
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-8">
                  <span className="title">Sprawdź również : </span>
                  <Link to="/oferta-parterowe" className="tag">Domy parterowe</Link>
                  <Link to="/oferta-poddasze" className="tag">Domy z poddaszem</Link>
                  <Link to="/oferta-pietrowe" className="tag">Domy piętrowe</Link>
                  <Link to="/oferta-wille" className="tag">Wille</Link>
                </div>
                {/* download file */}
                {/* <div className="col-md-8">
                  <span className="title">Pobierz Domy Typu Stodoła w PDF: </span>
                  <p style={{padding: "40px"}}>
                    <a 
                      onClick={handleDownload} 
                      style={{fontSize: "60pt", color: "#009e2a", marginLeft: "80px"}}>
                        <i class="fa fa-download"></i>
                    </a>
                  </p>
                </div> */}
              </div>
            </div>

            <SidebarLeftUslugi />

          </div>
          <ProjectsTwo />
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsLeftSidebar;
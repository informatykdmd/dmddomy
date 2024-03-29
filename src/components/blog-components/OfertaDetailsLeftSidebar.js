import React from 'react';
import { Link } from 'react-router-dom';
// import BlogCommentForm from '../../elements/BlogCommentForm';
import SidebarLeftMalePerly from '../../elements/SidebarLeftMalePerly';
import ProjectsTwo from '../section-components/ProjectsTwo';

const BlogDetailsLeftSidebar = () => {
  const TITLE = `Buduj z Nami - Najgorętsze Trendy w Naszej Ofercie Głównej`;
  const CONTENT_MAIN = `
    Z radością przedstawiamy naszą ofertę budowy domów z projektów gotowych, dostosowanych 
    do różnorodnych potrzeb naszych Klientów. Nasza firma zyskała uznanie dzięki realizacji 
    kilkunastu efektownych, funkcjonalnych domów o zróżnicowanych rozmiarach. Oferujemy 
    zarówno domy małe, idealne dla tych, którzy pragną intymnej przestrzeni, jak i domy 
    reprezentacyjne, dostojne i obszerne.`;
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
    const url = encodeURIComponent(`https://dmddomy.pl/oferta-post-left-sidebar`);
  
    window.open(`${shareUrl}?text=${text}&url=${url}`, '_blank');
  };
  
  const handleShareClickInstagram = () => {
    const url = `https://www.instagram.com/`;
  
    window.open(url, '_blank');
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
                  <h3>Buduj z Nami <br />Najgorętsze Trendy w Naszej Ofercie Głównej</h3>
                  <blockquote>
                  <p>
                    Z radością przedstawiamy naszą ofertę budowy domów z projektów gotowych, dostosowanych 
                    do różnorodnych potrzeb naszych Klientów. Nasza firma zyskała uznanie dzięki realizacji 
                    kilkunastu efektownych, funkcjonalnych domów o zróżnicowanych rozmiarach. Oferujemy zarówno 
                    domy małe, idealne dla tych, którzy pragną intymnej przestrzeni, jak i domy reprezentacyjne, 
                    dostojne i obszerne.
                  </p>
                  </blockquote>
                  <p>
                    Wychodząc naprzeciw oczekiwaniom naszych Klientów, proponujemy zoptymalizowane ceny, oparte na 
                    naszym bogatym doświadczeniu wynikającym z wielokrotnych realizacji projektów w Warszawie 
                    i okolicy. Specjalizujemy się w budowie domów z renomowanych projektów, takich jak Opal, 
                    Topaz, Kasjopea, Szafir, Helios i wielu innych, prezentując bogactwo opcji zarówno dla 
                    domów piętrowych, parterowych z poddaszem użytkowym, jak i tych z możliwością adaptacji strychu.
                  </p>
                  <p>
                    Nasza oferta obejmuje domy o różnych metrażach, od małych po przestronne rezydencje, 
                    z garażami jedno lub dwustanowiskowymi, a także alternatywnymi rozwiązaniami, takimi 
                    jak dodatkowa przestrzeń sypialna. Dzięki liczbowym sukcesom w realizacjach, 
                    gwarantujemy, że koszt budowy domu z naszym doświadczonym zespołem będzie w optymalnej 
                    relacji do jakości.
                  </p>                  
                </div>
                <blockquote>
                  <p> “ Zapraszamy Cię do fascynującej podróży przez świat gotowych projektów, gdzie mistrzowska jakość spotyka się z głębokim doświadczeniem, formując niezrównane przestrzenie gotowe na spełnienie marzeń każdego Klienta. Nasza firma to nie tylko budowa domów, lecz tworzenie unikalnych historii w betonie i cegle. Każdy projekt, począwszy od malutkich domów po reprezentacyjne rezydencje, jest rezultatem pasji, zaangażowania i ponadprzeciętnego kunsztu. Pragniemy, aby Twój dom nie był jedynie miejscem zamieszkania, lecz prawdziwym odzwierciedleniem Twoich marzeń i aspiracji. Odkryj z nami przestrzeń, gdzie każdy detal ma znaczenie, a jakość staje się synonimem naszej misji.  ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                      <ul>
                        <li>
                          <p> Pasja w Budowie: Odkryj z nami pasję w tworzeniu niepowtarzalnych przestrzeni, gdzie jakość jest naszym priorytetem. Każdy projekt to nie tylko budowa domu, ale także realizacja marzeń i aspiracji. </p>
                        </li>
                        <li>
                          <p> Doświadczenie, Które Mówi Głośno: Nasze bogate doświadczenie widoczne jest w każdym detalu. Zderzenie jakości z głębokim fachowym know-how tworzy niezrównane przestrzenie, które stają się żywą opowieścią o naszych umiejętnościach.</p>
                        </li>
                        <li>
                          <p> Projekty Dla Ciebie: Oferujemy różnorodność gotowych projektów, dopasowanych do indywidualnych potrzeb. Niezależnie od tego, czy marzysz o malutkim domu czy reprezentacyjnej rezydencji, każdy projekt jest stworzony z myślą o spełnieniu Twoich marzeń.</p>
                        </li>
                        <li>
                          <p> Dom jako Historia: Nasza firma nie tylko buduje domy, lecz tworzy historie w betonie i cegle. Chcemy, aby Twój dom był wyjątkowym odzwierciedleniem Twojej osobowości. Odkryj z nami przestrzeń, gdzie dbałość o detale i jakość stają się integralną częścią naszej misji.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <p><img src="images/offers/bl-09-750x430-MalePerly1.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-MalePerly2.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-MalePerly3.png" alt="blog" /></p>
                    </div>
                  </div>
                </div>
                <div className="blog-tags">
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
                      <button onClick={handleShareClickInstagram} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <span className="title">Sprawdź również : </span>
                  <Link to="/oferta-post-left-sidebar-ER" className="tag">Eleganckie Rezydencje: Domy do 370 m2</Link>
                </div>
              </div>
            </div>

            <SidebarLeftMalePerly />

          </div>
          <ProjectsTwo />
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsLeftSidebar;
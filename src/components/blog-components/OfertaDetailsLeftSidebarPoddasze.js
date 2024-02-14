import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLeftPoddasze from '../../elements/SidebarLeftPoddasze';
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
    const url = encodeURIComponent(`https://dmddomy.pl/oferta-post-left-sidebar`);
  
    window.open(`${shareUrl}?text=${text}&url=${url}`, '_blank');
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
                    <h3>Rozpocznij z Nami Nową Przygodę <br />Najnowsze Koncepcje Domy z Poddaszem</h3>
                    <blockquote>
                        <p>
                            Mamy przyjemność zaprezentować nasze innowacyjne podejście do budowy domów z poddaszem, stworzonych z myślą o różnorodnych oczekiwaniach naszych Klientów. 
                            Nasza firma zdobyła uznanie dzięki realizacji unikalnych, nowoczesnych projektów, oferujących domy z poddaszem w zaskakujących formach i funkcjonalnościach.
                        </p>
                    </blockquote>
                    <p>
                        Idąc na przekór tradycji, proponujemy konkurencyjne ceny oparte na naszym głębokim doświadczeniu w tworzeniu innowacyjnych domów z poddaszem w Warszawie 
                        i okolicy. Specjalizujemy się w budowie domów z poddaszem według nowatorskich projektów, takich jak Loftowa Przestrzeń 2.0, Pionierski 3, czy Nowoczesna Wizja 4.
                    </p>
                    <p>
                        Nasza oferta obejmuje domy z poddaszem o różnych metrażach, od kompaktowych po przestronne rezydencje, 
                        z garażami jedno- lub dwustanowiskowymi, a także alternatywnymi rozwiązaniami, takimi 
                        jak dodatkowa przestrzeń do pracy. Dzięki naszym osiągnięciom w projektach, 
                        zapewniamy, że koszt budowy domu z poddaszem z naszym doświadczonym zespołem będzie w doskonałej 
                        relacji do oferowanej jakości.
                    </p>                  
                </div>

                <blockquote>
                    <p>
                        “Zapraszamy Cię do ekscytującej podróży przez świat nowoczesnych projektów domów z poddaszem, 
                        gdzie nowatorska jakość łączy się z głębokim doświadczeniem, tworząc wyjątkowe przestrzenie gotowe 
                        na spełnienie marzeń każdego Klienta. Nasza firma to nie tylko budowa domów z poddaszem, 
                        lecz kreowanie unikalnych historii w betonie i cegle. Każdy projekt, od minimalistycznych domów 
                        z poddaszem po ekskluzywne rezydencje z poddaszem, jest rezultatem pasji, zaangażowania i wyjątkowego kunsztu. 
                        Pragniemy, aby Twój dom z poddaszem był nie tylko miejscem zamieszkania, lecz autentycznym odzwierciedleniem 
                        Twoich marzeń i aspiracji. Odkryj z nami przestrzeń, gdzie każdy detal ma znaczenie, a jakość staje się synonimem 
                        naszej misji.”
                    </p>
                </blockquote>

                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    <ul>
                        <li>
                            <p> Innowacje w Konstrukcji Domów z Poddaszem: Poznaj z nami nowoczesne podejście do tworzenia wyjątkowych przestrzeni z poddaszem, 
                            gdzie jakość stoi na pierwszym miejscu. Każdy projekt to nie tylko budowa domu z poddaszem, lecz także spełnienie marzeń 
                            i aspiracji.</p>
                        </li>
                        <li>
                            <p> Doświadczenie Mówiące samo za Siebie: Nasze obszerne doświadczenie widoczne jest w każdym detalu. Połączenie jakości 
                            z głębokim fachowym know-how tworzy niepowtarzalne przestrzenie z poddaszem, które są żywą opowieścią o naszych 
                            umiejętnościach.</p>
                        </li>
                        <li>
                            <p> Projekty Dla Ciebie: Oferujemy różnorodność nowoczesnych projektów z poddaszem, dostosowanych do indywidualnych 
                            potrzeb. Niezależnie od tego, czy marzysz o kompaktowym domu z poddaszem czy ekskluzywnej rezydencji z poddaszem, 
                            każdy projekt jest stworzony z myślą o spełnieniu Twoich marzeń.</p>
                        </li>
                        <li>
                            <p> Dom jako Opowieść: Nasza firma nie tylko buduje domy z poddaszem, lecz tworzy historie w betonie i cegle. Chcemy, 
                            aby Twój dom z poddaszem był wyjątkowym odzwierciedleniem Twojej osobowości. Odkryj z nami przestrzeń, gdzie dbałość 
                            o detale i jakość stają się integralną częścią naszej misji.</p>
                        </li>
                    </ul>
                    </div>

                    <div className="col-sm-5">
                      <p><img src="images/offers/bl-09-750x430-Parterowe1.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-Parterowe2.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-Parterowe3.png" alt="blog" /></p>
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
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <span className="title">Sprawdź również : </span>
                  <Link to="/oferta-parterowe" className="tag">Domy parterowe</Link>
                  <Link to="/oferta-pietrowe" className="tag">Domy piętrowe</Link>
                  <Link to="/oferta-wille" className="tag">Wille</Link>
                  <Link to="/oferta-nowoczesne" className="tag">W nowoczesnej zabudowie</Link>
                </div>
              </div>
            </div>

            <SidebarLeftPoddasze />

          </div>
          <ProjectsTwo />
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsLeftSidebar;
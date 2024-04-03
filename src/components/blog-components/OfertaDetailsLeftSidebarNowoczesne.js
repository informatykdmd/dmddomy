import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLeftNowoczesne from '../../elements/SidebarLeftNowoczesne';
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
                <h3>Odkryj z Nami Nowoczesne Domy - Najnowsze Trendy w Naszej Ofertce, Eleganckie Domy Typu Stodoła</h3>
                <blockquote>
                    <p>
                        Z entuzjazmem prezentujemy naszą ofertę budowy eleganckich domów z gotowych projektów, dostosowanych
                        do różnorodnych oczekiwań naszych Klientów. Nasza firma zdobyła uznanie dzięki realizacji kilku imponujących,
                        funkcjonalnych domów w nowoczenej zabudowie o zróżnicowanych rozmiarach. Oferujemy zarówno mniejsze domy, idealne dla tych,
                        którzy pragną kameralnej jak i reprezentacyjnej przestrzeni.
                    </p>
                </blockquote>
                <p>
                    Wychodząc naprzeciw oczekiwaniom naszych Klientów, proponujemy konkurencyjne ceny oparte na naszym bogatym doświadczeniu
                    wynikającym z licznych realizacji projektów domów w stylu nowoczenym na zachodzie Warszawy i okolicach. Specjalizujemy się
                    w budowie nowoczesnych domów w stylu stodoła, takich jak Sensowny 2, Ekonomiczny 2, Dom Na Praktycznej 2 czy Wymarzony 9.
                </p>
                <p>
                    Nasza oferta obejmuje eleganckie domy o różnych metrażach, od mniejszych po przestronne rezydencje,
                    z garażami na jedno lub dwa stanowiska, a także alternatywnymi rozwiązaniami, takimi jak dodatkowa przestrzeń sypialna.
                    Dzięki liczbowym sukcesom w realizacjach, gwarantujemy, że koszt budowy domu typu stodoła z naszym doświadczonym zespołem
                    będzie w optymalnej relacji do jakości.
                </p>      
            </div>

            <blockquote>
                <p>
                    "Zapraszamy Cię do fascynującej podróży przez świat nowoczesnych projektów, gdzie doskonała jakość
                    spotyka się z głębokim doświadczeniem, formując niezrównane przestrzenie gotowe na spełnienie marzeń każdego Klienta.
                    Nasza firma to nie tylko budowa eleganckich domów, lecz tworzenie unikalnych historii w betonie i drewnie.
                    Każdy projekt, począwszy od skromniejszych domów po reprezentacyjne wille, jest wynikiem pasji, zaangażowania
                    i wyjątkowego kunsztu. Pragniemy, aby Twój dom był nie tylko miejscem zamieszkania, lecz prawdziwym
                    odzwierciedleniem Twoich marzeń i aspiracji. Odkryj z nami przestrzeń, gdzie każdy detal ma znaczenie, a jakość staje się
                    synonimem naszej misji."
                </p>
            </blockquote>

            <div className="det-list">
              <div className="row">
                <div className="col-sm-7">
                    <ul>
                        <li>
                            <p>Pasja w Budowie Eleganckich Domów w Stylu Stodoła: Odkryj z nami pasję w tworzeniu niepowtarzalnych
                            przestrzeni, gdzie jakość jest naszym priorytetem. Każdy projekt to nie tylko budowa
                            domu, ale także realizacja marzeń i aspiracji.</p>
                        </li>
                        <li>
                            <p>Doświadczenie, Które Mówi Głośno: Nasze bogate doświadczenie jest widoczne w każdym detalu.
                            Zderzenie jakości z głębokim fachowym know-how tworzy niezrównane przestrzenie,
                            które stają się żywą opowieścią o naszych umiejętnościach.</p>
                        </li>
                        <li>
                            <p>Projekty Dla Ciebie: Oferujemy różnorodność gotowych projektów, dopasowanych do
                            indywidualnych potrzeb. Niezależnie od tego, czy marzysz o skromniejszym domu czy
                            reprezentacyjnej willi, każdy projekt jest stworzony z myślą o spełnieniu Twoich marzeń.</p>
                        </li>
                        <li>
                            <p>Dom jako Historia: Nasza firma nie tylko buduje eleganckie domy, lecz tworzy
                            historie wielu zadowolonych klientów. Chcemy, aby Twój dom był wyjątkowym odzwierciedleniem
                            Twojej osobowości. Odkryj z nami przestrzeń, gdzie dbałość o detale i jakość stają się integralną
                            częścią naszej misji.</p>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-5">
                    <p><img src="images/offers/bl-09-750x430-Nowoczesne1.png" alt="blog" /></p>
                    <p><img src="images/offers/bl-09-750x430-Nowoczesne2.png" alt="blog" /></p>
                    <p><img src="images/offers/bl-09-750x430-Nowoczesne3.png" alt="blog" /></p>
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
                  <Link to="/oferta-poddasze" className="tag">Domy z poddaszem</Link>
                  <Link to="/oferta-pietrowe" className="tag">Domy piętrowe</Link>
                  <Link to="/oferta-wille" className="tag">Wille</Link>
                </div>
                <div className="col-md-8">
                  <span className="title" style={{marginBottom: "40px"}}>Pobierz Domy Typu Stodoła w PDF: </span>
                  <p>
                    <a 
                      onClick={handleDownload} 
                      style={{fontSize: "60pt", color: "#009e2a", marginLeft: "80px"}}>
                        <i class="fa fa-download"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <SidebarLeftNowoczesne />

          </div>
          <ProjectsTwo />
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsLeftSidebar;
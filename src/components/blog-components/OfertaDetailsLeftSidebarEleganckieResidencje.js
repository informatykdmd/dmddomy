import React from 'react';
import { Link } from 'react-router-dom';

import SidebarLeftEleganckieResidencje from '../../elements/SidebarLeftEleganckieResidencje';
import ProjectsTwo from '../section-components/ProjectsTwo';

const BlogDetailsLeftSidebar = () => {
  const TITLE = `Realizuj z Nami Marzenia - Niezrównane Eleganckie Nowości w Naszej Prestiżowej Ofercie`;
  const CONTENT_MAIN = `
    Z dumą prezentujemy naszą ekskluzywną ofertę domów o imponujących metrażach, obejmującą rezydencje 
    od 200 m2 do imponujących 370 m2. Te wyjątkowe domy reprezentacyjne wyróżniają się przestronnością 
    i okazałością wnętrz. W niektórych z tych eleganckich projektów każda sypialnia posiada swoją 
    prywatną łazienkę, a dodatkowo oferujemy pomieszczenie rekreacyjne dla dodatkowego komfortu.`;
  const HEADER_FOTO = `images/offers/bl-09-750x430-EleganckieRezydencje1.png`;
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
                  <h3>Realizuj z Nami Marzenia <br />Niezrównane Eleganckie Nowości w Naszej Prestiżowej Ofercie</h3>
                  <blockquote>
                  <p>
                    Z dumą prezentujemy naszą ekskluzywną ofertę domów o imponujących metrażach, obejmującą 
                    rezydencje od 200 m2 do imponujących 370 m2. Te wyjątkowe domy reprezentacyjne wyróżniają 
                    się przestronnością i okazałością wnętrz. W niektórych z tych eleganckich projektów każda 
                    sypialnia posiada swoją prywatną łazienkę, a dodatkowo oferujemy pomieszczenie rekreacyjne 
                    dla dodatkowego komfortu.
                  </p>
                  </blockquote>
                  <p>
                    Nasze domy prestiżowe często wymagają większych działek, co podkreśla ich ekskluzywny 
                    charakter. Wyjątkową elegancję potęguje starannie zaprojektowana elewacja, nadająca 
                    każdemu projektowi wyrazisty i imponujący wygląd. Realizacja tych projektów zazwyczaj 
                    wiąże się z większym budżetem, jednak efekt końcowy jest bezcenny dzięki unikalnym 
                    rozwiązaniom i bogactwu przestrzeni.
                  </p>
                </div>
                <blockquote>
                  <p> “ Zapraszamy Cię do odkrycia niezrównanej jakości i wyrafinowanego designu w naszej ofercie domów prestiżowych. Każdy projekt to nie tylko architektoniczna kompozycja, lecz również historia luksusu i elegancji. Nasze doświadczenie w realizacji projektów na terenie Warszawy i okolic pozwala nam dostosować się do najbardziej wyrafinowanych oczekiwań.  ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                      <ul>
                        <li>
                          <p> Elegancja w Detalach: Ponadprzeciętna staranność w każdym detalu sprawia, że nasze domy prestiżowe to prawdziwe dzieła sztuki. Elewacje, wnętrza i funkcjonalność są starannie przemyślane, aby stworzyć niepowtarzalne przestrzenie, które spełnią nawet najbardziej wymagające gusta. </p>
                        </li>
                        <li>
                          <p> Przestrzeń na Marzenia: Tworzymy nie tylko domy, lecz także przestrzenie, w których marzenia nabierają realnego kształtu. Nasze projekty prestiżowe to harmonia elegancji, komfortu i funkcjonalności, zapewniająca doskonałe warunki do spełniania marzeń o wyjątkowym miejscu zamieszkania.</p>
                        </li>
                        <li>
                          <p> Budowa Historii Prestiżu: Nasza firma nie tylko wznosi domy, lecz kreuje historie luksusu i prestiżu w betonie i cegle. Każdy projekt to unikalna opowieść o stylu życia, wyrafinowanych upodobaniach i indywidualnych aspiracjach. Dołącz do nas, aby odkryć przestrzeń, gdzie detale nabierają znaczenia, a jakość staje się synonimem naszej misji kreowania niezapomnianych historii prestiżu.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <p><img src="images/offers/bl-09-750x430-EleganckieRezydencje1.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-EleganckieRezydencje2.png" alt="blog" /></p>
                      <p><img src="images/offers/bl-09-750x430-EleganckieRezydencje3.png" alt="blog" /></p>
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
                  <Link to="/oferta-post-left-sidebar" className="tag">Małe Perły: Domy do 200 m2</Link>
                </div>
              </div>
            </div>
            <SidebarLeftEleganckieResidencje />
          </div>
          <ProjectsTwo />
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsLeftSidebar;
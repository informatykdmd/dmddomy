import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const KATEGORIA = 'Rezydencja Parkowa'; // <<< TYLKO TUTAJ PODAJESZ KATEGORIĘ

const BlogDetailsFullwidth = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const url = `/api/realizacje/domy?kategoria=${encodeURIComponent(KATEGORIA)}&limit=9999&offset=0`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Błąd pobierania realizacji');
        const data = await res.json();
        console.log('API realizacje:', { url, data });
        // BE może zwrócić { items: [...] } albo samą tablicę
        const list = Array.isArray(data) ? data : (data.items || []);
        setItems(list);
      } catch (e) {
        console.error(e);
        setItems([]); // brak danych = brak renderu
      }
    };
    load();
  }, []);

  return (
    <>
      {/*Blog Details Section*/}
      <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">

              {items.map((it, idx) => (
                <div className="blog-detail mt-30" key={idx}>
                  <div className="b-det-img">
                    <ZoomableImage
                      src={it.zdjecie || 'images/realizacje/placeholder-1920x1075.png'}
                      alt="realizations"
                    />
                  </div>
                  <div className="det-content">
                    <h3>{it.tytul_ogloszenia || KATEGORIA}</h3>
                  </div>
                  <blockquote>
                    <p>“ {it.opis || 'Opis w przygotowaniu.'} ”</p>
                  </blockquote>
                </div>
              ))}

              {/* Zostawiasz/wywalasz nawigację wedle uznania */}
              <div className="blog-nav clearfix">
                <Link to="#" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="#" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/*End Blog Details Section */}
    </>
  );
};

export default BlogDetailsFullwidth;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import ZoomableImage from '../../supportscripts/ZoomableImage';

// const BlogDetailsFullwidth = () => {
//     return(
//     <>
//     {/*Blog Details Section*/}
//     <section className="single-blog-section section-padding-all">
//         <div className="default-container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-01-1920x1075-RezydencjaParkowa.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu: Realizacja Projektu Rezydencja Parkowa w Zielonce</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Budowa w Zielonce, prezentujemy etap budowy domu według projektu Rezydencja Parkowa. Archiwalne zdjęcie uchwyciło fazę przed elewacją. To fascynujący moment, kiedy budynek nabiera kształtu, a dbałość o detale nadaje mu charakterystycznego uroku Rezydencji Parkowej ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-02-1920x1075-RezydencjaParkowa.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu obok Starych Babic: Rezydencja Parkowa</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ To archiwalne zdjęcie przeniesie Cię do fazy budowy przed elewacją, patrząc od strony podwórza. Zauważysz filary przed wejściem, które nadają charakter temu eleganckiemu projektowi. Budynek, choć jeszcze nieotynkowany, emanuje potencjałem, a widoczne prace wciąż trwają, wprowadzając nowe życie do tego malowniczego zakątka. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-03-1920x1075-RezydencjaParkowa.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu w Powiecie Zachodnim Warszawskim: Elegancja i Harmonia wg Projektu Rezydencja Parkowa</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Zapraszamy w podróż przez historię budowy domu w Powiecie Zachodnim Warszawskim, gdzie elegancja i harmonia spotykają się w projekcie Rezydencja Parkowa. Na tym archiwalnym zdjęciu, patrząc od strony podwórza, ujrzysz fasynujący etap budowy po elewacji. Na fotografi widać wylewkę schodów do domu. Mimo że prace wciąż trwają, już teraz widać, że zbliżamy się do ukończenia budowy, gdzie estetyka spotyka funkcjonalność. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-04-1920x1075-RezydencjaParkowa.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego: Urok Rezydencji Parkowej w Zielonce</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Ostatnie szlify na drodze do ukończenia budowy domu jednorodzinnego o wyjątkowym charakterze Rezydencji Parkowej w Zielonce. Archiwalne zdjęcie ukazuje fazę po elewacji, gdzie trwają ostatnie prace nad wykończeniem. W tej chwili, na etapie sprzątania po sobie, projekt osiągnął swój pełen urok. To moment przekazania gotowego budynku właścicielowi, który będzie mógł cieszyć się harmonią i elegancją Rezydencji Parkowej w swoim nowym domu. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-nav clearfix">
//                     <Link to="/single-realizacja-RezydencjaLesna" className="blog-prev"><i className="fa fa-angle-left" /></Link>
//                     <Link to="/single-realizacja-DomzWidokiem4" className="blog-next"><i className="fa fa-angle-right" /></Link>
//               </div>
//             </div>
//           </div>
//         </div>
//     </section>
//     {/*End Blog Details Section */}
//     </>
//     )
// }

// export default BlogDetailsFullwidth;
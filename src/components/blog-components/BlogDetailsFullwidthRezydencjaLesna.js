import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const KATEGORIA = 'Rezydencja Leśna'; // <<< TYLKO TUTAJ PODAJESZ KATEGORIĘ

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
//                   <ZoomableImage src="images/realizacje/rl-01-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Rezydencji Leśnej: Harmonia Zaprojektowana na Nowo</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Z dumą prezentujemy zrealizowaną inwestycję, opartą na projekcie Rezydencja Leśna. Na zamieszczonej fotografii z naszego archiwum uwieczniono etap wykończenia budynku podczas pomyślnego procesu budowy. Jesteśmy zadowoleni z rezultatu, który doskonale oddaje wyjątkowy charakter tego projektu. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-02-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Rezydencji Leśnej w Latchorzew: Unikalna Architektura w Twoim Sąsiedztwie</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Zapraszamy do obejrzenia etapu budowy domu zgodnego z projektem Rezydencja Leśna w miejscowości Latchorzew. Na przedstawionej fotografii, wykonanej amatorsko w trakcie trwania prac, ukazana jest faza przed elewacją. Materiały są gotowe do użycia, a rusztowanie stoi gotowe do działania. To fascynujące spojrzenie na proces tworzenia, gdzie każdy szczegół przyczynia się do powstania wyjątkowego domu. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-03-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Elegancja Natury: Budowa Domu wg Projektu Rezydencja Leśna</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Przedstawiamy harmonię elegancji natury w projekcie Rezydencja Leśna. Na tej fotografii możemy podziwiać skończoną bryłę budynku z wyrafinowanymi detalami elewacyjnymi. Równocześnie rozpoczynamy prace nad równieniem terenu pod przepiękny ogród, który dopełni całość. To moment, w którym architektura i otaczająca przyroda łączą się, tworząc niepowtarzalne i urzekające otoczenie domu. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-04-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Rezydencja Leśna w Warszawie Zachodniej</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Rozpoczynamy podróż przez Elegancję Natury z naszym projektem budowy domu według Rezydencji Leśnej. Na załączonej fotografii widoczna jest ukończona bryła budynku, emanująca elegancją i harmonią z otaczającym środowiskiem. Szczegóły elewacyjne podkreślają unikalność projektu. Równocześnie, prace nad równieniem terenu pod ogród zwiastują stworzenie naturalnego, przytulnego otoczenia dla domu, gdzie natura splata się z elegancją architektury. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-05-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego w Starych Babicach</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Z dumą prezentujemy efekt naszej pracy przy budowie domu jednorodzinnego z projektu Rezydencja Leśna w Starych Babicach. Na tym amatorskim, archiwalnym zdjęciu uchwycono gotowy dom, emanujący charakterystycznym stylem projektu. Jednocześnie widoczne są trwające prace ziemne i równanie terenu, przygotowujące podłoże pod zieleń na posesji. To pełne harmonii spojrzenie na etap końcowy, gdzie natura i nowoczesna architektura spotykają się w doskonałej symbiozie. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-06-1920x1075-RezydencjaLesna.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa w Latchorzewie: Faza Realizacji Domu z Projektu Rezydencja Leśna</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Przedstawiamy kolejny etap budowy w Latchorzewie: Fazę Realizacji Domu z Projektu Rezydencja Leśna. Na tym amatorskim, archiwalnym zdjęciu zanotowano zakończenie prac obsadzania okien, a budynek szykuje się do etapu kładzenia elewacji. To chwila, gdy projekt zaczyna nabierać realnych kształtów, a detale architektoniczne zaczynają definiować charakter tego wyjątkowego domu. ”
//                   </p>
//                 </blockquote>
//               </div>
//                 <div className="blog-nav clearfix">
//                   <Link to="/single-realizacja-OpalElegancja" className="blog-prev"><i className="fa fa-angle-left" /></Link>
//                   <Link to="/single-realizacja-RezydencjaParkowa" className="blog-next"><i className="fa fa-angle-right" /></Link>
//                 </div>
//             </div>
//           </div>
//         </div>
//     </section>
//     {/*End Blog Details Section */}
//     </>
//     )
// }

// export default BlogDetailsFullwidth;
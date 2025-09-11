import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const KATEGORIA = 'Dom z Widokiem 4';

const BlogDetailsFullwidth = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const ApiAddress = `${myDatabaseConfig.mySqlUrlorIp}:${myDatabaseConfig.apiPort}`;

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get(
          `https://${ApiAddress}/api/realizacje/domy`,
          { params: { kategoria: KATEGORIA, limit: 9999, offset: 0 } }
        );
        // możliwe kształty odpowiedzi: [{...}], {items:[...]}, [rows, total]
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data?.items)
          ? data.items
          : Array.isArray(data?.[0])
          ? data[0]
          : [];
        setItems(list);
      } catch (e) {
        console.error('Błąd ładowania realizacji:', e);
        setError('Nie udało się pobrać realizacji.');
        setItems([]);
      }
    };
    load();
  }, [ApiAddress]);

  return (
    <>
      <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">

              {error && (
                <div className="alert alert-danger mb-3">{error}</div>
              )}

              {items.map((it, idx) => (
                <div className="blog-detail mt-30" key={idx}>
                  <div className="b-det-img">
                    <ZoomableImage
                      src={it.zdjecie || 'images/realizacje/placeholder-1920x1075.png'}
                      alt={it.tytul_ogloszenia || 'realizations'}
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

              <div className="blog-nav clearfix">
                <Link to="/single-realizacja-RezydencjaParkowa" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-realizacja-Kasjopea" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsFullwidth;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import ZoomableImage from '../../supportscripts/ZoomableImage';

// const KATEGORIA = 'Dom z Widokiem 4'; // <<< TYLKO TUTAJ PODAJESZ KATEGORIĘ

// const BlogDetailsFullwidth = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const url = `/api/realizacje/domy?kategoria=${encodeURIComponent(KATEGORIA)}&limit=9999&offset=0`;
//         const res = await fetch(url);
//         if (!res.ok) throw new Error('Błąd pobierania realizacji');
//         const data = await res.json();
//         console.log('API realizacje:', { url, data });
//         // BE może zwrócić { items: [...] } albo samą tablicę
//         const list = Array.isArray(data) ? data : (data.items || []);
//         setItems(list);
//       } catch (e) {
//         console.error(e);
//         setItems([]); // brak danych = brak renderu
//       }
//     };
//     load();
//   }, []);

//   return (
//     <>
//       {/*Blog Details Section*/}
//       <section className="single-blog-section section-padding-all">
//         <div className="default-container">
//           <div className="row">
//             <div className="col-md-12">

//               {items.map((it, idx) => (
//                 <div className="blog-detail mt-30" key={idx}>
//                   <div className="b-det-img">
//                     <ZoomableImage
//                       src={it.zdjecie || 'images/realizacje/placeholder-1920x1075.png'}
//                       alt="realizations"
//                     />
//                   </div>
//                   <div className="det-content">
//                     <h3>{it.tytul_ogloszenia || KATEGORIA}</h3>
//                   </div>
//                   <blockquote>
//                     <p>“ {it.opis || 'Opis w przygotowaniu.'} ”</p>
//                   </blockquote>
//                 </div>
//               ))}

//               {/* Zostawiasz/wywalasz nawigację wedle uznania */}
//               <div className="blog-nav clearfix">
//                 <Link to="#" className="blog-prev"><i className="fa fa-angle-left" /></Link>
//                 <Link to="#" className="blog-next"><i className="fa fa-angle-right" /></Link>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//       {/*End Blog Details Section */}
//     </>
//   );
// };

// export default BlogDetailsFullwidth;

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
//                   <ZoomableImage src="images/realizacje/rl-01-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu z Widokiem 4 w Izabelinie: Nowoczesność i Komfort</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Zanurz się w historii budowy Domu z Widokiem 4 w Izabelinie, gdzie nowoczesność spotyka komfort. Na archiwalnym zdjęciu widoczna jest faza budowy przed elewacją. Budynek, choć jeszcze nieotynkowany, emanuje potencjałem nowoczesnego designu, obiecując wyjątkowy komfort przyszłym mieszkańcom. Prace wciąż trwają, a to fascynujący etap, w którym kształtuje się wyjątkowy charakter tego nowoczesnego domu z malowniczym widokiem. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-02-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu z Widokiem 4 na Zachodzie Warszawy: Nowoczesny Komfort</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ W głębi zachodnich krajobrazów Warszawy rozpoczyna się budowa Domu z Widokiem 4. To archiwalne zdjęcie przedstawia początek procesu budowy, gdzie wylewana jest ława fundamentowa, a teren jest starannie uzbrojony. To zobowiązanie do nowoczesnego komfortu, które już na tym etapie ukazuje się jako obiecujący projekt, zdolny wprowadzić harmonię w otaczający krajobraz. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-03-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego: Dom z Widokiem 4 w Izabelinie</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Zanurz się w intensywność chwili na budowie Domu z Widokiem 4 w Izabelinie. To archiwalne zdjęcie ukazuje budowę w trakcie realizacji, gdzie praca wre pełną parą. Atmosfera jest nasycona energią twórczą, a każdy detal nabiera znaczenia, nadając charakter temu wyjątkowemu domowi jednorodzinnemu. To spojrzenie na etap, gdy wizja staje się rzeczywistością. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-04-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu w Powiecie Zachodnim Warszawskim: Realizacja Projektu Dom z Widokiem 4</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Oto niezapomniany moment budowy Domu z Widokiem 4 w Powiecie Zachodnim Warszawskim. To archiwalne zdjęcie przenosi nas do chwili, gdy praca wre na placu budowy. Widać staranne przygotowania do wylewania stropów – punkt zwrotny w procesie. To początek etapu, który przyniesie solidną strukturę temu wyjątkowemu domowi, realizując jednocześnie wizję komfortu i panoramy z widokiem. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-05-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu w Izabelinie według Projektu Dom z Widokiem 4: Nowoczesny Komfort w Otoczeniu Natury</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Rozpoczynamy niezwykłą podróż przez budowę Domu z Widokiem 4 w malowniczym Izabelinie. Archiwalne zdjęcie ukazuje nie tylko początek budowy, ale również zaangażowanie pracownika, który uzbraja teren pod wylewkę ławy fundamentowej. To moment, gdy nowoczesny komfort zaczyna się kształtować w otoczeniu przyrody, obiecując harmonię między architekturą a naturalnym pięknem. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-06-1920x1075-DomzWidokiem4.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego na Zachodzie Warszawy: Unikalny Projekt Domu z Widokiem 4 w Zgodzie z Nowoczesnością i Naturą</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Witamy w zaawansowanym etapie budowy Domu Jednorodzinnego na Zachodzie Warszawy, realizowanego zgodnie z unikalnym projektem Domu z Widokiem 4. To archiwalne zdjęcie przedstawia budowę w zaawansowanym stadium, gdzie skończone mury i dach stanowią imponującą bryłę budynku. Choć jeszcze chwila do końca, już teraz widać harmonijny rozkład pomieszczeń, który doskonale współgra z nowoczesnością i otaczającą naturą, tworząc niepowtarzalne miejsce do życia. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-nav clearfix">
//                     <Link to="/single-realizacja-RezydencjaParkowa" className="blog-prev"><i className="fa fa-angle-left" /></Link>
//                     <Link to="/single-realizacja-Kasjopea" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
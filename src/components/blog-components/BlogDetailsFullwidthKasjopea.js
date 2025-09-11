import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const KATEGORIA = 'Kasjopea';

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
                <Link to="/single-realizacja-DomzWidokiem4" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-realizacja-OpalElegancja" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>

            </div>
          </div>
        </div>
      </section>
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
//                   <ZoomableImage src="images/realizacje/rl-01-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Kasjopea w Ożarowie Mazowieckim</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Oto niezwykła chwila w historii budowy Domu Kasjopea w Ożarowie Mazowieckim. Archiwalne zdjęcie uchwyciło budynek w pełnej okazałości, wykończony i gotowy do użytku. To moment, gdy wizja staje się rzeczywistością, a mieszkańcy mogą cieszyć się komfortem i funkcjonalnością tego wyjątkowego domu. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-02-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Wznoszenie Budynku Kasjopea w Ożarowie Mazowieckim</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Przenosimy się w czasie do wznoszenia budynku Kasjopea w Ożarowie Mazowieckim. Na archiwalnym zdjęciu ukazana jest początkowa faza budowy, gdzie budynek zaczyna się wznosić w górę. Widoczne są staranne przygotowania do kładzenia murów, co zwiastuje narodziny nowego miejsca, pełnego komfortu i wyjątkowej architektury. ”
//                   </p>
//                 </blockquote>
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-03-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Kasjopea w Ożarowie Mazowieckim: Elegancja i Komfort w Każdym Szczególe Projektu</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Z dumą prezentujemy zakończony etap budowy Domu Kasjopea w Ożarowie Mazowieckim. Archiwalne zdjęcie ukazuje budynek w całej swojej elegancji i komforcie, zgodny z każdym szczegółem projektu. To chwila, gdy marzenia o nowoczesnym i wyrafinowanym domu stają się rzeczywistością, gotową do dostarczenia niezapomnianych chwil mieszkańcom. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-04-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu według Projektu Kasjopea w Błoniach</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Oto wyjątkowy moment w historii budowy Domu według Projektu Kasjopea w Błoniach. Archiwalne zdjęcie ukazuje budynek w całej swojej okazałości, już wykończony i gotowy do użytku. To triumf harmonii projektu, elegancji oraz funkcjonalności, który teraz staje się przestrzenią dla nowych, niezapomnianych chwil życia domowego. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-05-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego według Projektu Kasjopea w Błoniach: Nowoczesny Styl</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Przedstawiamy zakończony etap budowy Domu Jednorodzinnego według Projektu Kasjopea w Błoniach. Na archiwalnym zdjęciu widać gotowy budynek, emanujący nowoczesnym stylem. To miejsce, w którym elegancja spotyka się z funkcjonalnością, a każdy szczegół projektu Kasjopea przyczynił się do stworzenia wyjątkowej, nowoczesnej przestrzeni gotowej do pełnienia roli domu. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-06-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu Jednorodzinnego Kasjopea w Błoniach: Elegancja i Funkcjonalność w Każdym Detalu</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Przed Państwem efekt budowy Domu Jednorodzinnego Kasjopea w Błoniach. Na archiwalnym zdjęciu prezentujemy gotowy budynek, w którym elegancja i funkcjonalność splatają się w każdym detalu. To harmonijne połączenie projektu Kasjopea, które teraz przenosi się z rysunków na rzeczywistość, tworząc wyjątkową przestrzeń gotową do pełnienia roli domu pełnego uroku. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-detail mt-30">
//                 <div className="b-det-img">
//                   <ZoomableImage src="images/realizacje/rl-07-1920x1075-Kasjopea.png" alt="realizations" />
//                 </div>
//                 <div className="det-content">
//                   <h3>Budowa Domu w Błoniach według Projektu Kasjopea: Nowoczesny Komfort i Styl</h3>
                  
//                 </div>
//                 <blockquote>
//                   <p> “ Z dumą prezentujemy zakończony etap budowy Domu według Projektu Kasjopea w Błoniach. Archiwalne zdjęcie ukazuje gotowy budynek, w którym nowoczesny komfort spotyka się ze stylem. To miejsce, w którym każdy detal projektu Kasjopea został starannie wkomponowany, tworząc harmonijną i funkcjonalną przestrzeń gotową do życia. ”
//                   </p>
//                 </blockquote>
                
//               </div>
//               <div className="blog-nav clearfix">
//                     <Link to="/single-realizacja-DomzWidokiem4" className="blog-prev"><i className="fa fa-angle-left" /></Link>
//                     <Link to="/single-realizacja-OpalElegancja" className="blog-next"><i className="fa fa-angle-right" /></Link>
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
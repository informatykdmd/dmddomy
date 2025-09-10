import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import SidebarRightRealizacje from '../../elements/SidebarRightRealizacje';

const BlogPostsRightSidebar = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const ApiAddress = `${myDatabaseConfig.mySqlUrlorIp}:${myDatabaseConfig.apiPort}`;

  useEffect(() => {
    const load = async () => {
      try {
        const url = `https://${ApiAddress}/api/realizacje/kategorie`;
        const { data } = await axios.get(url, { withCredentials: false });
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        setError(e?.message || 'Nie udało się pobrać danych.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [ApiAddress]);

  return (
    <>
      <section className="section-padding-five single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row clearfix">
            <div className="col-md-8 order-md-1">
              <div className="row clearfix">
                {loading && (
                  <div className="col-12 mb-3">
                    <div className="text-muted">Ładowanie…</div>
                  </div>
                )}
                {error && (
                  <div className="col-12 mb-3">
                    <div className="alert alert-danger">{error}</div>
                  </div>
                )}

                {items.map((i, id) => (
                  <div className="col-lg-6 mb-4 field-overlay-holder" key={id}>
                    <div
                      className="img_blog field-overlay-inner"
                      onClick={() => (window.location.href = i.ep_url)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="field-position-m field-mover-border">
                        <img
                          src={i.zdjecie}
                          alt=""
                          className="img-fluid mx-auto d-block"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="blog-box-detail p-4">
                      <div className="mt-0">
                        <p className="labal text-muted">{i.rodzaj}</p>
                        <h5 className="font-weight-bold">
                          <Link to={i.ep_url} className="read-more">
                            {i.nazwa}
                          </Link>
                        </h5>
                        <p className="text-muted">{i.opis}</p>
                        <Link className="read-more text-uppercase font-weight-bold" to={i.ep_url}>
                          Zobacz Wszystkie Zdjęcia
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SidebarRightRealizacje />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostsRightSidebar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import SidebarRightRealizacje from '../../elements/SidebarRightRealizacje';

// const BlogPostsRightSidebar = () => {
//     return(
//       <>
//       {/*Blog Details Section*/}
//       <section className="section-padding-five single-blog-section section-padding-all">
//       <div className="default-container">
//         <div className="row clearfix">
//           <div className="col-md-8 order-md-1">
//             <div className="row clearfix">
//               <div className="col-lg-6 mb-4 field-overlay-holder">
//                 <div className="img_blog field-overlay-inner" onClick={() => window.location.href=`/single-realizacja-RezydencjaParkowa`}>
//                   <div className="field-position-m field-mover-border">
//                     <img src="images/realizacje/rl-00-750x430-RezydencjaParkowa.png" alt="" className="img-fluid mx-auto d-block" />
//                   </div>
//                 </div>
//                 <div className="blog-box-detail p-4">
//                   <div className="mt-0">
//                     <p className="labal text-muted">Budowa domu</p>
//                     <h5 className="font-weight-bold"><Link to="/single-realizacja-RezydencjaParkowa" className="read-more">Rezydencja Parkowa</Link></h5>
//                     <p className="text-muted">W ciągu kilku lat z powodzeniem zrealizowaliśmy cztery projekty domów według koncepcji Rezydencja Parkowa. Nasze budowy obejmują lokalizacje w Zielonce, obok Starych Babic, w powiecie zachodnim Warszawskim oraz ponownie w Zielonce. Każda inwestycja to unikalne połączenie stylu, funkcjonalności i nowoczesnej architektury, spełniające oczekiwania naszych klientów.</p>
//                     {/* <p className="space-date text-muted"> Kazi Porag - 27 May 2022</p> */}
//                     <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-RezydencjaParkowa">Zobacz Wszystkie Zdjęcia</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 mb-4 field-overlay-holder">
//                 <div className="img_blog field-overlay-inner" onClick={() => window.location.href=`/single-realizacja-DomzWidokiem4`}>
//                   <div className="field-position-m field-mover-border">
//                     <img src="images/realizacje/rl-00-750x430-DomzWidokiem4.png" alt="" className="img-fluid mx-auto d-block" />
//                   </div>
//                 </div>
//                 <div className="blog-box-detail p-4">
//                   <div className="mt-0">
//                     <p className="labal text-muted">Budowa domu</p>
//                     <h5 className="font-weight-bold"><Link to="/single-realizacja-DomzWidokiem4" className="read-more">Dom z Widokiem 4</Link></h5>
//                     <p className="text-muted">Osiągnęliśmy sukces w realizacji projektu Dom z Widokiem 4 w różnych lokalizacjach. Zbudowaliśmy nowoczesny dom jednorodzinny w zachodniej Warszawie, powiecie zachodnim Warszawskim oraz w Izabelinie. Każda z tych inwestycji odzwierciedla unikalny charakter i styl, tworząc przestronne i funkcjonalne przestrzenie dla naszych klientów.</p>
//                     {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
//                     <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-DomzWidokiem4">Zobacz Wszystkie Zdjęcia</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 mb-4 field-overlay-holder">
//                 <div className="img_blog field-overlay-inner" onClick={() => window.location.href=`/single-realizacja-Kasjopea`}>
//                   <div className="field-position-m field-mover-border">
//                     <img src="images/realizacje/rl-00-750x430-Kasjopea.png" alt="" className="img-fluid mx-auto d-block" />
//                   </div>
//                 </div>
//                 <div className="blog-box-detail p-4">
//                   <div className="mt-0">
//                     <p className="labal text-muted">Budowa domu</p>
//                     <h5 className="font-weight-bold"><Link to="/single-realizacja-Kasjopea" className="read-more"> Kasjopea</Link></h5>
//                     <p className="text-muted">Zrealizowaliśmy projekt Kasjopea w Ożarowie Mazowieckim, obejmujący budowę nowoczesnego domu. Inna inwestycja związana z projektem Kasjopea miała miejsce w sąsiedniej miejscowości - Błonie. Oferujemy unikalne i funkcjonalne rozwiązania architektoniczne, dostosowane do indywidualnych potrzeb naszych klientów.</p>
//                     {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
//                     <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-Kasjopea">Zobacz Wszystkie Zdjęcia</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 mb-4 field-overlay-holder">
//                 <div className="img_blog field-overlay-inner" onClick={() => window.location.href=`/single-realizacja-OpalElegancja`}>
//                   <div className="field-position-m field-mover-border">
//                     <img src="images/realizacje/rl-00-750x430-OpalElegancja.png" alt="" className="img-fluid mx-auto d-block" />
//                   </div>
//                 </div>
//                 <div className="blog-box-detail p-4">
//                   <div className="mt-0">
//                     <p className="labal text-muted">Budowa domu</p>
//                     <h5 className="font-weight-bold"><Link to="/single-realizacja-OpalElegancja" className="read-more">Opal Elegancja</Link></h5>
//                     <p className="text-muted">Zrealizowaliśmy budowę domu według projektu Opal w Zielonce oraz w Pruszkowie. Oferujemy unikalne rozwiązania architektoniczne dostosowane do lokalnych warunków i indywidualnych potrzeb klientów, zapewniając komfort i funkcjonalność.</p>
//                     {/* <p className="space-date text-muted"> Kazi Porag - 27 May 2022</p> */}
//                     <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-OpalElegancja">Zobacz Wszystkie Zdjęcia</Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 mb-4 field-overlay-holder">
//                 <div className="img_blog field-overlay-inner" onClick={() => window.location.href=`/single-realizacja-RezydencjaLesna`}>
//                   <div className="field-position-m field-mover-border">
//                   <img src="images/realizacje/rl-00-750x430-RezydencjaLesna.png" alt="" className="img-fluid mx-auto d-block" />
//                   </div>
//                 </div>
//                 <div className="blog-box-detail p-4">
//                   <div className="mt-0">
//                     <p className="labal text-muted">Budowa domu</p>
//                     <h5 className="font-weight-bold"><Link to="/single-realizacja-RezydencjaLesna" className="read-more">Rezydencja Leśna</Link></h5>
//                     <p className="text-muted">Budowaliśmy domy zgodnie z projektem Rezydencja Leśna w różnych lokalizacjach, w tym w Latchorzewie, na zachodnich obrzeżach Warszawy oraz w Starych Babicach. Każda inwestycja charakteryzuje się wyjątkowym połączeniem elegancji i harmonii z otaczającym przyrodniczym środowiskiem.</p>
//                     {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
//                     <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-RezydencjaLesna">Zobacz Wszystkie Zdjęcia</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <SidebarRightRealizacje />

//         </div>
//       </div>
//     </section>
//     {/*End Blog Details Section */}
//     </>
//     )
// }

// export default BlogPostsRightSidebar;
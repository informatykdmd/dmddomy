import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarRightRealizacje = () => {
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
    <div className="col-md-4 order-md-2">
      <div className="widget widget-categories">
        <div className="all-title">
          <h3><span>Nasze Realizacje</span></h3>
        </div>
        <div className="widget-items">
          <ul>
            {loading && (
              <li className="blog-category text-muted">Ładowanie…</li>
            )}
            {err && (
              <li className="blog-category text-danger">{err}</li>
            )}
            {items.map((i, idx) => (
              <li className="blog-category" key={i.ep_url || i.nazwa || idx}>
                <Link to={i.ep_url}>{i.nazwa}</Link>
              </li>
            ))}
            {!loading && !err && items.length === 0 && (
              <li className="blog-category text-muted">Brak kategorii</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarRightRealizacje;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const SidebarRight = () => {
//     return(
//     <>
//     <div className="col-md-4 order-md-2">

//         <div className="widget widget-categories">
//             <div className="all-title">
//             <h3>
//                 <span>Nasze Realizacje</span>
//             </h3>
//             </div>
//             <div className="widget-items">
//             <ul>
//                 <li className="blog-category">
//                 <Link to="/single-realizacja-RezydencjaParkowa">Rezydencja Parkowa 
//                     {/* <span>(4)</span> */}
//                 </Link>
//                 </li>
//                 <li className="blog-category">
//                 <Link to="/single-realizacja-DomzWidokiem4">Dom z Widokiem 4 
//                     {/* <span>(6)</span> */}
//                 </Link>
//                 </li>
//                 <li className="blog-category">
//                 <Link to="/single-realizacja-Kasjopea">Kasjopea
//                     {/* <span>(13)</span> */}
//                 </Link>
//                 </li>
//                 <li className="blog-category">
//                 <Link to="/single-realizacja-OpalElegancja">Opal 
//                     {/* <span>(18)</span> */}
//                 </Link>
//                 </li>
//                 <li className="blog-category">
//                 <Link to="/single-realizacja-RezydencjaLesna">Rezydencja Leśna
//                     {/* <span>(28)</span> */}
//                 </Link>
//                 </li>
//             </ul>
//             </div>
//         </div>
        
//     </div>
//     </>
//     )
// }

// export default SidebarRight;
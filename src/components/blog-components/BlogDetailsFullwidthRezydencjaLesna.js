import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const KATEGORIA = 'Rezydencja Leśna'; // <<< tylko tu wpisujesz kategorię

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
                <Link to="/single-realizacja-OpalElegancja" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                <Link to="/single-realizacja-RezydencjaParkowa" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsFullwidth;
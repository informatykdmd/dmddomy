import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../supportscripts/env_connect'; // <-- 1 poziom w górę z /elements

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
            {loading && <li className="blog-category text-muted">Ładowanie…</li>}
            {error && <li className="blog-category text-danger">{error}</li>}
            {items.map((i, idx) => (
              <li className="blog-category" key={i.ep_url || i.nazwa || idx}>
                <Link to={i.ep_url}>{i.nazwa}</Link>
              </li>
            ))}
            {!loading && !error && items.length === 0 && (
              <li className="blog-category text-muted">Brak kategorii</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarRightRealizacje;

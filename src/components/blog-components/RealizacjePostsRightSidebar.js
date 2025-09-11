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
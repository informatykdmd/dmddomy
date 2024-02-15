import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Wille</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaFloryda2">
                    <img src="images/offers/bl-01-120x120-WillaFloryda2.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaFloryda2">Willa Floryda 2</Link></p>
                    <p>Jest to dom nieco mniejszy od cieszącego się popularnością Willa Floryda.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomZWidokiem3">
                    <img src="images/offers/bl-01-120x120-DomZWidokiem3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomZWidokiem3">Dom Z Widokiem 3</Link></p>
                    <p>Dom z Widokiem 3 został zmniejszony o 30%, co przekłada się również na zmniejszenie kosztów realizacji budynku.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaParkowa7">
                    <img src="images/offers/bl-01-120x120-WillaParkowa7.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaParkowa7">Willa Parkowa 7</Link></p>
                    <p>Projekt domu Willa Parkowa 7 to klasyczna, podmiejska willa, Swoim stylem nawiązujący do architektury dworkowej i rezydencyjnej.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaFloryda3">
                    <img src="images/offers/bl-01-120x120-WillaFloryda3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaFloryda3">Willa Floryda 3</Link></p>
                    <p>Dom estetycznie i architektonicznie nawiązuje do serii "Floryd".</p>
                </div>
                </li>
            </ul>
            </div>
            <div className="widget widget-archives">
            <div className="all-title"  style={{paddingTop: '25px'}}>
                <h3>
                    <span>Sprawdź również</span>
                </h3>
            </div>
            <div className="widget-items widget-archie">
            <ul>
                <li>
                    <Link to="/oferta-nowoczesne">W nowoczesnej zabudowie</Link>
                </li>
                <li>
                    <Link to="/oferta-poddasze">Domy z poddaszem</Link>
                </li>
                <li>
                    <Link to="/oferta-pietrowe">Domy piętrowe</Link>
                </li>
                <li>
                    <Link to="/oferta-parterowe">Domy parterowe</Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default SidebarLeft;
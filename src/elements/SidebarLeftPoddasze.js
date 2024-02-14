import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Domy Z Poddaszem</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Hiacynt3">
                    <img src="images/offers/bl-01-120x120-Hiacynt3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Hiacynt3">Hiacynt 3</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat nowoczesnej architektury z projektem domu Willa Parterowa 2.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Narcyz2">
                    <img src="images/offers/bl-01-120x120-Narcyz2.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Narcyz2">Narcyz 2</Link></p>
                    <p>Projekt domu Wąski 3 to nowa odsłona popularnej serii domów, idealnie dostosowana do wąskich działek.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Zefir">
                    <img src="images/offers/bl-01-120x120-Zefir.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Zefir">Zefir</Link></p>
                    <p>Willa Parkowa 4 to jednokondygnacyjny dom o prostokątnej bryle, z czterospadowym dachem i garażem.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomNaParkowej6">
                    <img src="images/offers/bl-01-120x120-DomNaParkowej6.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomNaParkowej6">Dom Na Parkowej 6</Link></p>
                    <p>Dom na Dębowej to projekt domu przeznaczonego dla czteroosobowej rodziny, w stylistyce dworkowej.</p>
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
                    <Link to="/oferta-pietrowe">Domy piętrowe</Link>
                </li>
                <li>
                    <Link to="/oferta-wille">Wille</Link>
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
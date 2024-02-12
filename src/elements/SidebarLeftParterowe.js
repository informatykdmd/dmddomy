import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Domy Parterowe</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillapaPterowa2">
                    <img src="images/offers/bl-01-120x120-Kasjopea7.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillapaPterowa2">Willa Parterowa 2</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat nowoczesnej architektury z projektem domu Willa Parterowa 2.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomzWidokiem3">
                    <img src="images/offers/bl-01-120x120-DomzWidokiem3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomzWidokiem3">Wąski 3</Link></p>
                    <p>Projekt domu Wąski 3 to nowa odsłona popularnej serii domów, idealnie dostosowana do wąskich działek.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-OpalElegancja">
                    <img src="images/offers/bl-01-120x120-OpalElegancja.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-OpalElegancja">Willa Parkowa 4</Link></p>
                    <p>Willa Parkowa 4 to jednokondygnacyjny dom o prostokątnej bryle, z czterospadowym dachem i przestrzenią garażową.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-willaParkowa160">
                    <img src="images/offers/bl-01-120x120-willaParkowa160.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-willaParkowa160">Dom Na Dębowej</Link></p>
                    <p>Dom na Dębowej to projekt domu przeznaczonego dla czteroosobowej rodziny, o charakterystycznej stylistyce dworkowej.</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default SidebarLeft;
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Usługi</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-koparka">
                    <img src="images/offers/bl-01-120x120-uslugi.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-koparka">Usługa koparką kołową</Link></p>
                    <p>Specjalistyczne usługi koparką kołową: wykopy pod fundamenty, niwelację terenu, a także przygotowanie do instalacji kanalizacyjnych i wodociągowych. </p>
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
                    <Link to="/oferta-wille">Wille</Link>
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
                <li>
                    <Link to="/oferta-nowoczesne">W nowoczesnej zabudowie</Link>
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
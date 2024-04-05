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
                {/* <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Ekonomiczny2">
                    <img src="images/offers/bl-01-120x120-Ekonomiczny2.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Ekonomiczny2">Ekonomiczny 2</Link></p>
                    <p>Projekt domu Ekonomiczny 2 jest to projekt niedużego, parterowego domu jednorodzinnego dla 3-4 osób.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomNaPraktycznej2">
                    <img src="images/offers/bl-01-120x120-DomNaPraktycznej2.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomNaPraktycznej2">Dom Na Praktycznej 2</Link></p>
                    <p>Budynek zaprojektowano na planie prostokąta przykrytego łagodnym, dwuspadowym dachem przykrytym dachówką.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Wymarzony9">
                    <img src="images/offers/bl-01-120x120-Wymarzony9.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Wymarzony9">Wymarzony 9</Link></p>
                    <p>Projekt domu Wymarzony 9 to projekt domu jednorodzinnego parterowego ze strychem.</p>
                </div>
                </li> */}
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
            </ul>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default SidebarLeft;
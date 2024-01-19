import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        {/* <div className="widget widget-search">
            <form className="side-form" method="POST" action="#">
            <input type="text" className="form-control" placeholder="Search Here..." />
            <button type="submit">
                <i className="fa fa-paper-plane" />
            </button>
            </form>
        </div> */}
        {/* <div className="widget widget-categories">
            <div className="all-title">
            <h3>
                <span>Categories</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li className="blog-category">
                <Link to="#">Commercial
                    <span>(23)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Education
                    <span>(26)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Hospital
                    <span>(13)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Residentia
                    <span>(18)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Office
                    <span>(28)</span>
                </Link>
                </li>
            </ul>
            </div>
        </div> */}
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Eleganckie Rezydencje</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaSloneczna">
                    <img src="images/offers/bl-01-120x120-WillaSloneczna.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaSloneczna">Willa Słoneczna</Link></p>
                    <p>Słoneczna Willa o imponującym metrażu 233m2: luksus, funkcjonalność, wyrafinowane gusta.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaFloryda">
                    <img src="images/offers/bl-01-120x120-WillaFloryda.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaFloryda">Willa Floryda</Link></p>
                    <p>Nowoczesna, funkcjonalna, imponująca dla siedmiu osób, idealna na większe działki, szybka, przystępna cena.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaAnnaMaria">
                    <img src="images/offers/bl-01-120x120-WillaAnnaMaria.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaAnnaMaria">Willa Anna Maria</Link></p>
                    <p>Dom dla 4-6-osobowej rodziny, o klasycznej formie, komfortowy, estetyczny i ekonomiczny w budowie</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Topaz">
                    <img src="images/offers/bl-01-120x120-Topaz.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Topaz">Topaz</Link></p>
                    <p>Kompaktowa bryła, ciekawa elewacja i optymalny metraż, gwarantujące dużą energooszczędność, przestrzeń dla 4-6 osób.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Sydney">
                    <img src="images/offers/bl-01-120x120-Sydney.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Sydney">Sydney</Link></p>
                    <p>Budowa domu Sydney to osiągnięcie minimalnych kosztów przy dużym metrażu, wykorzystujące nowoczesną, niewielką bryłę.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-SpokojnyZakatek">
                    <img src="images/offers/bl-01-120x120-SpokojnyZakatek.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-SpokojnyZakatek">Spokojny Zakątek</Link></p>
                    <p>Ta nowoczesna willa o powierzchni ponad 250 m2, idealna dla rodziny nawet 6-osobowej, zachwyca rozłożystą formą i piękną elewacją.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-RezydencjaParkowa">
                    <img src="images/offers/bl-01-120x120-RezydencjaParkowa.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-RezydencjaParkowa">Rezydencja Parkowa</Link></p>
                    <p>Projekt oparty na standardowych technologiach, gwarantujący idealną realizację.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-RezydencjaLesna">
                    <img src="images/offers/bl-01-120x120-RezydencjaLesna.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-RezydencjaLesna">Rezydencja Leśna</Link></p>
                    <p>Nowoczesny dom, średnio trudny w budowie, dzięki doświadczeniu wykonamy go szybko i sprawnie.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomOtwarty">
                    <img src="images/offers/bl-01-120x120-DomOtwarty.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomOtwarty">Dom Otwarty</Link></p>
                    <p>Nowoczesna konstrukcja parterowa z poddaszem, integrująca najważniejsze trendy współczesnego budownictwa.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-WillaMalibu">
                    <img src="images/offers/bl-01-120x120-WillaMalibu.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-WillaMalibu">Willa Malibu</Link></p>
                    <p>Rozłożysta i okazała rezydencja Malibu to wbrew pozorom, projekt o stosunkowo niewielkim stopniu skomplikowania.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomzWidokiem4">
                    <img src="images/offers/bl-01-120x120-DomzWidokiem4.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomzWidokiem4">Dom z Widokiem 4</Link></p>
                    <p>Nowoczesny, wygodny i przystępny kosztowo dom. Ten projekt cieszy się dużą popularnością.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomzWidokiem">
                    <img src="images/offers/bl-01-120x120-DomzWidokiem.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomzWidokiem">Dom z Widokiem</Link></p>
                    <p>Prosta konstrukcja idzie w parze z imponującym efektem, sprawiając, że praca nad tym projektem to czysta przyjemność.</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        {/* <div className="widget widget-archives">
            <div className="all-title">
            <h3>
                <span>archives</span>
            </h3>
            </div>
            <div className="widget-items widget-archie">
            <ul>
                <li>
                <Link to="#">july
                    <span>20</span>
                </Link>
                </li>
                <li>
                <Link to="#">November
                    <span>36</span>
                </Link>
                </li>
                <li>
                <Link to="#">october
                    <span>12</span>
                </Link>
                </li>
            </ul>
            </div>
        </div> */}
        {/* <div className="widget widget-tags">
            <div className="all-title">
            <h3>
                <span>Popular Tags</span>
            </h3>
            </div>
            <div className="widget-tags widget-items">
            <Link to="#" className="tag">marketing</Link>
            <Link to="#" className="tag">Design</Link>
            <Link to="#" className="tag">Networking</Link>
            <Link to="#" className="tag">Branding</Link>
            <Link to="#" className="tag">Wordpress</Link>
            <Link to="#" className="tag">Website</Link>
            <Link to="#" className="tag">Graphic Design</Link>
            <Link to="#" className="tag">Fonts</Link>
            </div>
        </div>
        <div className="widget widget-meta">
            <div className="all-title">
            <h3>
                <span>meta</span>
            </h3>
            </div>
            <div className="widget-items widget-meta">
            <Link to="#">Entries.RSS</Link>
            <Link to="#">Comment.RSS</Link>
            <Link to="#">Wordpress.org</Link>
            <Link to="#">Site Admin</Link>
            </div>
        </div> */}
    </div>
    </>
    )
}

export default SidebarLeft;
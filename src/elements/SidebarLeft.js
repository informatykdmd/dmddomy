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
                <span>Małe Perły</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Kasjopea7">
                    <img src="images/offers/bl-01-120x120-Kasjopea7.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Kasjopea7">Kasjopea 7: Nowoczesny Dom, 175 m2</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat nowoczesnej architektury z projektem domu Kasjopea 7, gdzie funkcjonalność spotyka się z elegancją, a 175 m2 stwarzają przestrzeń pełną możliwości.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomzWidokiem3">
                    <img src="images/offers/bl-01-120x120-DomzWidokiem3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomzWidokiem3">Dom z Widokiem 3: Elegancja na 187 m2</Link></p>
                    <p>Odkryj wyjątkowy projekt "Domu z Widokiem 3" – 187 m2 doskonałego połączenia komfortu, funkcjonalności i imponującego widoku. Wejdź do świata, gdzie budowa staje się sztuką, a przestrzeń nabiera nowego wymiaru.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-OpalElegancja">
                    <img src="images/offers/bl-01-120x120-OpalElegancja.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-OpalElegancja">Opal, Elegancja na Każdym Metrze Kwadratowym</Link></p>
                    <p>Rozpocznij podróż ku wymarzonemu domowi z projektem Opal o imponującej powierzchni 189 m2. Odkryj harmonię designu i funkcjonalności, gdzie każdy metr kwadratowy przemawia elegancją i komfortem.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-willaParkowa160">
                    <img src="images/offers/bl-01-120x120-willaParkowa160.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-willaParkowa160">Willa Parkowa 160: Elegancja w Każdym Detalu</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat budowy, gdzie projekt "Willa Parkowa 160" staje się symbolem elegancji i wyrafinowanego stylu. Odkryj niepowtarzalny urok na każdym metrze kwadratowym.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Tytan134">
                    <img src="images/offers/bl-01-120x120-Tytan134.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Tytan134">Tytan 134: Solidność i Styl na 134m2</Link></p>
                    <p>Rozpocznij budowę swojego wymarzonego domu z projektem "Tytna 134". Połączenie solidności z nowoczesnym stylem na każdym metrze kwadratowym stwarza niepowtarzalną przestrzeń, gotową na spełnienie Twoich marzeń o domu.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Turkus150">
                    <img src="images/offers/bl-01-120x120-Turkus150.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Turkus150">Turkus 150: Nowoczesność w Każdym Wymiarze</Link></p>
                    <p>Wprowadź swoją przyszłość do koloru z projektem "Turkus 150". Nowoczesne podejście do architektury na 150 m2, gdzie funkcjonalność spotyka się z estetyką, tworząc wyjątkowy dom dostosowany do Twoich marzeń.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Riwiera5">
                    <img src="images/offers/bl-01-120x120-Riwiera5.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Riwiera5">Riwiera 5: Elegancja na 197m2</Link></p>
                    <p>Wkraczając w świat projektu "Riwiera 5", odkryj harmonię elegancji i przestrzeni na 197 metrach kwadratowych. Budowa domu staje się rytuałem tworzenia niepowtarzalnego, gdzie każdy detal przemyślany jest z myślą o pełnym komforcie i stylu życia.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Szafir181">
                    <img src="images/offers/bl-01-120x120-Szafir181.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Szafir181">Szafir 181: Ekskluzywność w Każdym Metrze Kwadratowym</Link></p>
                    <p>Zaplanuj swoje marzenie o domu z projektem "Szafir 181". Ekskluzywny design spotyka się z funkcjonalnością na 181 m2, tworząc przestrzeń dopasowaną do Twojego unikalnego stylu życia. Odkryj, jak architektura może być wyrazem luksusu na każdym etapie budowy.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Szmaragd134">
                    <img src="images/offers/bl-01-120x120-Szmaragd134.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Szmaragd134">Szmaragd 134: Wielka Elegancja na Niewielkiej Przestrzeni</Link></p>
                    <p>Wyrusz w podróż ku wyjątkowemu domowi z projektem "Szmaragd 134". Mimo skromnych wymiarów, ta budowa emanuje wielką elegancją, oferując inteligentne rozwiązania na każdym etapie na 134 metrach kwadratowych. Odkryj, jak niewielka przestrzeń może stać się miejscem wielkich marzeń.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Modena147">
                    <img src="images/offers/bl-01-120x120-Modena147.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Modena147">Modena 147: Nowoczesny Styl na 147m2</Link></p>
                    <p>Wprowadź nowoczesność do swojego życia z projektem "Modena 147". Na 147 metrach kwadratowych odkryjesz nie tylko funkcjonalność, ale także wyjątkowy styl, który stanie się integralną częścią Twojego nowego domu. Poznaj harmonię formy i funkcji w każdym detalu.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Kasjopea154">
                    <img src="images/offers/bl-01-120x120-Kasjopea154.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Kasjopea154">Kasjopea 154: Elegancja i Komfort na Każdym Metrze Kwadratowym</Link></p>
                    <p>Wprowadź się do świata wyjątkowej budowy z projektem "Kasjopea 154". Na 154 metrach kwadratowych spotkasz harmonię elegancji i funkcjonalności, tworząc przestrzeń, która spełnia najwyższe standardy komfortu. Odkryj, jak dom może stać się prawdziwym dziełem sztuki architektonicznej.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Helios157">
                    <img src="images/offers/bl-01-120x120-Helios157.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Helios157">Helios 157: Światło i Nowoczesność na 157m2</Link></p>
                    <p>Wprowadź promienie słońca do swojego nowego domu z projektem "Helios 157". Na 157 metrach kwadratowych doświadczysz harmonii światła i nowoczesnej architektury, tworząc przestrzeń, która emanuje ciepłem i nowatorskim stylem. Odkryj, jak dom może być miejscem, gdzie natura spotyka się z nowoczesnością.</p>
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
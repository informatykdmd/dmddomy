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
                    <Link to="/single-project-Kasjopea7">
                    <img src="images/offers/bl-01-120x120-Kasjopea7.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Kasjopea7">Kasjopea 7</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat nowoczesnej architektury z projektem domu Kasjopea 7.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-DomzWidokiem3">
                    <img src="images/offers/bl-01-120x120-DomzWidokiem3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-DomzWidokiem3">Dom z Widokiem 3</Link></p>
                    <p>Odkryj projekt "Domu z Widokiem 3" – 187 m2 doskonałego połączenia komfortu, funkcjonalności i imponującego widoku.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-OpalElegancja">
                    <img src="images/offers/bl-01-120x120-OpalElegancja.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-OpalElegancja">Opal</Link></p>
                    <p>Rozpocznij podróż z projektem Opal o imponującej powierzchni 189 m2.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-willaParkowa160">
                    <img src="images/offers/bl-01-120x120-willaParkowa160.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-willaParkowa160">Willa Parkowa</Link></p>
                    <p>Zapraszamy w świat budowy, gdzie projekt "Willa Parkowa" staje się symbolem elegancji i wyrafinowanego stylu.</p>
                </div>
                </li>
                {/* <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Tytan134">
                    <img src="images/offers/bl-01-120x120-Tytan134.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Tytan134">Tytan</Link></p>
                    <p>Rozpocznij budowę swojego wymarzonego domu z projektem "Tytna".</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Turkus150">
                    <img src="images/offers/bl-01-120x120-Turkus150.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Turkus150">Turkus</Link></p>
                    <p>Nowoczesne podejście do architektury na 150 m2, gdzie funkcjonalność spotyka się z estetyką.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Riwiera5">
                    <img src="images/offers/bl-01-120x120-Riwiera5.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Riwiera5">Riwiera 5</Link></p>
                    <p>Wkraczając w świat projektu "Riwiera 5", odkryj harmonię elegancji i przestrzeni na 197 metrach kwadratowych.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Szafir181">
                    <img src="images/offers/bl-01-120x120-Szafir181.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Szafir181">Szafir</Link></p>
                    <p>Ekskluzywny design spotyka się z funkcjonalnością na 181 m2, tworząc przestrzeń unikalnego stylu życia.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Szmaragd134">
                    <img src="images/offers/bl-01-120x120-Szmaragd134.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Szmaragd134">Szmaragd</Link></p>
                    <p>Projekt "Szmaragd 134", mimo skromnych wymiarów, ta budowa emanuje wielką elegancją, oferując inteligentne rozwiązania.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Modena147">
                    <img src="images/offers/bl-01-120x120-Modena147.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Modena147">Modena</Link></p>
                    <p>Wprowadź nowoczesność do swojego życia z projektem "Modena", odkryjesz nie tylko funkcjonalność, ale także wyjątkowy styl.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Kasjopea154">
                    <img src="images/offers/bl-01-120x120-Kasjopea154.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Kasjopea154">Kasjopea</Link></p>
                    <p>Na 154 m2 spotkasz harmonię elegancji i funkcjonalności, tworząc przestrzeń, która spełnia najwyższe standardy.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Helios157">
                    <img src="images/offers/bl-01-120x120-Helios157.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Helios157">Helios</Link></p>
                    <p>Wprowadź promienie słońca do swojego nowego domu z projektem "Helios", tworząc przestrzeń, która emanuje ciepłem i nowatorskim stylem.</p>
                </div>
                </li> */}
            </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default SidebarLeft;
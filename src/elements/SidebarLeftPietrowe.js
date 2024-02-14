import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return(
    <>
    <div className="col-md-4 order-md-1">
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Domy Piętrowe</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Oszust">
                    <img src="images/offers/bl-01-120x120-Oszust.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Oszust">Oszust</Link></p>
                    <p>Zapraszamy do fascynującej podróży w świat nowoczesnej architektury z projektem domu Oszust.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Tytan3">
                    <img src="images/offers/bl-01-120x120-Tytan3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Tytan3">Tytan 3</Link></p>
                    <p>Tytan 3 to projekt domu jednorodzinnego, piętrowego z garażem częściowo wbudowanym w bryłę budynku.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Qubik3">
                    <img src="images/offers/bl-01-120x120-Qubik3.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Qubik3">Qubik 3</Link></p>
                    <p>Projekt domu Qubik 3 jest to projekt budynku jednorodzinnego w zabudowie bliźniacze o nowoczesnej architekturze.</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="/single-project-Qubik">
                    <img src="images/offers/bl-01-120x120-Qubik.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="/single-project-Qubik">Qubik</Link></p>
                    <p>Qubik jest to projekt nowoczesnego domu jednorodzinnego piętrowego, z płaskim dachem.</p>
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
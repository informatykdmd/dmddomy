import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const NavOne = () => {
	const [wprowadzonyTekst, setWprowadzonyTekst] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setWprowadzonyTekst(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Przekierowanie użytkownika do innej ścieżki 
        navigate('/search-results', { state: { wprowadzonyTekst } });
    };

    function handleDownload(e) {
        e.preventDefault(); 
        // Pobieranie pliku PDF
        const link = document.createElement('a');
        link.href = '/downloads/dmd_domy_download.pdf'; 
        link.download = 'dmd_domy_download.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
	return(
    <>
    <div>
        {/*Header-Upper*/}
        <div className="header-upper">
            <div className="default-container">
                <div className="clearfix">
                    <div className="pull-left logo-box">
                        <div className="logo">
                        <Link to="/"><img src="images/logo.png" alt="" title /></Link>
                        </div>
                    </div>
                    <div className="nav-outer clearfix">
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md">
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            </button>
                        </div>
                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                            <li className="current dropdown"><Link to="/">DMD</Link>
                                <ul>
                                    <li><a href="https://dmdbudownictwo.pl" rel="noreferrer" target="_blank">DMD Budownictwo</a></li>
                                    <li><a href="https://dmdelitehome.pl" rel="noreferrer" target="_blank">DMD EliteHome</a></li>
                                    <li><a href="https://dmdinwestycje.pl" rel="noreferrer" target="_blank">DMD Inwestycje</a></li>
                                    {/*<li><a href="https://dmdinstalacje.pl" rel="noreferrer" target="_blank">DMD Instalacje</a></li>
                                    <li><a href="https://dmddevelopment.pl" rel="noreferrer" target="_blank">DMD Development</a></li> */}
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/o-nas">DLACZEGO MY?</Link>
                                <ul>
                                    <li><Link to="/trust">ZAUFANIE</Link></li>
                                    <li><Link to="/o-nas">O NAS</Link></li>
                                    <li><Link to="/team">ZESPÓŁ</Link></li>
                                    <li><Link to="/advice">KONSULTACJE</Link></li>

                                </ul>
                            </li>
                            <li className="dropdown"><Link to="/oferta-wille">OFERTA</Link>
                                <ul>
                                  <li><Link to="/oferta-parterowe">Parterowe</Link></li>
                                  <li><Link to="/oferta-poddasze">Z Poddaszem</Link></li>
                                  <li><Link to="/oferta-pietrowe">Piętrowe</Link></li>
                                  <li><Link to="/oferta-wille">Wille</Link></li>
                                  <li><Link to="/oferta-nowoczesne">Styl Nowoczesny</Link></li>
                                  <li><Link to="/oferta-uslugi">Usługi Dodatkowe</Link></li>
                                  {/* <li><Link to="/oferta-post-left-sidebar">Małe Perły</Link></li>
                                  <li><Link to="/oferta-post-left-sidebar-ER">Eleganckie Rezydencje</Link></li> */}
                                </ul>
                            </li>
                            <li><Link to="/realizacje-posts-right-sidebar">REALIZACJE</Link></li>
                            <li><Link to="/blog-posts-fullwidth">BLOG</Link>
                            </li>
                            <li><Link to="/contact-us">KONTAKT</Link></li>
                            </ul>
                        </div>
                        </nav>
                        {/*Button Box*/}
                        <div className="button-box">
                        {/* href="/downloads/dmd_domy_download.pdf" */}
                        <a onClick={handleDownload} className="ploting-btn btn-style-one">POBIERZ KATALOG</a>
                        </div>
                        {/*Search Box Outer*/}
                        <div className="menu-search-box">
                            <div className="dropdown">
                                <button className="menu-sb-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search plot-sty" /></button>
                                <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                    <li className="panel-outer">
                                        <div className="form-container">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                  <input type="search" name="field-name" placeholder="Search Here" required value={wprowadzonyTekst} onChange={handleInputChange} />
                                                  <button type="submit" className="search-btn"><i className="fa fa-search" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*End Header Upper*/}
        {/*Sticky Header*/}
        <div className="sticky-header">
            <div className="default-container clearfix">
                {/*Logo*/}
                <div className="logo pull-left">
                <Link to="/" className="img-responsive"><img src="images/logo-small.png" alt="" title /></Link>
                </div>
                {/*Right Col*/}
                <div className="right-col pull-right">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    <i className="icon-bar" />
                    </button>
                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                    <ul className="navigation clearfix">
                        <li className="current dropdown"><Link to="/">DMD</Link>
                            <ul>
                                <li><a href="https://dmdbudownictwo.pl" rel="noreferrer" target="_blank">DMD Budownictwo</a></li>
                                <li><a href="https://dmdelitehome.pl" rel="noreferrer" target="_blank">DMD EliteHome</a></li>
                                <li><a href="https://dmdinwestycje.pl" rel="noreferrer" target="_blank">DMD Inwestycje</a></li>
                                {/* <li><a href="https://dmdinstalacje.pl" rel="noreferrer" target="_blank">DMD Instalacje</a></li>
                                <li><a href="https://dmddevelopment.pl" rel="noreferrer" target="_blank">DMD Development</a></li> */}
                            </ul>
                        </li>                                    
                        <li className="dropdown"><Link to="/o-nas">DLACZEGO MY?</Link>
                        <ul>
                            <li><Link to="/trust">ZAUFANIE</Link></li>
                            <li><Link to="/o-nas">O NAS</Link></li>
                            <li><Link to="/team">ZESPÓŁ</Link></li>
                            <li><Link to="/advice">KONSULTACJE</Link></li>
                        </ul>
                        </li>
                        <li className="dropdown"><Link to="/oferta-wille">OFERTA</Link>
                        <ul>
                          <li><Link to="/oferta-parterowe">Parterowe</Link></li>
                          <li><Link to="/oferta-poddasze">Z Poddaszem</Link></li>
                          <li><Link to="/oferta-pietrowe">Piętrowe</Link></li>
                          <li><Link to="/oferta-wille">Wille</Link></li>
                          <li><Link to="/oferta-nowoczesne">Styl Nowoczesny</Link></li>
                          <li><Link to="/oferta-uslugi">Usługi Dodatkowe</Link></li>

                          {/* <li><Link to="/oferta-post-left-sidebar">Małe Perły</Link></li>
                          <li><Link to="/oferta-post-left-sidebar-ER">Eleganckie Rezydencje</Link></li> */}
                        </ul>
                        </li>
                        <li><Link to="/realizacje-posts-right-sidebar">REALIZACJE</Link></li>
                        <li><Link to="/blog-posts-fullwidth">BLOG</Link>
                        </li>
                        <li><Link to="/contact-us">KONTAKT</Link></li>
                    </ul>
                    </div>
                </nav>
                {/* Main Menu End*/}
                </div>
            </div>
        </div>
        {/*End Sticky Header*/}
    </div>
  </>
	)
}

export default NavOne;
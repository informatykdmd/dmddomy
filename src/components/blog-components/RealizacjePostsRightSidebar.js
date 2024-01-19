import React from 'react';
import { Link } from 'react-router-dom';
import SidebarRightRealizacje from '../../elements/SidebarRightRealizacje';

const BlogPostsRightSidebar = () => {
    return(
      <>
      {/*Blog Details Section*/}
      <section className="section-padding-five single-blog-section section-padding-all">
      <div className="default-container">
        <div className="row clearfix">
          <div className="col-md-8 order-md-1">
            <div className="row clearfix">
              <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/realizacje/rl-00-750x430-RezydencjaParkowa.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Budowa domu</p>
                    <h5 className="font-weight-bold"><Link to="/single-realizacja-RezydencjaParkowa" className="read-more">Rezydencja Parkowa</Link></h5>
                    <p className="text-muted">W ciągu kilku lat z powodzeniem zrealizowaliśmy cztery projekty domów według koncepcji Rezydencja Parkowa. Nasze budowy obejmują lokalizacje w Zielonce, obok Starych Babic, w powiecie zachodnim Warszawskim oraz ponownie w Zielonce. Każda inwestycja to unikalne połączenie stylu, funkcjonalności i nowoczesnej architektury, spełniające oczekiwania naszych klientów.</p>
                    {/* <p className="space-date text-muted"> Kazi Porag - 27 May 2022</p> */}
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-RezydencjaParkowa">Zobacz Wszystkie Zdjęcia</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/realizacje/rl-00-750x430-DomzWidokiem4.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Budowa domu</p>
                    <h5 className="font-weight-bold"><Link to="/single-realizacja-DomzWidokiem4" className="read-more">Dom z Widokiem 4</Link></h5>
                    <p className="text-muted">Osiągnęliśmy sukces w realizacji projektu Dom z Widokiem 4 w różnych lokalizacjach. Zbudowaliśmy nowoczesny dom jednorodzinny w zachodniej Warszawie, powiecie zachodnim Warszawskim oraz w Izabelinie. Każda z tych inwestycji odzwierciedla unikalny charakter i styl, tworząc przestronne i funkcjonalne przestrzenie dla naszych klientów.</p>
                    {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-DomzWidokiem4">Zobacz Wszystkie Zdjęcia</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/realizacje/rl-00-750x430-Kasjopea.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Budowa domu</p>
                    <h5 className="font-weight-bold"><Link to="/single-realizacja-Kasjopea" className="read-more"> Kasjopea</Link></h5>
                    <p className="text-muted">Zrealizowaliśmy projekt Kasjopea w Ożarowie Mazowieckim, obejmujący budowę nowoczesnego domu. Inna inwestycja związana z projektem Kasjopea miała miejsce w sąsiedniej miejscowości - Błonie. Oferujemy unikalne i funkcjonalne rozwiązania architektoniczne, dostosowane do indywidualnych potrzeb naszych klientów.</p>
                    {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-Kasjopea">Zobacz Wszystkie Zdjęcia</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/realizacje/rl-00-750x430-OpalElegancja.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Budowa domu</p>
                    <h5 className="font-weight-bold"><Link to="/single-realizacja-OpalElegancja" className="read-more">Opal Elegancja</Link></h5>
                    <p className="text-muted">Zrealizowaliśmy budowę domu według projektu Opal w Zielonce oraz w Pruszkowie. Oferujemy unikalne rozwiązania architektoniczne dostosowane do lokalnych warunków i indywidualnych potrzeb klientów, zapewniając komfort i funkcjonalność.</p>
                    {/* <p className="space-date text-muted"> Kazi Porag - 27 May 2022</p> */}
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-OpalElegancja">Zobacz Wszystkie Zdjęcia</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                  <img src="images/realizacje/rl-00-750x430-RezydencjaLesna.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Budowa domu</p>
                    <h5 className="font-weight-bold"><Link to="/single-realizacja-RezydencjaLesna" className="read-more">Rezydencja Leśna</Link></h5>
                    <p className="text-muted">Budowaliśmy domy zgodnie z projektem Rezydencja Leśna w różnych lokalizacjach, w tym w Latchorzewie, na zachodnich obrzeżach Warszawy oraz w Starych Babicach. Każda inwestycja charakteryzuje się wyjątkowym połączeniem elegancji i harmonii z otaczającym przyrodniczym środowiskiem.</p>
                    {/* <p className="space-date text-muted"> Kazi Porag -28 May 2022</p> */}
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-realizacja-RezydencjaLesna">Zobacz Wszystkie Zdjęcia</Link>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/blog/bl-03-750x430.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Architecture Design</p>
                    <h5 className="font-weight-bold"><Link to="#" className="read-more"> Commercial design for project</Link></h5>
                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content</p>
                    <p className="space-date text-muted"> Kazi Porag -28 May 2022</p>
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-post">Read More</Link>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/blog/bl-01-750x430.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Building Renovation</p>
                    <h5 className="font-weight-bold"><Link to="#" className="read-more">Commercial design for project</Link></h5>
                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content</p>
                    <p className="space-date text-muted"> Kazi Porag - 27 May 2022</p>
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-post">Read More</Link>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-6 mb-4 field-overlay-holder">
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src="images/blog/bl-02-750x430.png" alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">Building Maintenance</p>
                    <h5 className="font-weight-bold"><Link to="#" className="read-more">Commercial design for project</Link></h5>
                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content</p>
                    <p className="space-date text-muted"> Kazi Porag -28 May 2020</p>
                    <Link className="read-more text-uppercase font-weight-bold" to="/single-post">Read More</Link>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul className="cr-pagination-center">
                  <li><Link to="#" title><i className="fa fa-angle-left" /></Link></li>
                  <li className="active"><Link to="#" title>1</Link></li>
                  <li><Link to="#" title>2</Link></li>
                  <li><Link to="#" title>3</Link></li>
                  <li><Link to="#" title><i className="fa fa-angle-right" /></Link></li>
                </ul>
              </div> */}
            </div>
          </div>

          <SidebarRightRealizacje />

        </div>
      </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogPostsRightSidebar;
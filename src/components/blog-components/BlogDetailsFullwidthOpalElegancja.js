import React from 'react';
import { Link } from 'react-router-dom';
import ZoomableImage from '../../supportscripts/ZoomableImage';

const BlogDetailsFullwidth = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-01-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Dom Opal w Zielonce: Ukończona Budowa</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z zadowoleniem prezentujemy ukończoną budowę Domu Opal w Zielonce. Archiwalne zdjęcie przedstawia gotowy budynek, który został wykończony i oddany do użytku. Nowoczesny design kolorystyczny elewacji nadaje mu wyjątkowy charakter, tworząc harmonijną i stylową przestrzeń, gotową spełnić oczekiwania mieszkańców. ”
                  </p>
                </blockquote>
              </div>
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-02-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu Jednorodzinnego Opal w Zielonce: Elegancja i Funkcjonalność w Jednym Miejscu</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z dumą prezentujemy zakończony etap budowy Domu Jednorodzinnego Opal w Zielonce. Na archiwalnym zdjęciu uchwycono gotowy budynek, w którym elegancja i funkcjonalność spotykają się w jednym miejscu. To miejsce, gdzie marzenia o komfortowym i stylowym domu stają się rzeczywistością, a właściciele już cieszą się swoim nowym miejscem zamieszkania. ”
                  </p>
                </blockquote>
              </div>
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-03-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu według Projektu Opal w Zielonce: Nowoczesny Styl i Komfort</h3>
                  
                </div>
                <blockquote>
                  <p> “ Przedstawiamy efekt budowy Domu według Projektu Opal w Zielonce. Archiwalne zdjęcie ukazuje gotowy budynek, w którym nowoczesny styl spotyka się z komfortem. Zakończony etap budowy to chwila, gdy projekt staje się rzeczywistością, tworząc harmonijną i funkcjonalną przestrzeń gotową do życia. ”
                  </p>
                </blockquote>
                
              </div>
              {/* <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-04-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Zakończona Budowa Domu w Zielonce według Projektu Opal: Nowoczesna Architektura w Zgodzie z Przyrodą</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z przyjemnością prezentujemy zakończoną budowę Domu w Zielonce według Projektu Opal. Archiwalne zdjęcie ukazuje gotowy budynek, gdzie nowoczesna architektura doskonale współgra z otaczającą przyrodą. To miejsce, w którym harmonia projektu Opal przenika się z pięknem natury, tworząc wyjątkową przestrzeń gotową do życia. ”
                  </p>
                </blockquote>
                
              </div> */}
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-05-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Zakończona Realizacja Domu według Projektu Opal w Pruszkowie: Nowoczesna Elegancja i Komfort</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z radością prezentujemy zakończoną realizację Domu według Projektu Opal w Pruszkowie. Archiwalne zdjęcie ukazuje gotowy budynek, w którym nowoczesna elegancja spotyka się z komfortem. To miejsce, gdzie każdy detal projektu Opal został doskonale uwzględniony, tworząc harmonijną i funkcjonalną przestrzeń gotową do pełnienia roli domu. ”
                  </p>
                </blockquote>
                
              </div>
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-06-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu według Projektu Opal w Pruszkowie: Nowoczesny Styl i Wygoda</h3>
                  
                </div>
                <blockquote>
                  <p> “ Przedstawiamy zakończoną budowę Domu według Projektu Opal w Pruszkowie. Archiwalne zdjęcie ukazuje gotowy budynek, w którym nowoczesny styl spotyka się z wygodą. Zakończony etap budowy to chwila, gdy projekt staje się rzeczywistością, tworząc harmonijną i funkcjonalną przestrzeń gotową do komfortowego życia. ”
                  </p>
                </blockquote>
                
              </div>
              {/* <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-07-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu Jednorodzinnego Opal w Zielonce: Elegancja i Komfort wśród Zieleni</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z dumą prezentujemy ukończoną budowę Domu Jednorodzinnego Opal w Zielonce. Na archiwalnym zdjęciu ukazany jest gotowy budynek, w którym elegancja i komfort doskonale współgrają w otoczeniu zieleni. To harmonijne połączenie nowoczesnego designu z naturalnym pięknem, tworzące wyjątkową przestrzeń gotową do pełnienia roli domu. ”
                  </p>
                </blockquote>
                
              </div> */}
              {/* <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-08-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Dom w Zielonce według Projektu Opal: Harmonia Nowoczesności i Przyrody</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z radością prezentujemy zakończoną budowę Domu w Zielonce według Projektu Opal. Archiwalne zdjęcie ukazuje gotowy budynek, w którym harmonia nowoczesności spotyka się z przyrodą. To miejsce, w którym elegancki design współgra z naturalnym pięknem, tworząc wyjątkową przestrzeń gotową do pełnienia roli domu. ”
                  </p>
                </blockquote>
                
              </div> */}
              {/* <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-09-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu Opal w Zielonce: Nowoczesny Komfort w Malowniczym Krajobrazie Podmiejskim</h3>
                  
                </div>
                <blockquote>
                  <p> “ Z dumą prezentujemy zakończoną budowę Domu Opal w Zielonce, gdzie nowoczesny komfort splata się z malowniczym krajobrazem podmiejskim. Archiwalne zdjęcie ukazuje gotowy budynek, w którym elegancja spotyka się z funkcjonalnością, a malowniczy krajobraz podkreśla urok tego wyjątkowego miejsca, gotowego do spełniania marzeń o domowym cieple i spokoju. ”
                  </p>
                </blockquote>
                
              </div> */}
              {/* <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src="images/realizacje/rl-10-1920x1075-OpalElegancja.png" alt="realizations" />
                </div>
                <div className="det-content">
                  <h3>Budowa Domu w Zielonce według Projektu Opal: Elegancja i Nowoczesność</h3>
                  
                </div>
                <blockquote>
                  <p> “ Przedstawiamy efekt budowy Domu w Zielonce według Projektu Opal. Archiwalne zdjęcie ukazuje gotowy budynek, w którym elegancja spotyka się z nowoczesnością. W tle rozciąga się malowniczy krajobraz podmiejski, a widoczne są także inne domy sąsiadów. To miejsce, gdzie harmonijna wspólnota architektoniczna tworzy unikalny pejzaż gotowy do życia. ”
                  </p>
                </blockquote>
                
              </div> */}
              <div className="blog-nav clearfix">
                    <Link to="/single-realizacja-Kasjopea" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                    <Link to="/single-realizacja-RezydencjaLesna" className="blog-next"><i className="fa fa-angle-right" /></Link>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogDetailsFullwidth;
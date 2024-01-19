import React from 'react';
// Przewiń stronę do góry z animacją
import $ from 'jquery'

const PomocHelp = () => {
    $(function() {
        // Przewiń stronę do góry z animacją
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    return(
    <>
    <section className="single-blog-section">
        <div className="default-container">
            <div className="col-md-12">
                <div className="blog-detail mt-30">
                    <div className="author-section">
                        <div className="all-title">
                            <h2 className="sec-title">
                                <span> Witaj w Dziale Pomocy!</span>
                            </h2>
                            <p>
                                Nasz zespół jest tutaj, aby uprościć Twoje doświadczenie na naszej platformie. 
                                Poniżej znajdziesz kilka sekcji, które mogą Ci pomóc z zapytaniami, informacjami 
                                o polityce prywatności, zasadami korzystania oraz innymi kwestiami. Jeśli nadal 
                                potrzebujesz pomocy, skorzystaj z formularza kontaktowego lub skontaktuj się 
                                bezpośrednio z naszym zespołem. Jesteśmy gotowi, aby Ci pomóc!
                            </p>  <br /><hr />
                            <h4><strong>Polityka Prywatności</strong></h4>
                            <blockquote>
                                Zapoznaj się z naszą polityką prywatności, aby dowiedzieć się, jak dbamy o bezpieczeństwo Twoich danych osobowych. Twoja prywatność jest dla nas priorytetem.
                            </blockquote>

                            <h4><strong>Zasady Korzystania z Witryny</strong></h4>
                            <blockquote>
                                Przeczytaj nasze zasady korzystania z witryny, aby zrozumieć reguły i warunki korzystania z naszych usług. Zalecamy przestrzeganie tych zasad dla zwiększenia wydajności i bezpieczeństwa korzystania z platformy.
                            </blockquote>

                            <h4><strong>FAQ's</strong></h4>
                            <blockquote>
                                W dziale FAQ's znajdziesz odpowiedzi na najczęściej zadawane pytania. Sprawdź, czy znajdziesz tu rozwiązanie swoich wątpliwości przed skontaktowaniem się z nami.
                            </blockquote>

                            <h4><strong>Kontakt</strong></h4>
                            <blockquote>
                                Potrzebujesz dodatkowej pomocy? Skorzystaj z formularza kontaktowego lub napisz bezpośrednio na adres e-mail naszego działu wsparcia: <strong><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></strong>.
                            </blockquote>

                            <h4><strong>Zespół</strong></h4>
                            <blockquote>
                                Poznaj nasz zespół! Tutaj znajdziesz informacje o osobach, które pracują na rzecz doskonalenia naszej platformy i zapewnienia Ci najlepszej obsługi.
                            </blockquote>

                            <h4><strong>Zapytaj o Wycenę</strong></h4>
                            <blockquote>
                                Interesuje Cię koszt naszych usług? Skorzystaj z formularza "Zapytaj o Wycenę", a nasz zespół skontaktuje się z Tobą wkrótce z dostosowaną ofertą.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default PomocHelp;
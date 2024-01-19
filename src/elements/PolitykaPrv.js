import React from 'react';
// Przewiń stronę do góry z animacją
import $ from 'jquery'

const PolitykaPrv = () => {
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
                                <span>Polityka Prywatności</span>
                            </h2>
                            <div>
                                Dbamy o Twoją prywatność i pragniemy, abyś był informowany o tym, 
                                w jaki sposób gromadzimy, używamy i chronimy Twoje dane osobowe. Przeczytaj poniższe informacje 
                                dotyczące naszej Polityki Prywatności:<br /><hr />
                            </div>
                            <h6><strong>1. Gromadzenie i Przetwarzanie Danych Osobowych</strong></h6>
                            <blockquote>
                                Dokładamy wszelkich starań, aby chronić Twoje dane osobowe. Gromadzimy jedynie niezbędne informacje, takie jak imię i adres e-mail, w celu dostarczania Ci istotnych aktualizacji i informacji dotyczących naszej społeczności.
                            </blockquote>
                            <h6><strong>2. Cel Przetwarzania Danych</strong></h6>
                            <blockquote>
                                Twoje dane osobowe są przetwarzane w celu dostarczania informacji, ofert, oraz personalizacji doświadczenia związanego z naszą społecznością.
                            </blockquote>
                            <h6><strong>3. Bezpieczeństwo Danych</strong></h6>
                            <blockquote>
                                Zapewniamy, że Twoje dane są u nas bezpieczne. Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić je przed nieautoryzowanym dostępem czy utratą.
                            </blockquote>
                            <h6><strong>4. Udostępnianie Danych</strong></h6>
                            <blockquote>
                                Nie udostępniamy Twoich danych osobowych stronom trzecim bez Twojej wyraźnej zgody. Dbamy o prywatność naszych użytkowników.
                            </blockquote>
                            <h6><strong>5. Prawa Użytkowników</strong></h6>
                            <blockquote>
                                Masz prawo do dostępu, poprawiania, usuwania lub ograniczania przetwarzania swoich danych osobowych. Skontaktuj się z nami, jeśli chcesz skorzystać z tych praw.
                            </blockquote>
                            <h6><strong>6. Przekazywanie Danych do Innych Krajów</strong></h6>
                            <blockquote>
                                W niektórych przypadkach, Twoje dane osobowe mogą być przekazywane do innych krajów zgodnie z obowiązującymi przepisami prawa.
                            </blockquote>
                            <h6><strong>7. Cookies i Technologie Śledzące</strong></h6>
                            <blockquote>
                                Używamy plików cookie i innych technologii śledzących w celu analizy ruchu na stronie, personalizacji treści oraz dostarczania reklam. Możesz zarządzać ustawieniami plików cookie w swojej przeglądarce.
                            </blockquote>
                            <h6><strong>8. Bezpieczeństwo Transmisji Danych</strong></h6>
                            <blockquote>
                                Podjęliśmy środki bezpieczeństwa w celu ochrony transmisji danych, jednakże nie możemy zagwarantować bezpieczeństwa absolutnego podczas przesyłania danych przez internet.
                            </blockquote>
                            <h6><strong>9. Kontakt z Nami</strong></h6>
                            <blockquote>
                                Jeśli masz pytania dotyczące naszej Polityki Prywatności, skontaktuj się z nami pod adresem <strong><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></strong>.
                            </blockquote>
                            <h6><strong>10. Zgoda na Przetwarzanie Danych</strong></h6>
                            <blockquote>
                                Korzystając z naszej społeczności, wyrażasz zgodę na przetwarzanie swoich danych osobowych zgodnie z niniejszą Polityką Prywatności.
                            </blockquote>
                            <h6><strong>11. Poinformowanie o Zmianach</strong></h6>
                            <blockquote>
                                Informacje o zmianach w Polityce Prywatności będą udostępniane na naszej stronie internetowej.
                            </blockquote>
                            <h6><strong>12. Zastosowanie Dla Dzieci</strong></h6>
                            <blockquote>
                                Nasza społeczność nie jest przeznaczona dla dzieci poniżej 13 roku życia. Nie gromadzimy świadomie danych od osób poniżej tego wieku.
                            </blockquote>
                            <h6><strong>13. Marketing Bezpośredni</strong></h6>
                            <blockquote>
                                Możemy przesyłać Ci informacje marketingowe jedynie po uzyskaniu Twojej wyraźnej zgody. Możesz zrezygnować z subskrypcji w dowolnym momencie.
                            </blockquote>
                            <h6><strong>14. Zmiana lub Usunięcie Danych</strong></h6>
                            <blockquote>
                                Masz prawo żądania zmiany lub usunięcia swoich danych osobowych. Skontaktuj się z nami w celu realizacji tych żądań.
                            </blockquote>
                            <h6><strong>15. Ważne Informacje Prawne</strong></h6>
                            <blockquote>
                                Niniejsza Polityka Prywatności jest częścią naszych Warunków Korzystania. Zapoznaj się również z nimi.
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

export default PolitykaPrv;
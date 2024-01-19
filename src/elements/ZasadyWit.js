import React from 'react';
// Przewiń stronę do góry z animacją
import $ from 'jquery'

const ZasadyWit = () => {
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
                            <span>Zasady Korzystania z Naszej Strony Internetowej</span>
                            </h2>
                            <div>
                                Aby zapewnić każdemu użytkownikowi satysfakcjonujące 
                                doświadczenie oraz utrzymać bezpieczeństwo i zgodność z naszymi standardami, opracowaliśmy 
                                poniższe zasady korzystania z naszej strony internetowej. Prosimy o dokładne zapoznanie się z nimi 
                                przed rozpoczęciem przeglądania czy korzystania z naszych usług.<br /><hr />
                            </div>
                            
                            <h6><strong>1. Rejestracja i Konto Użytkownika</strong></h6>
                            <blockquote>
                                Prosimy o uczciwe i dokładne podawanie informacji podczas procesu rejestracji. Każdy użytkownik jest odpowiedzialny za utrzymanie bezpieczeństwa swojego konta.
                            </blockquote>

                            <h6><strong>2. Prawa Autorskie i Własność Intelektualna</strong></h6>
                            <blockquote>
                                Szanujmy prawa autorskie oraz prawa własności intelektualnej. Zakazane jest kopiowanie, rozpowszechnianie lub modyfikowanie zawartości strony bez naszej zgody.
                            </blockquote>

                            <h6><strong>3. Zasady Prywatności</strong></h6>
                            <blockquote>
                                Dbamy o prywatność naszych użytkowników. Prosimy o zapoznanie się z naszą polityką prywatności, aby zrozumieć, jak gromadzimy, używamy i chronimy dane osobowe.
                            </blockquote>

                            <h6><strong>4. Zachowanie na Stronie</strong></h6>
                            <blockquote>
                                Wszyscy użytkownicy zobowiązani są do szanowania innych. Nie tolerujemy treści obraźliwych, dyskryminacyjnych czy nielegalnych. Zastrzegamy sobie prawo do usuwania takich treści.
                            </blockquote>

                            <h6><strong>5. Bezpieczeństwo Konta</strong></h6>
                            <blockquote>
                                Zachęcamy do stosowania silnych haseł i regularnej zmiany hasła. Ochrona konta przed nieautoryzowanym dostępem jest kluczowa.
                            </blockquote>

                            <h6><strong>6. Linki Zewnętrzne</strong></h6>
                            <blockquote>
                                Nie ponosimy odpowiedzialności za treści na stronach zewnętrznych, do których prowadzą linki na naszej stronie. Klikając na link, użytkownik akceptuje warunki korzystania z danej strony.
                            </blockquote>

                            <h6><strong>7. Aktualizacje i Modyfikacje</strong></h6>
                            <blockquote>
                                Zastrzegamy sobie prawo do wprowadzania zmian w treści strony oraz zasad korzystania. Użytkownicy zostaną poinformowani o istotnych aktualizacjach.
                            </blockquote>

                            <h6><strong>8. Komunikacja z Użytkownikami</strong></h6>
                            <blockquote>
                                Regularnie będziemy informować użytkowników o istotnych sprawach za pośrednictwem wiadomości e-mail lub ogłoszeń na stronie.
                            </blockquote>

                            <h6><strong>9. Odpowiedzialność Prawna</strong></h6>
                            <blockquote>
                                Użytkownicy są zobowiązani do przestrzegania lokalnych i międzynarodowych przepisów prawnych podczas korzystania z naszej strony.
                            </blockquote>

                            <h6><strong>10. Wsparcie Techniczne</strong></h6>
                            <blockquote>
                                Nasz zespół wsparcia technicznego jest gotów pomóc w rozwiązaniu problemów i udzielić odpowiedzi na pytania. Prosimy o kontakt, jeśli masz jakiekolwiek wątpliwości.
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

export default ZasadyWit;
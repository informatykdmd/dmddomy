import React from 'react';
import { Link } from 'react-router-dom';
// Przewiń stronę do góry z animacją
import $ from 'jquery'
const Faqs = () => {
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
                                <span>FAQ - Najczęściej Zadawane Pytania</span>
                            </h2>
                            <div>
                                Witajcie w naszym dziale FAQ! Poniżej znajdziecie odpowiedzi na najczęściej zadawane pytania dotyczące naszej platformy. Jeśli masz dodatkowe pytania, skontaktuj się z nami.<br /><hr />
                            </div>
                            <h6><strong>1. Jak mogę się zarejestrować na stronie?</strong></h6>
                            <blockquote>
                                Aby się zarejestrować, wystarczy zapisać się do naszego Newslettera, użyj formularza w stopce lub na stronie głównej. Możesz również <strong><Link to="/subscribe-us">skorzystać z tego linku</Link></strong>, następnie podaj wymagane informacje, postępuj zgodnie z instrukcjami.
                            </blockquote>

                            <h6><strong>2. Jak mogę zmienić swoje imię w subskrypcji?</strong></h6>
                            <blockquote>
                                Aby zmienić swoje imię w subskrypcji napisz z zarejestrowanego u nas swojego adresu email na <strong><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></strong> ze swoją prośbą a my wyślemy Ci informację zwrotną.
                            </blockquote>

                            <h6><strong>3. Jak mogę zaktualizować swój adres w subskrypcji?</strong></h6>
                            <blockquote>
                                Aby zaktualizować swój adres w subskrypcji, zarejestruj się jeszcze raz do naszego Newslettera, użyj formularza w stopce lub na stronie głównej. Możesz również <strong><Link to="/subscribe-us">skorzystać z tego linku</Link></strong>.
                            </blockquote>

                            <h6><strong>4. Czy istnieje możliwość anulowania mojej subskrypcji?</strong></h6>
                            <blockquote>
                                Tak, możesz anulować swoją subskrypcję w każdej chwili. Napisz wiadomość z zarejestrowanego u nas swojego adresu email na <strong><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></strong> ze swoją prośbą, a my wyślemy Ci informację zwrotną. Pamiętaj, że po anulowaniu subskrypcji stracisz komentowania i konwersacji na platformie.
                            </blockquote>

                            <h6><strong>5. Czy mogę korzystać z platformy na więcej niż jednym urządzeniu?</strong></h6>
                            <blockquote>
                                Tak, nasza platforma umożliwia korzystanie na wielu urządzeniach.
                            </blockquote>

                            <h6><strong>6. Jak mogę skontaktować się z zespołem wsparcia technicznego?</strong></h6>
                            <blockquote>
                                Jeśli masz pytania lub napotykasz problemy, skorzystaj z formularza kontaktowego dostępnego w sekcji Pomoc lub napisz bezpośrednio na adres e-mail naszego działu wsparcia: <strong><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></strong>.
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

export default Faqs;
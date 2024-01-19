import React, { useState } from 'react';
import axios from 'axios';
import myDatabaseConfig from '../supportscripts/env_connect';
import $ from 'jquery';
const AddSubscriberForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // upd
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Wyślij dane do serwera
      console.log('Wysyłanie danych do serwera:', { name, email });
  
      axios.post(`http://${ApiAddress}/api/addSubscriber`, { name, email })
        .then((response) => {
          console.log('Odpowiedź od serwera:', response.data);
          // Tutaj możesz obsłużyć odpowiedź od serwera, na przykład pokazać komunikat o sukcesie
            // Ustaw komunikat o sukcesie
            setSuccessMessage(response.data.success || 'Subskrybcja została dodana do bazy danych.');
            // Wyczyść stan po wysłaniu danych
            console.log('Wyczyszczono stan po wysłaniu danych.');
            setName('');
            setEmail('');
        })
        .catch((error) => {
          console.error('Błąd podczas wysyłania danych:', error);
          // Tutaj możesz obsłużyć błąd, na przykład pokazać komunikat o niepowodzeniu
            // Ustaw komunikat o błędzie
            setErrorMessage(error.response.data.error || 'Wystąpił błąd podczas rejestracji.');
        });
    };
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
                                <span> Dołącz do naszej społeczności! Zasubskrybuj nasz newsletter!</span>
                            </h2>
                            <p>
                                Chcemy, abyś był na bieżąco z najnowszymi informacjami, ciekawostkami oraz ekskluzywnymi ofertami. 
                                Zapisz się już teraz, a otrzymasz regularne aktualizacje dostarczane prosto do swojej skrzynki e-mail!
                            </p>  <br />
                            <h4><strong> Podaj swoje imię oraz adres e-mail, a my zadbanie o resztę.</strong></h4>
                            <p>
                                Bądź częścią naszej pasjonującej społeczności, gdzie nowości i inspiracje są na wyciągnięcie ręki. 
                                Nie przegap okazji na odkrywanie fascynujących treści i korzystanie z wyjątkowych promocji. <br /> <br />

                                Zapewniamy Ci, że szanujemy Twoją prywatność, a Twoje dane są u nas bezpieczne. <br /> <br />

                                Dołącz już teraz i zaczynaj odkrywać więcej!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-comment-form">
                    <form onSubmit={handleSubmit} className="comment-form">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Twoje Imię"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Adres E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn_custom ploting-btn btn-style-two"
                            >
                                Subskrybuj
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                        {/* Komunikat o błędzie */}
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        {/* Komunikat o sukcesie */}
                        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                    </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default AddSubscriberForm;
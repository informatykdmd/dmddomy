import React, { useState } from 'react';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const Quote = () => {
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
  
      axios.post(`http://${ApiAddress}:5000/api/addSubscriber`, { name, email })
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
    return(
        <>
        {/*Get A Quote Section*/}
        <section className="get-quote-section section-padding-two">
            <div className="default-container">
            <div className="row clearfix">
                <div className="col-lg-8 text-white">
                <h4> ZAPISZ SIĘ DO NASZEGO NEWSLETTERA! </h4>
                <span>Nigdy nie przegapisz niczego od DMD, zapisując się do naszego Newslettera.</span>
                </div>
                <div className="col-lg-4">
                    <form onSubmit={handleSubmit} className="comment-form">
                    <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Twoje Imię"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Adres E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                    </span>
                        
                    </div>
                </form>
                    {/* Komunikat o błędzie */}
                    {errorMessage && <div style={{ color: '#EE7775', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{errorMessage}</div>}
                    {/* Komunikat o sukcesie */}
                    {successMessage && <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{successMessage}</div>}
                </div>
            </div>
            </div>
        </section>
        {/*End Get A Quote Section*/}
        </>
    )
}

export default Quote;
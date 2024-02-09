import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const ActiveUser = () => {
  const { userHash } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const delay = 10000; // 10 sekund w milisekundach

    const timerId = setTimeout(() => {
      setShowContent(true);
    }, delay);

    // Pamiętaj o wyczyszczeniu timera, aby uniknąć wycieków pamięci
    return () => clearTimeout(timerId);
  }, []);

  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

  const handleActiveSubscriber = async () => {
      try {
        const response = await axios.post(`https://${ApiAddress}/api/activesSubscriber`, {userHash});
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

  useEffect(()=>{
    handleActiveSubscriber();
  }, [userHash, ApiAddress]);


  return (
    <>
      {/* Sekcja UserDetailsChanges */}
      <section className="user-details-changes-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30" style={{ textAlign: 'center'}}>
                {userData ? (
                  <div style={{ 
                        textAlign: 'center', 
                        fontSize: '30px', 
                        color: '#0e600c', 
                        fontWeight: 'bold', 
                        minWidth: '300px',
                        maxWidth: '500px'
                    }}>
                    <i className="fa fa-smile-o" style={{fontSize: '150px'}}></i>
                    <p>Twoje Konto Zostało Aktywowane</p>
                    <p>Dziękujemy za dołączenie do naszej platformy.</p>
                    <div style={{ 
                            textAlign: 'left', 
                            fontSize: '15px', 
                            color: '#000', 
                            fontWeight: 'normal'
                        }}>
                        <p>Ciepłe gratulacje! Twoje konto zostało pomyślnie aktywowane. Witamy Cię w naszej społeczności z otwartymi ramionami!</p>

                        <p> Teraz, jako aktywny subskrybent, masz dostęp do wielu możliwości personalizacji i interakcji.</p>

                        <p>Oto kilka ważnych informacji:</p>
                        <ul>
                            <li><strong>Dodanie Awatara:</strong> Spraw, by Twoje konto było unikalne! Dodaj awatar, który reprezentuje Twój styl i osobowość.</li>
                            <li><strong>Komentarze:</strong> Dzięki subskrybcji, teraz możesz swobodnie komentować posty na naszym blogu. Podziel się swoimi myślami i doświadczeniem z naszą dynamiczną społecznością.</li>
                        </ul>

                        <p>Jeszcze raz dziękujemy za dołączenie do DMD Blog. Mamy nadzieję, że Twoje doświadczenie z nami będzie pełne inspiracji i pozytywnych wrażeń.</p>

                        <p>Życzymy udanej podróży po świecie tańca i wspólnej pasji!</p>

                        <p>Z poważaniem,<br/>Zespół DMD</p>

                    </div>
                    {showContent ? (
                      <>
                        {window.location.href = 'https://dmddomy.pl'}
                      </>
                    ) : null}
                  </div>
                ) : (
                  error && <p>Błąd: {error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Koniec Sekcji UserDetailsChanges */}
    </>
  );
};

export default ActiveUser;
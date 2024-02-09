import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const UserDetailsChanges = () => {
  const { userHash } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const delay = 30000; // 10 sekund w milisekundach

    const timerId = setTimeout(() => {
      setShowContent(true);
    }, delay);

    // Pamiętaj o wyczyszczeniu timera, aby uniknąć wycieków pamięci
    return () => clearTimeout(timerId);
  }, []);

  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  console.log(userHash);

  const handleRemoveSubscriber = async () => {
      try {
        const response = await axios.post(`https://${ApiAddress}/api/removeSubscriber`, {userHash});
        setUserData(response.data); // Upewnij się, że struktura danych jest zgodna z tym, co zwraca nowy endpoint
      } catch (error) {
        setError(error.message);
      }
    };
  console.log(userData)
  useEffect(()=>{
    handleRemoveSubscriber();
  }, [userHash, ApiAddress]);

  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  }

  return (
     <>
      {/* Sekcja UserDetailsChanges */}
      <section className="user-details-changes-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                {userData ? (
                <div style={{width: '100%', marginLeft: '35%', marginRight: '35%'}}>
                  <div style={{ 
                        textAlign: 'center', 
                        fontSize: '30px', 
                        color: '#0e600c', 
                        fontWeight: 'bold', 
                        minWidth: '300px',
                        maxWidth: '500px'
                    }}>
                    <i className="fa fa-frown-o" style={{fontSize: '120px'}}></i>
                    <p>Twoje Konto Zostało Usunięte</p>
                    <p>Mamy nadzieję, że do nas jeszcze wrócisz.</p>
                    <div style={{ 
                            textAlign: 'left', 
                            fontSize: '15px', 
                            color: '#000', 
                            fontWeight: 'normal'
                        }}>
                        <p>
                          Rozumiemy, że podjęcie tej decyzji mogło być dla Ciebie trudne.
                        </p>
                        <p>
                          Chcieliśmy podziękować Ci za aktywność jako subskrybenta i za to, że byłeś częścią naszej społeczności. 
                          Jeśli masz jakiekolwiek pytania lub uwagi dotyczące Twojego doświadczenia na naszych stronach, 
                          prosimy o kontakt. Zawsze cenimy opinie naszych użytkowników.
                        </p>
                        <p>
                          Przypominamy, że w razie zmiany zdania, zawsze możesz ponownie do nas dołączyć. 
                          Zawsze ciepło reagujemy na powrót każdego z naszych byłych użytkowników.
                        </p>
                        <p>
                          Jeszcze raz dziękujemy i życzymy Ci wszystkiego najlepszego w Twojej dalszej podróży. 
                        </p>

                        <p>Z poważaniem,<br/>Zespół DMD</p>
                    </div>
                    {showContent ? (
                      <>
                        {window.location.href = 'https://dmddomy.pl'}
                      </>
                    ) : null}
                  </div>
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

export default UserDetailsChanges;
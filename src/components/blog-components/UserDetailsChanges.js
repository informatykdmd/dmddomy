import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const UserDetailsChanges = () => {
  const { userHash } = useParams();
  const [userAvatar, setUserAvatar] = useState('');
  const [error, setError] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [successFull, setSuccessFull] = useState(false);
  const ApiAdres = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

  const handleAvatarChange = (event) => {
    const nowyAvatar = event.target.value;
    setUserAvatar(nowyAvatar);
    
    // Opcjonalnie: Wyświetl podgląd avatara
    setAvatarPreview(nowyAvatar);
  };

  const handleAvatarSubmit = async () => {
    
    try {
      // Sprawdź, czy URL avatara zaczyna się od 'http' i kończy na 'jpg' lub 'png'
      if (!userAvatar.match(/^http/) || !(userAvatar.endsWith('.jpg') || userAvatar.endsWith('.png'))) {
        setError('Nieprawidłowy format adresu URL obrazka.');
        return;
      }
      console.log('userAvatar', userAvatar, typeof userAvatar);
      const response = await axios.post(`https://${ApiAdres}/api/addSubscriberAvatar`, { userHash, userAvatar });
      console.log(response.data);
      setSuccessFull(true);
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      {/* Sekcja UserDetailsChanges */}
      <section className="user-details-changes-section section-padding-all">
        <div className="default-container">
          <div className="blog-detail mt-30">
            {userHash ? (
              <div className="row">
                <div className="col-md-12" style={{width: '100%', marginLeft: '35%', marginRight: '35%'}}>
                  <form>
                    <div >
                      {/* Opcjonalnie: Wyświetl podgląd avatara */}
                      {avatarPreview && <img src={avatarPreview} alt="Podgląd avatara" style={{ maxWidth: '100%', maxHeight: '150px' }} />}
                    </div>
                    <div>
                      <label>Adres URL obrazka avatara:</label>
                    </div>
                    <div>
                      <input type="text" value={userAvatar} onChange={handleAvatarChange} />
                    </div>
                    
                    <div>
                      <button type="button" onClick={handleAvatarSubmit}>Aktualizuj avatar</button>
                    </div>
                    
                      {successFull && <div><span style={{color: 'green'}}>Avatar został pomyślnie zmieniony.</span></div> }
                    
                  </form>
                </div>
              </div>
            ) : (
              <p>Ładowanie danych użytkownika...</p>
            )}
            {error && <p style={{ color: 'red' }}>Błąd: {error}</p>}
          </div>
        </div>
      </section>
      {/* Koniec Sekcji UserDetailsChanges */}
    </>
  );
};

export default UserDetailsChanges;

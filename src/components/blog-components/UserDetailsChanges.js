import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const UserDetailsChanges = () => {
  const { userHash } = useParams();
  const [userAvatar, setUserAvatar] = useState('');
  const [error, setError] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  
  const ApiAdres = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  let SuccessFull = false;
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
      SuccessFull = true;
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      {/* Sekcja UserDetailsChanges */}
      <section className="user-details-changes-section section-padding-all">
        <div className="default-container">
          {userHash ? (
            <div className="row">
              <div className="col-md-12">
                <form>
                  <label>Adres URL obrazka avatara:</label>
                  <input type="text" value={userAvatar} onChange={handleAvatarChange} />

                  {/* Opcjonalnie: Wyświetl podgląd avatara */}
                  {avatarPreview && <img src={avatarPreview} alt="Podgląd avatara" style={{ maxWidth: '100%', maxHeight: '150px' }} />}

                  <button type="button" onClick={handleAvatarSubmit}>Aktualizuj avatar</button>
                  {SuccessFull && <span style={{color: 'green'}}>Avatar został pomyślnie zmieniony.</span>}
                </form>
              </div>
            </div>
          ) : (
            <p>Ładowanie danych użytkownika...</p>
          )}
          {error && <p style={{ color: 'red' }}>Błąd: {error}</p>}
        </div>
      </section>
      {/* Koniec Sekcji UserDetailsChanges */}
    </>
  );
};

export default UserDetailsChanges;

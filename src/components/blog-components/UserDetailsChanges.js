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

      // Pobierz obrazek, aby sprawdzić jego rozmiar
      const imageResponse = await fetch(userAvatar);
      const blob = await imageResponse.blob();

      // Sprawdź, czy wymiary obrazka są zgodne z podanymi ograniczeniami
      const img = new Image();
      img.src = URL.createObjectURL(blob);

      img.onload = async () => {
        if (img.width > 300 || img.height > 300) {
          setError('Rozmiar obrazka nie może przekraczać 300x300 pikseli.');
        } else {
          // Jeśli wszystkie warunki są spełnione, wykonaj zapytanie do API w celu aktualizacji avatara
          
          const response = await axios.post(`https://${ApiAdres}/api/addSubscriberAvatar`, { userHash, userAvatar });
          console.log(response.data);
          setError(null);
          setUserAvatar(''); // Opcjonalnie: Wyczyść pole adresu URL po sukcesie
          setAvatarPreview(null);
        }
      };
    } catch (error) {
      setError(error.message);
    }
  };
  console.log('userAvatar', userAvatar);
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

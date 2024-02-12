import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const UserDetailsChanges = () => {
  const { userHash } = useParams();
  const [userAvatar, setUserAvatar] = useState('');
  const [userData, setUserData] = useState('');
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

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`https://${ApiAdres}/api/getUserName`, { params: { userHash } });
        const fetchedUserData = response.data;

        if (Array.isArray(fetchedUserData) && fetchedUserData.length > 0) {
          const clientName = fetchedUserData[0].CLIENT_NAME;
          // console.log('clientName', clientName);
          setUserData(clientName);
        } else {
          console.error("Nieprawidłowy format danych użytkownika");
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych użytkownika", error);
      }
    };
  
    getUserData();
  }, [ApiAdres, userHash]);

  const handleAvatarSelection = (selectedAvatar) => {
    setUserAvatar(selectedAvatar);
    setAvatarPreview(selectedAvatar);
  };
  console.log('userData.CLIENT_NAME', userData);
  return (
    <>
      {/* Sekcja UserDetailsChanges */}
      <section className="user-details-changes-section section-padding-all">
        <div className="default-container">
          <div className="blog-detail mt-30">
            {userData ? (
              <div className="row">
                <div className="col-md-12" style={{ 
                                      display: 'flex', 
                                      flexDirection: 'column', 
                                      alignItems: 'center', 
                                      justifyContent: 'center', 
                                      height: '100vh'
                                      }}>
                  <form>
                    <div >
                      {/* Opcjonalnie: Wyświetl podgląd avatara */}
                      {avatarPreview && <img src={avatarPreview} alt="Podgląd avatara" style={{ maxWidth: '100%', maxHeight: '150px' }} />}
                    </div>
                    <div style={{margin: '10px'}}>
                        { userData }
                    </div>
                    <div style={{margin: '10px'}}>
                      <input type="text" className="form-control" placeholder="Adres URL obrazka avatara:" value={userAvatar} onChange={handleAvatarChange} />
                    </div>
                    
                    <div style={{margin: '10px'}}>
                      <button className="btn btn_custom ploting-btn btn-style-two" type="button" onClick={handleAvatarSubmit}>Aktualizuj avatar</button>
                    </div>
                    <div style={{margin: '10px'}}>
                      <button
                        className='com-img'
                        type="button"
                        style={{
                          borderRadius: '50%',
                          overflow: 'hidden',
                          width: '100px', // Ustaw dowolną szerokość, aby uzyskać pożądany rozmiar kółka
                          height: '100px', // Ustaw dowolną wysokość, aby uzyskać pożądany rozmiar kółka
                          padding: 0, // Usuwa wewnętrzny padding
                        }}
                        onClick={() => handleAvatarSelection('https://heretyk.smallhost.pl/img/logo.png')}
                      >
                          <div >
                            <img src="https://heretyk.smallhost.pl/img/logo.png" alt="Avatar 1" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                          </div>
                        </button>
                        <button
                          className='com-img'
                          type="button"
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '100px', // Ustaw dowolną szerokość, aby uzyskać pożądany rozmiar kółka
                            height: '100px', // Ustaw dowolną wysokość, aby uzyskać pożądany rozmiar kółka
                            padding: 0, // Usuwa wewnętrzny padding
                          }}
                          onClick={() => handleAvatarSelection('https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-36/256/Avatar-6-icon.png')}
                        >
                          <div>
                            <img src="https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-36/256/Avatar-6-icon.png" alt="Avatar 2" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                          </div>
                        </button>
                        <button
                          className='com-img'
                          type="button"
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '100px', // Ustaw dowolną szerokość, aby uzyskać pożądany rozmiar kółka
                            height: '100px', // Ustaw dowolną wysokość, aby uzyskać pożądany rozmiar kółka
                            padding: 0, // Usuwa wewnętrzny padding
                          }}
                          onClick={() => handleAvatarSelection('https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-workerindustryavatarengineersupervisor-blue-dotted-line-png-image_1493290.jpg')}
                        >
                          <div>
                            <img src="https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-workerindustryavatarengineersupervisor-blue-dotted-line-png-image_1493290.jpg" alt="Avatar 2" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                          </div>
                        </button>
                        <button
                          className='com-img'
                          type="button"
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '100px', // Ustaw dowolną szerokość, aby uzyskać pożądany rozmiar kółka
                            height: '100px', // Ustaw dowolną wysokość, aby uzyskać pożądany rozmiar kółka
                            padding: 0, // Usuwa wewnętrzny padding
                          }}
                          onClick={() => handleAvatarSelection('https://www.pinpng.com/pngs/m/474-4744223_wild-hunt-witcher-avatar-hd-png-download.png')}
                        >
                          <div>
                            <img src="https://www.pinpng.com/pngs/m/474-4744223_wild-hunt-witcher-avatar-hd-png-download.png" alt="Avatar 2" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                          </div>
                        </button>
                        <button
                          className='com-img'
                          type="button"
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '100px', // Ustaw dowolną szerokość, aby uzyskać pożądany rozmiar kółka
                            height: '100px', // Ustaw dowolną wysokość, aby uzyskać pożądany rozmiar kółka
                            padding: 0, // Usuwa wewnętrzny padding
                          }}
                          onClick={() => handleAvatarSelection('https://w7.pngwing.com/pngs/210/693/png-transparent-leonardo-dicaprio-the-wolf-of-wall-street-film-youtube-leonardo-dicaprio-celebrities-microphone-glasses-thumbnail.png')}
                        >
                          <div>
                            <img src="https://w7.pngwing.com/pngs/210/693/png-transparent-leonardo-dicaprio-the-wolf-of-wall-street-film-youtube-leonardo-dicaprio-celebrities-microphone-glasses-thumbnail.png" alt="Avatar 2" style={{ maxWidth: '100%', maxHeight: '100px' }}/>
                          </div>
                        </button>
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

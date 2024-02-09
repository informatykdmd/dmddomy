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
              <div className="blog-detail mt-30">
                {userData ? (
                  <div style={{ textAlign: 'center', fontSize: '30px', color: 'greenyellow', fontWeight: 'bold' }}>
                    <p>Konto zostało aktywowane</p>
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
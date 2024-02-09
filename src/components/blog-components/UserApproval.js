import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const ActiveUser = () => {
  const { userHash } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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
                    <div>
                        <p>Konto zostało aktywowane</p>
                        <p>Przykład: {userHash}</p>
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
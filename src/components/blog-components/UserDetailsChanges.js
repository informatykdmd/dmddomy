import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';


const BlogDetailsFullwidth = () => {
    const { userHash } = useParams();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
  
    const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`https://dmddomy.pl/api/activeUser/${userHash}`);
          setUserData(response.data);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchUserData();
    }, [userHash]);
  
    function formatDate(dateTimeString) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
      return formattedDate;
    }


    return(
        <>
        {/* Sekcja UserDetailsChanges */}
        <section className="user-details-changes-section section-padding-all">
          <div className="default-container">
            {userData ? (
              <div className="row">
                <div className="col-md-12">
                  {/* Wyświetl dane użytkownika tutaj, używając userData */}
                  {/* Przykład: <p>{userData.firstName}</p> */}
                </div>
              </div>
            ) : (
              <p>Ładowanie danych użytkownika...</p>
            )}
            {error && <p>Błąd: {error}</p>}
          </div>
        </section>
        {/* Koniec Sekcji UserDetailsChanges */}
      </>
    )
}

export default BlogDetailsFullwidth;
import React, { useState, useEffect } from 'react';

const JsonReader = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./jsons/env.json'); // Zmień ścieżkę dostępu do pliku JSON
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  function giveMeAddress(jsonGot) {
    // Dodaj sprawdzenie, czy jsonGot nie jest nullem przed dostępem do właściwości
    if (jsonGot && jsonGot.API_MySQL) {
      const fullAddress = jsonGot.API_MySQL.url + ":" + jsonGot.API_MySQL.port;
      return fullAddress;
    }
    return null;
  };

  const address = giveMeAddress(jsonData);


  return (
    <div>
      <h1>User Information</h1>
      {jsonData ? (
        <div>
          <p>Name: {jsonData.API_MySQL.name}</p>
          <p>URL: {jsonData.API_MySQL.url}</p>
          <p>Port: {jsonData.API_MySQL.port}</p>
          <p>Address: {address && address}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default JsonReader;

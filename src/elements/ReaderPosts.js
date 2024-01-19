import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Wywołaj endpoint /api/getLatestPosts, domyślnie pobierając 3 najnowsze posty
    axios.get('http://localhost:5000/api/getLatestPosts?count=3') // ?count=3
      .then((response) => {
        console.log('Odpowiedź z serwera (najnowsze posty):', response.data);
        setLatestPosts(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania najnowszych postów:', error);
      });
  }, []);

  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  };

  return (
    <div>
      <h2>Najnowsze posty</h2>
      <ul>
        {latestPosts.map((post) => (
          <li key={post.ID}>
            <p><Link to={`/post/${post.ID}`} className="read-more">{post.contentDetails && post.contentDetails.ID}</Link></p>
            <strong>{post.contentDetails && post.contentDetails.TITLE}</strong> - {post.authorDetails && post.authorDetails.NAME_AUTHOR}
            <p>{post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}</p>
            
          </li>
          
        ))}
      </ul>
    </div>
    
  );
};

export default LatestPosts;

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../supportscripts/env_connect';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = location.state?.wprowadzonyTekst || null;
  const [results, setResults] = useState([]);
  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://${ApiAddress}/api/searchPosts?query=${searchQuery}`);
        setResults(response.data);
      } catch (error) {
        console.error('Błąd podczas wyszukiwania postów:', error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery, ApiAddress]);

  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  };
  useEffect(() => {
    // Skracanie tekstu
    var elementsToTruncate = document.querySelectorAll('.truncate');
    elementsToTruncate.forEach(function (element) {
      var originalText = element.innerText;
      var truncatedText = originalText.length > 400 ? originalText.substring(0, 400) + ' . . .' : originalText;
      element.innerText = truncatedText;
    });
  }, [results]);

  return (
    <>
    <section className="single-blog-section">
        <div className="default-container">
            <div className="col-md-12">
                <div className="blog-detail mt-30">
                    <div className="author-section">
                      {results.length > 0 ? (
                        <div className="all-title">
                            <h2 className="sec-title">
                                <span>Wyniki wyszukiwania: {searchQuery}</span>
                            </h2>
                            {results.map((post) => (
                            <div key={post.ID}>
                            <blockquote style={{ padding: 15, margin: 15}}>
                            <h4><Link to={`/post-${post.ID}`} style={{ color: 'Green'}}><strong>{post.TITLE}</strong></Link></h4>
                            
                              <div className='truncate'>{post.CONTENT_MAIN} {post.HIGHLIGHTS}</div>
                              <p><span style={{fontSize: 15}}>Opublikowano: {formatDate(post.DATE_TIME)}</span></p>
                              <p><Link to={`/post-${post.ID}`} style={{fontSize: 15, color: 'Green'}}>Czytaj więcej</Link></p>
                            </blockquote>
                            </div>
                            ))}
                        </div>
                          ) : (
                        <h2 className="sec-title">
                          <span>Brak wyników wyszukiwania dla frazy: {searchQuery}.</span>
                        </h2>
                      )}  
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default SearchResults;

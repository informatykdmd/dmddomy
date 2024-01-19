import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import PostItem from './PostItem';
// import { Link } from 'react-router-dom';

const BlogPostsList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      // Sprawdź, czy użytkownik przewinął do samego dołu strony
      if (scrollTop + clientHeight >= scrollHeight - 200 && !isLoading) {
        // Załaduj więcej postów
        setIsLoading(true);

        // Pobierz nowe posty
        axios.get('http://localhost:5000/api/loadMorePosts')
          .then((response) => {
            setBlogPosts((prevPosts) => [...prevPosts, ...response.data]);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Błąd podczas ładowania więcej postów:', error);
            setIsLoading(false);
          });
      }
    };

    // Dodaj nasłuchiwanie zdarzenia scroll
    window.addEventListener('scroll', handleScroll);

    // Zwolnij zasoby nasłuchiwania zdarzenia scroll po odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);


  

  return (
    <>
      <section className="section-padding-five blog-section section-padding-all">
        <div className="default-container">
          <div className="row clearfix">
            {blogPosts.map((post) => (
              <PostItem key={post.ID} post={post} />
            ))}
            {isLoading && <p>Ładowanie...</p>}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              
            </div>
          </div>
        </div>
      </section>
      {/*End Blog Section*/}
    </>
  );
};

export default BlogPostsList;

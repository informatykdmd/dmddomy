import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getPost/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych z pojedynczego posta:', error);
      });
  }, [postId]);

  if (!post) {
    return <p>Ładowanie...</p>;
  }

  return (
    <div>
      <h2>{post.contentDetails.TITLE}</h2>
      <p>{post.contentDetails.CONTENT_MAIN}</p>
      <p>{post.authorDetails.NAME_AUTHOR}</p>
      {/* Dodaj pozostałe informacje o poście */}
    </div>
  );
};

export default SinglePost;

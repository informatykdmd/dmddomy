import React, { useState, useEffect, useCallback } from 'react';  // Dodano import useCallback
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPostsList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getAllBlogPosts`);
        console.log('Odpowiedź z serwera:', response.data);
        setBlogPosts(response.data);
        setTotalPages(response.headers['x-total-pages']);
        console.log('Nagłówki odpowiedzi:', response.headers);
      } catch (error) {
        console.error('Błąd podczas pobierania danych z blog_posts:', error);
      }
    };

    fetchBlogPosts();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(parseInt(newPage, 10));
      console.log('IF w handlePageChange, newPage:', newPage);
    }
  };
  
  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  }

  return (
    <>
      <section className="section-padding-five blog-section section-padding-all">
        <div className="default-container">
          <div className="row clearfix">
            {blogPosts.map((post) => (
              <div className="col-lg-4 mb-4 field-overlay-holder" key={post.ID}>
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <img src={post.contentDetails && post.contentDetails.HEADER_FOTO} alt="" className="img-fluid mx-auto d-block" />
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">{post.contentDetails && post.contentDetails.CATEGORY}</p>
                    <h5 className="font-weight-bold"><Link to={`/post/${post.ID}`} className="read-more">{post.contentDetails && post.contentDetails.TITLE}</Link></h5>
                    <p className="text-muted">{post.contentDetails && post.contentDetails.HIGHLIGHTS}</p>
                    <p className="space-date text-muted"> {post.authorDetails && post.authorDetails.NAME_AUTHOR} - {post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}</p>
                    <Link className="read-more text-uppercase font-weight-bold" to={`/post/${post.ID}`}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
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

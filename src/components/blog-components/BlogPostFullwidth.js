import React, { useState, useEffect, useCallback } from 'react';  // Dodano import useCallback
import axios from 'axios';
import { Link } from 'react-router-dom';
import myDatabaseConfig from '../../supportscripts/env_connect';
import $ from 'jquery';

const BlogPostFullwidth = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  
  const fetchBlogPosts = useCallback(() => {
    axios.get(`https://${ApiAddress}/api/getBlogPosts?page=${currentPage}`) // currentPage
      .then((response) => {
        console.log('Odpowiedź z serwera:', response.data);  // Dodano console.log()
        const sortedPosts = response.data[0].slice().sort((a, b) => b.ID - a.ID);
        setBlogPosts(sortedPosts); // Sortowanie od najmłodszego
        // setBlogPosts(response.data[0]);
        setTotalPages(response.data[1]);
        console.log('Nagłówki odpowiedzi:', response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych z blog_posts:', error);
      });
  }, [currentPage, ApiAddress]);
  

  useEffect(() => {
    // Wykonaj zapytanie do serwera po zamontowaniu komponentu
    fetchBlogPosts();
  }, [currentPage, fetchBlogPosts]);
  
  const handlePageChange = (newPage) => {
    if (totalPages && newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(parseInt(newPage, 10));
      // console.log('IF w handlePageChange, newPage:', newPage);
    }
  };
  

  const renderPagination = () => {
    const pages = [];
    
    if (!totalPages) {
      return null;
    };

    // Dodaj zabezpieczenie przed użyciem totalPages, gdy jest undefined
    if (typeof totalPages === 'undefined') {
      console.warn('totalPages is undefined. Cannot render pagination.');
      return pages;
    };
  
    for (let i = 1; i <= totalPages; i++) {
      // console.log('Iteracja: ', i);
      pages.push(
        <li key={i} >
          <Link to="#" onClick={() => handlePageChange(i)}>{i}</Link>
        </li>
      );
    };
    
    return pages;
  };
  

  $(function() {
    // Przewiń stronę do góry z animacją
    $('html, row clearfix').animate({ scrollTop: 0 }, 'fast');
  });

  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  };
    return(
      <>
      <section className="section-padding-five blog-section section-padding-all">
        <div className="default-container">
          <div className="row clearfix">
            {blogPosts.map((post) => (
              <div className="col-lg-4 mb-4 field-overlay-holder" key={post.ID}>
                <div className="img_blog field-overlay-inner"  onClick={() => window.location.href=`/post/${post.ID}`}>
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
                    <Link className="read-more text-uppercase font-weight-bold" to={`/post/${post.ID}`}>Czytaj więcej</Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <ul className="cr-pagination-center">
                <li><Link to="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><i className="fa fa-angle-left" /></Link></li>
                  {renderPagination()}
                <li><Link to="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><i className="fa fa-angle-right" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Blog Section*/}
    </>
    )
}

export default BlogPostFullwidth;
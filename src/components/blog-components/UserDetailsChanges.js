import React, { useEffect, useState } from 'react';
import { useParams, Link, } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import ZoomableImage from '../../supportscripts/ZoomableImage';
import $ from 'jquery';

const BlogDetailsFullwidth = () => {
  const { userHash } = useParams();


  const [setuserHash] = useState(userHash);

  const [error, setError] = useState(null);

  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  // Ustawienie stanu postId po zmianie posta
  useEffect(() => {
    const userHashInput = document.querySelector('input[name="userHash"]');
    if (userHashInput) {
      setuserHashInput(userHashInput.value);
    }
  }, [userHashInput]);

  


  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  };


    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              test
    
            </div>
          </div>
        </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogDetailsFullwidth;
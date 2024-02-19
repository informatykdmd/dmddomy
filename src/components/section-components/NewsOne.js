import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myDatabaseConfig from '../../supportscripts/env_connect';

const NewsOne = () => {
    const [latestPosts, setLatestPosts] = useState([]);

    const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

    useEffect(() => {
        // Wywołaj endpoint /api/getLatestPosts, domyślnie pobierając 3 najnowsze posty
        axios.get(`https://${ApiAddress}/api/getLatestPosts?count=3`) // ?count=3
        .then((response) => {
            console.log('Odpowiedź z serwera (najnowsze posty):', response.data);
            setLatestPosts(response.data);
        })
        .catch((error) => {
            console.error('Błąd podczas pobierania najnowszych postów:', error);
        });
    }, [ApiAddress]);

    function formatDate(dateTimeString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
        return formattedDate;
    };
    return(
        <>
        {/*Blog Section*/}
        <section className="blog-section section-padding-all">
            <div className="default-container">
            <div className="row clearfix">
                <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
                {/*Sec Title*/}
                <div className="sec-con-title text-center centered mx-auto">
                    <div className="con-title-text con-title-border-l">Wiemy, Co Mówimy, Bo Robimy To Z Pasją</div>
                    <h2>Nasz Blog</h2>
                    <div className="text">
                        Nasz blog to więcej niż miejsce informacyjne - to przestrzeń dzielenia się wiedzą, 
                        doświadczeniem i nowoczesnym podejściem do świata architektury i budownictwa.
                    </div>
                </div>
                </div>
            </div>
            <div className="row clearfix mt-3">
            {latestPosts.map((post) => (
                <div className="col-lg-4 mb-4 field-overlay-holder" key={post.ID}>
                <div className="img_blog field-overlay-inner">
                  <div className="field-position-m field-mover-border">
                    <a href={`/post/${post.ID}`}>
                        <img src={post.contentDetails && post.contentDetails.HEADER_FOTO} alt="" className="img-fluid mx-auto d-block" />
                    </a>
                  </div>
                </div>
                <div className="blog-box-detail p-4">
                  <div className="mt-0">
                    <p className="labal text-muted">{post.contentDetails && post.contentDetails.CATEGORY}</p>
                    <h5 className="font-weight-bold"><Link to={`/post/${post.ID}`} className="read-more">{post.contentDetails && post.contentDetails.TITLE}</Link></h5>
                    <p className="text-muted">{post.contentDetails && post.contentDetails.HIGHLIGHTS}</p>
                    <p className="space-date text-muted"> {post.authorDetails && post.authorDetails.NAME_AUTHOR} - {post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}</p>
                    <Link className="read-more text-uppercase font-weight-bold" to={`/post/${post.ID}`}>Czytaj Więcej</Link>
                  </div>
                </div>
              </div>
            ))}
                
            </div>
            </div>
        </section>
        {/*End Blog Section*/}
        </>
    )
}

export default NewsOne;
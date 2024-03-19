import React, { useEffect, useState } from 'react';
import { useParams, Link, } from 'react-router-dom';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';
import ZoomableImage from '../../supportscripts/ZoomableImage';
import $ from 'jquery';

const BlogDetailsFullwidth = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  // const [allPosts, setAllPosts] = useState([]);
  const [numberPosts, setnumberPosts] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [setPostId] = useState(postId);

  const [error, setError] = useState(null);

  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  // Ustawienie stanu postId po zmianie posta
  useEffect(() => {
    const postIdInput = document.querySelector('input[name="postId"]');
    if (postIdInput) {
      setPostId(postIdInput.value);
    }
  }, [setPostId]);

  // Zastosowanie przewijania strony tylko po zmianie posta
  useEffect(() => {
    if (postId !== null) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
  }, [postId]);

  useEffect(() => {
    axios.get(`https://${ApiAddress}/api/getAllBlogPosts`)
      .then((response) => {
        // setAllPosts(response.data[0]);
        setnumberPosts(response.data[1]);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania wszystkich postów:', error);
      });
  }, [numberPosts, ApiAddress]);

  // console.log('allPosts', allPosts);
  // console.log('numberPosts', numberPosts);

  useEffect(() => {
    axios.get(`https://${ApiAddress}/api/getPost/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych z pojedynczego posta:', error);
      });
  }, [postId, ApiAddress]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://${ApiAddress}/api/addComment`, {
          name,
          email,
          post_id: postId,
          comment_content: comment,
    });

    console.log('Komentarz został dodany!', response.data);
    // Tutaj możesz dodać logikę obsługi sukcesu, np. wyzerować stan formularza
    // Przekieruj użytkownika na stronę z pojedynczym postem

      window.location.reload();

    } catch (error) {
    console.error('Błąd dodawania komentarza:', error.response?.data || error.message);
    // Tutaj możesz dodać logikę obsługi błędów
    if (error.response?.data?.error) {

      setError(error.response.data.error);
    }
    }
  };

  function formatDate(dateTimeString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
    return formattedDate;
  };

  function splitAndReturnArray(inputString, separator) {
    const arrayAfterSplit = inputString.split(separator);
    const resultArray = [];

    for (const x of arrayAfterSplit) {
        resultArray.push(x);
    } return resultArray;
  };

  if (!post) {
    return <p>Ładowanie...</p>;
  };

  function takeExistSocial() {
    const readySocialArray = [];

    if (post.authorDetails.FACEBOOK) {
        readySocialArray.push(
            <a href={post.authorDetails.FACEBOOK} key="facebook" rel="noreferrer" target="_blank">
                <i className="fa fa-facebook" />
            </a>
        );
    }

    if (post.authorDetails.TWITER_X) {
        readySocialArray.push(
            <a href={post.authorDetails.TWITER_X} key="twitter" rel="noreferrer" target="_blank">
                <i className="fa fa-twitter" />
            </a>
        );
    }

    if (post.authorDetails.INSTAGRAM) {
        readySocialArray.push(
            <a href={post.authorDetails.INSTAGRAM} key="instagram" rel="noreferrer" target="_blank">
                <i className="fa fa-instagram" />
            </a>
        );
    }

    if (post.authorDetails.GOOGLE) {
        readySocialArray.push(
            <a href={post.authorDetails.GOOGLE} key="google" rel="noreferrer" target="_blank">
                <i className="fa fa-google" />
            </a>
        );
    }

    return readySocialArray;
  };

  const socialLinks = takeExistSocial();

  const handleShareClickFB = () => {
    const shareUrl = "https://www.facebook.com/sharer/sharer.php";
    const title = encodeURIComponent(post.contentDetails.TITLE);
    const description = encodeURIComponent(post.contentDetails.CONTENT_MAIN + "\n" + post.contentDetails.HIGHLIGHTS);
    const imageUrl = encodeURIComponent("https://dmddomy.pl/" + post.contentDetails.HEADER_FOTO);
    const url = encodeURIComponent(`https://dmddomy.pl/post-${postId}`);

    window.open(`${shareUrl}?u=${url}&title=${title}&description=${description}&picture=${imageUrl}`, '_blank');
  };

  const handleShareClickTwitter = () => {
    const shareUrl = "https://twitter.com/intent/tweet";
    const text = encodeURIComponent(post.contentDetails.CONTENT_MAIN + "\n" + post.contentDetails.HIGHLIGHTS);
    const url = encodeURIComponent(`https://dmddomy.pl/post/${postId}`);
  
    window.open(`${shareUrl}?text=${text}&url=${url}`, '_blank');
  };
  
  const handleShareClickInstagram = () => {
    const url = `https://www.instagram.com/p/${postId}/`;
  
    window.open(url, '_blank');
  };

  let prevPostId;
  let nextPostId;
  
  if (Number(postId) === 1 && numberPosts >= 2) {
    prevPostId = Number(postId) + 1;
    nextPostId = null;
  } else if (Number(postId) > 1 && Number(postId) < numberPosts) {
    prevPostId = Number(postId) + 1;
    nextPostId = Number(postId) - 1;
  } else if (Number(postId) === numberPosts) {
    prevPostId = null;
    nextPostId = Number(postId) - 1;
  } else {
    prevPostId = null;
    nextPostId = null;
  }
  
  // console.log('postId', postId);
  // console.log('prevPostId', prevPostId);
  // console.log('nextPostId', nextPostId);

    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <ZoomableImage src={post.contentDetails.HEADER_FOTO} alt="blog" />
                </div>
                <div className="det-content">
                  <h3>{post.contentDetails.TITLE}</h3>
                  <div className="det-meta">
                    <Link to="#">
                      <i className="fa fa-user" /> {post.authorDetails.NAME_AUTHOR}
                    </Link>
                    <Link to="#">
                      <i className="fa fa-calendar" /> {post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}
                    </Link>
                    <Link to="#">
                      <i className="fa fa-commenting-o" /> {post.commentsDetails.length}
                    </Link>
                  </div>
                  <p>{post.contentDetails.CONTENT_MAIN}</p>
                </div>
                <blockquote>
                  <p> “ { post.contentDetails.HIGHLIGHTS } ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                    {/* {post.contentDetails.BULLETS } */}
                    {splitAndReturnArray(post.contentDetails.BULLETS, '#splx#').map((bullet, index) => (
                        <li key={index}>
                          <p> {bullet} </p>
                        </li>
                      ))}
                    </div>
                    <div className="col-sm-5">
                      <ZoomableImage src={post.contentDetails.CONTENT_FOTO } alt="blog" />
                    </div>
                  </div>
                </div>
                <div className="blog-tags">
                  <div className="row">
                    <div className="col-md-8">
                      <span className="title">Tagi :</span>
                      {splitAndReturnArray(post.contentDetails.TAGS, ', ').map((tag, index) => (
                        <Link to="#" className="tag" key={index}>{tag}</Link>
                      ))}
                    </div>
                    <div className="col-md-4 text-right">
                      <span className="title">Udostępnij :</span>
                      <button onClick={handleShareClickFB} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook" />
                      </button>
                      <button onClick={handleShareClickTwitter} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter" />
                      </button>
                      <button onClick={handleShareClickInstagram} style={{
                        padding : '8px', 
                        background : 'none',
                        cursor: 'pointer'
                        }} target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="blog-nav clearfix">
                {prevPostId !== null && (
                  <Link to={`/post/${prevPostId}`} className="blog-prev">
                    <i className="fa fa-angle-left" />
                  </Link>
                )}
                {nextPostId !== null && (
                  <Link to={`/post/${nextPostId}`} className="blog-next">
                    <i className="fa fa-angle-right" />
                  </Link>
                )}
                </div>
                <div className="author-section">
                  <div className="all-title">
                    <h3 className="sec-title">
                      <span> O autorze </span>
                    </h3>
                  </div>
                  <div className="author-post">
                    <div className="aut-img">
                      <img src={post.authorDetails.AVATAR_AUTHOR} alt="" />
                    </div>
                    <div className="aut-content">
                      <h5>{post.authorDetails.NAME_AUTHOR}</h5>
                      <p>{post.authorDetails.ABOUT_AUTHOR}</p>
                      <div className="aut-social">
                        {socialLinks}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-section">
                  <div className="all-title">
                  {post.commentsDetails && post.commentsDetails.length > 0 && (
                    <h3 className="sec-title">
                      <span>Komentarze</span>
                    </h3>
                  )}
                  </div>
                  {post.commentsDetails && post.commentsDetails.map((comment, index) => (
                    <div className="sub-comm comment-inner" key={index}>
                    <div className="com-img">
                    {
                      comment.userDetails.AVATAR_USER && (
                        <img src={comment.userDetails.AVATAR_USER} alt="user" />
                      )
                    }
                    </div>
                    <div className="comm-content">
                      <h5>
                        {comment.userDetails.CLIENT_NAME}
                        <span>{comment && formatDate(comment.DATE_TIME)}</span>
                      </h5>
                      <p>
                        {comment.COMMENT_CONNTENT}
                      </p>
                    </div>
                  </div>
                  ))}
                </div>
                
                <div className="blog-comment-form">
                  <div className="all-title">
                    <h3 className="sec-title">
                      <span>Komentuj post</span>
                    </h3>
                  </div>
                  <form action="#" className="comment-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="message" placeholder="Komentarz" className="form-control" rows={6} value={comment} onChange={(e) => setComment(e.target.value)}/>
                            <input type="hidden" name="PostId" value={postId} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <button type="submit" className="btn btn_custom ploting-btn btn-style-two">Komentuj Post</button>
                        </div>
                          {error && (
                            <div className="error-message" style={{ color: 'red' }}>
                              {error}
                              <p style={{ color: 'black' }}>Aby się zarejestrować <strong><Link to="/subscribe-us">skorzystaj z tego linku</Link></strong>.</p>
                            </div>
                          )}
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/*End Blog Details Section */}
    </>
    )
}

export default BlogDetailsFullwidth;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';
import myDatabaseConfig from '../../supportscripts/env_connect';

const FooterOne = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // upd
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    // blog
    const [latestPosts, setLatestPosts] = useState([]);

    const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Wyślij dane do serwera
      console.log('Wysyłanie danych do serwera:', { name, email });
  
      axios.post(`https://${ApiAddress}/api/addSubscriber`, { name, email })
        .then((response) => {
          console.log('Odpowiedź od serwera:', response.data);
          // Tutaj możesz obsłużyć odpowiedź od serwera, na przykład pokazać komunikat o sukcesie
            // Ustaw komunikat o sukcesie
            setSuccessMessage(response.data.success || 'Subskrybcja została dodana do bazy danych.');
            // Wyczyść stan po wysłaniu danych
            console.log('Wyczyszczono stan po wysłaniu danych.');
            setName('');
            setEmail('');
        })
        .catch((error) => {
          console.error('Błąd podczas wysyłania danych:', error);
          // Tutaj możesz obsłużyć błąd, na przykład pokazać komunikat o niepowodzeniu
            // Ustaw komunikat o błędzie
            setErrorMessage(error.response.data.error || 'Wystąpił błąd podczas rejestracji.');
        });    
    };

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
        {/*Main Footer*/}
        <footer className="footer">
            <div className="default-container">
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="row clearfix">
                {/*Column*/}
                <div className="big-column col-lg-12">
                    <div className="row clearfix">
                    {/*Footer Column*/}
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget logo-widget">
                        <div className="logo">
                            <Link to="/"><img src="images/logo_ls_s_w.png" alt="" /></Link>
                        </div>
                        <div className="text">ul. Dworkowa 51<br />05-082 Stare Babice</div>
                        <ul className="list-style-one">
                            <li><span>Telefon:</span> <a href="tel:+48736545454">+48 736 54 54 54</a></li>
                            {/* <li><span>WhatsApp:</span> <a href="https://wa.me/+48604125563">+48 604 125 563</a></li> */}
                            <li><span>Email:</span> <a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></li>
                            <li><span>Pracujemy:</span><p>Poniedziałek - Piątek</p><p>9:00 - 17:00</p></li>
                        </ul>
                        <ul className="social-icon">
                            <li><a href="https://www.facebook.com/dmddomy/" rel="noreferrer" target="_blank"><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://www.youtube.com/channel/UCBRN-SPMEIYK6YRV23Komxw" rel="noreferrer" target="_blank"><i className="fa fa-youtube" /></a></li>
                            <li><a href="https://www.instagram.com/dmddomy/" rel="noreferrer" target="_blank"><i className="fa fa-instagram" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget posts-widget">
                        <h2>Najnowsze wpisy</h2>
                        {latestPosts.map((post) => (
                            <article className="post" key={post.ID}>
                                <div className="text"><Link to={`/post/${post.ID}`}>{post.contentDetails && post.contentDetails.TITLE}</Link></div>
                                <ul className="post-date">
                                <li><i className="fa fa-user" /> {post.authorDetails && post.authorDetails.NAME_AUTHOR}</li>
                                <li>{post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}</li>
                                </ul>
                            </article>
                        ))}
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget links-widget">
                        <h2>Szybki skrót</h2>
                        <ul className="footer-link">
                            <li><Link to="/o-nas">O nas</Link></li>
                            <li><Link to="/oferta-nowoczesne">Oferta</Link></li>
                            <li><Link to="/realizacje-posts-right-sidebar">Realizacje</Link></li>
                            <li><Link to="/blog-posts-fullwidth">Blog</Link></li>
                            <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="footer-col col-lg-3">
                        <div className="footer-widget newsletter-widget">
                        <h2>Nasz Newsletter</h2>
                        <div className="text">Otrzymuj na swoją skrzynkę najświeższe informacje i oferty od DMD</div>
                        <div className="newsletter-form">
                        {/* <div className="form-group">
                            <Link to="/subscribe-us" className="ploting-btn btn-style-one">Subskrybuj</Link>
                        </div> */}
                            <form onSubmit={handleSubmit} className="comment-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Twoje Imię"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Adres E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="ploting-btn btn-style-one">Subskrybuj</button>
                            </div>
                            </form>
                            {/* Komunikat o błędzie */}
                            {errorMessage && <div style={{ color: '#EE7775', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{errorMessage}</div>}
                            {/* Komunikat o sukcesie */}
                            {successMessage && <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{successMessage}</div>}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Copyright />
        </footer>
        {/*End Main Footer*/}
        </>
    )
}

export default FooterOne;
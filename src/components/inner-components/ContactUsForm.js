import React, { useEffect, useState } from 'react';
import myDatabaseConfig from '../../supportscripts/env_connect';
import axios from 'axios';
import $ from 'jquery';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    done: 1,
  });
  const [showForm, setShowForm] = useState(true);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePrivacyCheckboxChange = () => {
    setPrivacyAccepted(!privacyAccepted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formData: ', formData);
    // Sprawdzanie, czy polityka prywatności została zaakceptowana
    if (!privacyAccepted) {
      // alert("Należy zaakceptować politykę prywatności.");
      return;
    }
    try {
      const response = await axios.post(`https://${ApiAddress}/api/sendContactAsks`, formData);

      console.log(response.data);
      setShowForm(false);
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: '',
        email: '',
        subject: '',
        message: '',
        done: 1,
      }));
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error);
    }
  };
  useEffect(() => {
    if (!showForm) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
  }, [showForm]);
    return(
    <>
    {/*Contact Section*/}
    <section className="section-padding-four contact-section section-padding-all">
      <div className="default-container">
        <div className="row vertical-content-manage clearfix">
          <div className="col-lg-5">
            <div className="contact-info-box mt-3 animated">
              <div className="contact-details-content p-3 mt-3">
                <div className="contact-detail">
                  <h6 className="font-weight-bold">Adres</h6>
                  <p className="text-muted mb-0">ul. Dworkowa 51</p>
                  <p className="text-muted mb-0">05-082 Stare Babice</p>
                </div>
              </div>
              <div className="contact-details-content p-3 mt-3">
                <div className="contact-detail">
                  <h6 className="font-weight-bold">E-mail</h6>
                  <p className="text-muted mb-0"><a href="mailto:biuro@dmddomy.pl">biuro@dmddomy.pl</a></p>
                  {/* <p className="text-muted mb-0"><a href="mailto:info@example.com">info@example.com</a></p> */}
                </div>
              </div>
              <div className="contact-details-content p-3 mt-3">
                <div className="contact-detail">
                  <h6 className="font-weight-bold">Zadzwoń</h6> 
                  <p className="text-muted mb-0"><a href="tel:+48736545454">+48 736 54 54 54</a>
                    {/* <br /><a href="tel:+1234567890">+123 456 7890</a> */}
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="text-muted mb-0">
              Zapraszamy serdecznie do skontaktowania się z naszym zespołem w dowolny sposób dostępny dla Państwa. 
              Konsultacja z nami jest bezpłatna i nie wiąże się z żadnymi zobowiązaniami. Nasi eksperci z przyjemnością 
              udzielą odpowiedzi na wszystkie Państwa pytania, opowiedzą o praktycznych aspektach naszej działalności 
              oraz omówią procedurę wspólnej inwestycji.
            </div>
            <div className="business_form_custom mt-3">
            {showForm ? (
              <form onSubmit={handleSubmit} method='post'>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="messages" />
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input name="name" type="text" className="form-control" placeholder="Imię i nazwisko..." required onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input name="email" type="email" className="form-control" placeholder="Adres e-mail..." required onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input name="subject" type="text" className="form-control" placeholder="Temat zapytania..." required onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea name="message" rows={4} className="form-control" placeholder="Wiadomość..." required defaultValue={""} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div  style={{ display: 'flex', paddingRight: '25px'}}>
                    <div className="switch" style={{ marginLeft: '42px' }}>
                        <input type="checkbox" id="polityka_priv" style={{display: 'none'}} checked={privacyAccepted} onChange={handlePrivacyCheckboxChange} required/>
                        <label htmlFor="polityka_priv"></label>
                    </div>
                    <div style={{fontSize: '12px', paddingLeft: '10px', marginBottom: '25px'}}>Akceptuję politykę prywatoności DMD DOMY, niniejszym wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w niniejszym formularzu w celach kontaktowych, zgodnie z obowiązującą polityką prywatności.</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className=" form-group">
                      <input 
                        type="submit" 
                        name="submit" 
                        className="btn btn_custom ploting-btn btn-style-two" 
                        defaultValue="Wyślij Zapytanie" 
                        disabled={!privacyAccepted}/>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div style={{color: 'green', fontSize: 20}} >
                <p>Wiadomość została wysłana. Dziękujemy!</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Contact Section*/}
    </>
    )
}

export default ContactUsForm;
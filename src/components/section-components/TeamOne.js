import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const TeamOne = () => {
  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  const [workersGot, setworkersGot] = useState([]);
  useEffect(() => {

    axios.get(`https://${ApiAddress}/api/getWorkers?count=4`) // ?count=4
      .then((response) => {
        console.log('Odpowiedź z serwera:', response.data);
        setworkersGot(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania:', error);
      });
  }, [ApiAddress]);
    return(
    <>
    {/*Team Section*/}
      <section className="teams-section section-padding-all">
        <div className="default-container">
          <div className="row clearfix">
            <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
              {/*Sec Title*/}
              <div className="sec-con-title text-center centered mx-auto">
                <div className="con-title-text con-title-border-l">Nasze Osiągnięcia &amp; Nasza Siła</div>
                <h2>Zespół</h2>
                <div className="text">
                  Poznaj nasz zespół ekspertów, który z pasją, precyzją i doświadczeniem 
                  realizuje unikalne projekty.
                  Sprawdź, dlaczego nasza ekipa to fundament naszych sukcesów.
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix mt-3">
            {workersGot.map((worker) => (
              <div className="col-lg-3 mb-4" key={worker.ID}>
                <div className="team-box-all text-center">
                  <div className="team-img">
                    <img src={worker.EMPLOYEE_PHOTO} alt="" className="img-fluid mx-auto d-block" />
                  </div>
                  <div className="mt-3">
                    <h6 className="mb-0 font-weight-bold field-position-p">{worker.EMPLOYEE_NAME}</h6>
                    <p className="text-muted team-work field-position-p">{worker.EMPLOYEE_ROLE}</p>
                  </div>
                  <div className="team_social field-position-p">
                    <ul className="list-inline mb-0 text-center">
                      {worker.PHONE && <li className="list-inline-item"><a href={"tel:"+worker.PHONE} className><i className="fa fa-phone" target="_blank" rel="noreferrer" /></a></li>}
                      {worker.EMAIL && <li className="list-inline-item"><a href={"mailto:"+worker.EMAIL} className><i className="fa fa-envelope" target="_blank" rel="noreferrer" /></a></li>}
                      {worker.FACEBOOK && <li className="list-inline-item"><a href={worker.FACEBOOK} className><i className="fa fa-facebook" target="_blank" rel="noreferrer" /></a></li>}
                      {worker.LINEDIN && <li className="list-inline-item"><a href={worker.LINEDIN} className><i className="fa fa-linkedin" target="_blank" rel="noreferrer" /></a></li>}
                    </ul>
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>
    {/*End Team Section*/}
    </>
    )
}

export default TeamOne;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myDatabaseConfig from '../../supportscripts/env_connect';

const OurTeamOne = () => {
  const ApiAddress = myDatabaseConfig.mySqlUrlorIp + ':' + myDatabaseConfig.apiPort;
  const [workersGot, setworkersGot] = useState([]);
  useEffect(() => {

    axios.get(`http://${ApiAddress}/api/getWorkers`) // ?count=3
      .then((response) => {
        console.log('Odpowiedź z serwera (najnowsze posty):', response.data);
        setworkersGot(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania najnowszych postów:', error);
      });
  }, [ApiAddress]);

  return(
  <>
  {/*Team Section*/}
  <section className="section-padding-one teams-section section-padding-all">
      <div className="default-container">
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
                    {worker.LINKEDIN && <li className="list-inline-item"><a href={worker.LINKEDIN} className><i className="fa fa-linkedin" target="_blank" rel="noreferrer" /></a></li>}
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

export default OurTeamOne;
import React from 'react';
// import { Link } from 'react-router-dom';

const Quote = () => {
    return(
        <>
        {/*Get A Quote Section*/}
        <section className="get-quote-section section-padding-two">
            <div className="default-container">
            <div className="row clearfix">
                <div className="col-lg-8 text-white">
                <h4> ZAPISZ SIĘ DO NASZEGO NEWSLETTERA! </h4>
                <span>Nigdy nie przegapisz niczego od DMD, zapisując się do naszego Newslettera.</span>
                </div>
                <div className="col-lg-4">
                {/* <Link to="/subscribe-us" className="btn btn_custom ploting-btn btn-style-two">Subskrybuj</Link> */}
                
                <form role="search" method="post" action="subscribe.php">
                    <div className="input-group">
                    <input name="name" className="form-control" placeholder="Imię" type="text" />
                    <input name="news-letter" className="form-control" placeholder="E-mail" type="text" />
                    <span className="input-group-btn">
                        <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                    </span>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>
        {/*End Get A Quote Section*/}
        </>
    )
}

export default Quote;
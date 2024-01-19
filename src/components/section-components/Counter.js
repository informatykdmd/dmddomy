import React from 'react';
import CountUp from 'react-countup';
import SkillBar from 'react-skillbars';

const skills = [
    { type: 'Projekt', level: 10 },
    { type: 'Budowa', level: 35 },
    { type: 'Wykończenie', level: 30 },
    { type: 'Odbiór', level: 15 },
    { type: 'Sprzedaż', level: 10 }
];
const colors = {
    bar: "#95D194",
    title: {
      text: "#fff",
      background: "#009e2a"
    }
};

const Counter = () => {
    return(
    <>
    {/*Counter Section*/}
      <section className="counter-section section-padding-all">
        <div className="com-counter default-container">
          <div className="row clearfix">
            <div className="con-title-column col-lg-12 col-md-12 col-sm-12">
              {/*Sec Title*/}
              <div className="sec-con-title text-center centered mx-auto">
                <div className="con-title-text con-title-border-l">Nasze Doświadczenie</div>
                <h2>Kreujemy Historię z Każdym Projektem</h2>
                <div className="text">
                  Nasze doświadczenie to fundament, na którym budujemy nie tylko domy, 
                  lecz również zaufanie naszych klientów.
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            {/*Column*/}
            <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
              <div className="row clearfix">
                <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text"><CountUp start={0} end={15}></CountUp></span>+
                      </div>
                      <h4 className="counter-title">lat doświadczenia</h4>
                    </div>
                  </div>
                </div>
                {/*Column*/}
                <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box alternate">
                        <span className="count-text"><CountUp start={0} end={100}></CountUp></span>+
                      </div>
                      <h4 className="counter-title">zadowolonych klientów</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box alternate">
                        <span className="count-text"><CountUp start={0} end={375}></CountUp></span>+
                      </div>
                      <h4 className="counter-title">zakończonych projektów</h4>
                    </div>
                  </div>
                </div>
                {/*Column*/}
                <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text"><CountUp start={0} end={20}></CountUp></span>+
                      </div>
                      <h4 className="counter-title">realizacji w toku</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
              <div className="row clearfix m-t60">
                <div className="column counter-column col-md-12 col-sm-12 col-xs-12">
                    <SkillBar skills={skills} colors={colors} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Counter Section*/}
    </>
    )
}

export default Counter;
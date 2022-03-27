import React from "react";
import "./FunFacts.scss";

const FunFacts = () => {
  return (
    <div className="fun-facts">
      <div className="container">
        <div className="fun-facts__head">
          <h2>Our fun facts</h2>
          <p>We have grown strength over the past 10 years.</p>
        </div>
        <div className="fun-facts__wrap">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="fact">
                <span>199+</span>
                <p>Projects Built</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fact">
                <span>100+</span>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fact">
                <span>$21M+</span>
                <p>Revenue Generated</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fact">
                <span>10+</span>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;

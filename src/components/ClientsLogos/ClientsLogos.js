import React from "react";
import "./clients_logos.scss";
import amazon from "../../assets/brands/amazon.svg";
import google from "../../assets/brands/google.svg";
import paypal from "../../assets/brands/paypal.svg";
import shopify from "../../assets/brands/shopify.svg";

const ClientsLogos = () => {
  return (
    <div className="clients-logos">
      <div className="container">
        <div className="clients-logos__head">
          <h2>Our clients</h2>
          <p>We are trusted by over 200+ clients.</p>
        </div>
        <div className="clients-logos__wrap">
          <div className="row row--center">
            <div className="col-md-3 col-6">
              <div className="client-logo">
                <img src={amazon} alt="brand" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="client-logo">
                <img src={google} alt="brand" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="client-logo">
                <img src={paypal} alt="brand" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="client-logo">
                <img src={shopify} alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ClientsLogos;

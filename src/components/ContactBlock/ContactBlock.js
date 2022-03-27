import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./contact_block.scss";

const ContactBlock = () => {
  const [contactFormInputs, setContactFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formAlert, setFormAlert] = useState({
    status: "info",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (
      contactFormInputs.firstName.length > 3 &&
      contactFormInputs.lastName.length > 3 &&
      contactFormInputs.email &&
      contactFormInputs.phone &&
      contactFormInputs.company &&
      contactFormInputs.message
    ) {
      setFormAlert({
        status: "success",
        message:
          "Thank you for getting in touch with us! We will get back to you ASAP!",
      });

      setContactFormInputs({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } else {
      setFormAlert({
        status: "danger",
        message: "Please make sure all fields are filled in correctly.!",
      });
    }

    setTimeout(() => {
      setFormAlert({
        status: "info",
        message: "",
      });
    }, 6000);
  };

  const onChangeInput = (e) => {
    setContactFormInputs({
      ...contactFormInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact__main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 contact__form">
            <p>
              Please fill out the following form and we will get back to you
              shortly.
            </p>
            {formAlert.message && (
              <div className={`alert alert--${formAlert.status}`}>
                {formAlert.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="firstName"
                    value={contactFormInputs.firstName}
                    className="form-control"
                    placeholder="First name"
                    onChange={onChangeInput}
                  />
                  <span></span>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="lastName"
                    value={contactFormInputs.lastName}
                    className="form-control"
                    placeholder="Last name"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    name="email"
                    value={contactFormInputs.email}
                    className="form-control"
                    placeholder="Email"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    name="phone"
                    value={contactFormInputs.phone}
                    className="form-control"
                    placeholder="Phone"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="company"
                    value={contactFormInputs.company}
                    className="form-control"
                    placeholder="Company"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="message"
                    value={contactFormInputs.message}
                    className="form-control"
                    rows={6}
                    placeholder="Message"
                    onChange={onChangeInput}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn">
                Submit Now
              </button>
            </form>
          </div>

          <div className="col-lg-5 col-sm-6 contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.934223916728!2d-74.00557598545286!3d40.74147284375036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sma!4v1648341662067!5m2!1sen!2sma"
              title="Armark location"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-10 col-sm-6 contact__ways">
            <div className="row">
              <div className="col-lg-4 contact-way">
                <span className="contact-way__icon">
                  <FaPhone />
                </span>
                <div className="contact-way__content">
                  <h5>Phone</h5>
                  <a href="tel:+072 223 2424">+072 223 2424</a>
                </div>
              </div>
              <div className="col-lg-4 contact-way">
                <span className="contact-way__icon">
                  <FaEnvelope />
                </span>
                <div className="contact-way__content">
                  <h5>Email</h5>
                  <a href="mailto:contact@armark.com">contact@armark.com</a>
                </div>
              </div>
              <div className="col-lg-4 contact-way">
                <span className="contact-way__icon">
                  <FaMapMarkerAlt />
                </span>
                <div className="contact-way__content">
                  <h5>Address</h5>
                  <span>11 Armark Str. 12, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;

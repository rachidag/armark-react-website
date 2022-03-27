import React from "react";
import { Link } from "react-router-dom";
import "./call_to_action.scss";

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Let's make something beautiful together</h2>
        <p>
          Everything you need to create your next unique and professional
          website or application, including information gathering, UI/UX design,
          coding, testing, and deploying.
        </p>
        <Link to="/contact" className="btn btn--outline-white">
          Contact us now
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;

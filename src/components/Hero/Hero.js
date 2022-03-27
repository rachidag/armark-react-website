import React from "react";
import { Link } from "react-router-dom";
import "./hero.scss";
import hero from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="container">
        <div className="hero__content">
          <span>There are no secrets to success</span>
          <h1>
            We have everything you need to convert your ideas into reality
          </h1>
          <p>
            Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor
            primis libero tempus, blandit and cursus varius and magnis sapien
          </p>
          <Link to="projects" className="btn">
            Discover our projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import Hero from "../components/Hero/Hero";
import ClientsLogos from "../components/ClientsLogos/ClientsLogos";
import CallToAction from "../components/CallToAction/CallToAction";
import TextImage from "../components/TextImage/TextImage";
import about from "../assets/about.jpg";

function home() {
  return (
    <main className="main-content home-page">
      <Hero />
      <TextImage
        title="We strongly believes in the power of creative ideas"
        subtitle="About us"
        image={about}
        link="about"
        imageRight={true}
      >
        <p>
          We are a digital and branding company that believes in the power of
          creative strategy and along with great design.
        </p>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
          urna mollis. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </p>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur
          purus sit amet fermentum. Praesent commodo cursus magna, vel. Nullam
          id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </TextImage>
      <TextImage
        title="We bring solutions to make life easier"
        subtitle="Our Services"
        image={about}
        link="services"
        imageRight={false}
      >
        <p>
          We are a digital and branding company that believes in the power of
          creative strategy and along with great design.
        </p>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
          urna mollis. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </p>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur
          purus sit amet fermentum. Praesent commodo cursus magna, vel. Nullam
          id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </TextImage>
      <TextImage
        title="A few reasons why our valued customers choose us"
        subtitle="Why choose us?"
        image={about}
        link="about"
        imageRight={true}
      >
        <p>
          We are a digital and branding company that believes in the power of
          creative strategy and along with great design.
        </p>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
          urna mollis. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </p>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur
          purus sit amet fermentum. Praesent commodo cursus magna, vel. Nullam
          id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </TextImage>
      <ClientsLogos />
      <CallToAction />
    </main>
  );
}

export default home;

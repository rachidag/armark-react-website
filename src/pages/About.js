import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import AboutBlock from "../components/AboutBlock/AboutBlock";
import FunFacts from "../components/FunFacts/FunFacts";
import ClientsLogos from "../components/ClientsLogos/ClientsLogos";
import CallToAction from "../components/CallToAction/CallToAction";

function About() {
  return (
    <main className="main-content about-page">
      <PageHeader title="About Armark">
        <p>We have everything you need to convert your ideas into reality.</p>
      </PageHeader>
      <AboutBlock />
      <FunFacts />
      <ClientsLogos />
      <CallToAction />
    </main>
  );
}

export default About;

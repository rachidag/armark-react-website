import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import PageHeader from "../components/PageHeader/PageHeader";
import ServicesBloc from "../components/Services/ServicesBloc";

function Services() {
  return (
    <main className="main-content services-page">

      <PageHeader title="What we do?" >
        <p>The services we offer are specifically designed to meet our clients needs.</p>
      </PageHeader>
      <ServicesBloc />
      <CallToAction />

    </main>
  );
}

export default Services;

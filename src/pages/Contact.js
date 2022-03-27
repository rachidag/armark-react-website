import React from "react";
import ContactBlock from "../components/ContactBlock/ContactBlock";
import PageHeader from "../components/PageHeader/PageHeader";

function Contact() {
  return (
    <main className="main-content contact-page">
      <PageHeader title="get in touch with us!">
        <p>Let's discuss your project!</p>
      </PageHeader>

      <ContactBlock />
    </main>
  );
}

export default Contact;

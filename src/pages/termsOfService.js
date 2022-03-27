import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import StandardPage from "../components/StandardPage/StandardPage";

function TermsOfService() {
  return (
    <main className="main-content terms-of-service-page">
      <PageHeader title="Terms of Service" />
      <StandardPage>
        <h4>Introduction</h4>
        <p>
          It seems that only fragments of the original text remain in the Lorem
          Ipsum texts used today. One may speculate that over the course of time
          certain letters were added or deleted at various positions within the
          text.
        </p>

        <h4>User Agreements</h4>
        <p>
          The most well-known dummy text is the 'Lorem Ipsum', which is said to
          have originated in the 16th century. Lorem Ipsum is composed in a
          pseudo-Latin language which more or less corresponds to 'proper'
          Latin. It contains a series of real Latin words. This ancient dummy
          text is also incomprehensible, but it imitates the rhythm of most
          European languages in Latin script. The advantage of its Latin origin
          and the relative meaninglessness of Lorum Ipsum is that the text does
          not attract attention to itself or distract the viewer's attention
          from the layout.
        </p>
        <p>
          There is now an abundance of readable dummy texts. These are usually
          used when a text is required purely to fill a space. These
          alternatives to the classic Lorem Ipsum texts are often amusing and
          tell short, funny or nonsensical stories.
        </p>
        <p>
          It seems that only fragments of the original text remain in the Lorem
          Ipsum texts used today. One may speculate that over the course of time
          certain letters were added or deleted at various positions within the
          text.
        </p>

        <h4>Restrictions</h4>
        <p>You are specifically restricted from all of the following :</p>
        <ul>
          <li>Neque porro quisquam est qui dolorem.</li>
          <li>Ut vel purus turpis.</li>
          <li>Suspendisse blandit orci id risus posuere.</li>
          <li>Aliquam porttitor ornare ante.</li>
          <li>Pellentesque faucibus sodales.</li>
          <li>Praesent ante dui.</li>
        </ul>
      </StandardPage>
    </main>
  );
}

export default TermsOfService;

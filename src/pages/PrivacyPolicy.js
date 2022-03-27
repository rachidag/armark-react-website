import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import StandardPage from "../components/StandardPage/StandardPage";

function PrivacyPolicy() {
  return (
    <main className="main-content privacy-policy-page">
      <PageHeader title="Our Terms & Privacy" />
      <StandardPage>
        <h4>Overview</h4>
        <p>
          It seems that only fragments of the original text remain in the Lorem
          Ipsum texts used today. One may speculate that over the course of time
          certain letters were added or deleted at various positions within the
          text.
        </p>
        <p>
          In the 1960s, the text suddenly became known beyond the professional
          circle of typesetters and layout designers when it was used for
          Letraset sheets (adhesive letters on transparent film, popular until
          the 1980s) Versions of the text were subsequently included in DTP
          programmes such as PageMaker etc.
        </p>
        <p>
          There is now an abundance of readable dummy texts. These are usually
          used when a text is required purely to fill a space. These
          alternatives to the classic Lorem Ipsum texts are often amusing and
          tell short, funny or nonsensical stories.
        </p>

        <h4>We use your information to :</h4>
        <ul>
          <li>Versions of the text.</li>
          <li>Funny or nonsensical stories.</li>
          <li>One may speculate that over.</li>
          <li>Various positions within the text.</li>
        </ul>

        <h4>Information Provided Voluntarily</h4>
        <p>
          In the 1960s, the text suddenly became known beyond the professional
          circle of typesetters and layout designers when it was used for
          Letraset sheets (adhesive letters on transparent film, popular until
          the 1980s) Versions of the text were subsequently included in DTP
          programmes such as PageMaker etc.
        </p>
      </StandardPage>
    </main>
  );
}

export default PrivacyPolicy;

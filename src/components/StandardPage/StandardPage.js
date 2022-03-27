import React from "react";
import "./standard_page.scss";

function StandardPage({children}) {
  return (
    <section className="page-standard">
        <div className="container">
            {children}
        </div>
    </section>
  );
}

export default StandardPage;

import React from "react";
import Error404 from "../components/Errors/Error404";

function PageNotFound() {
  return (
    <main className="main-content notfound-page">
      <Error404 />
    </main>
  );
}

export default PageNotFound;

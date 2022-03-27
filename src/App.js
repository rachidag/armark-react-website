import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService";
import PageNotFound from "./pages/PageNotFound";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ScrollToTop from "./Utilities/ScrollToTop";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop setMenuToggle={setMenuToggle}>
          <Header menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;

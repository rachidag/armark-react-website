import React from "react";
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";

function Header({ menuToggle, setMenuToggle }) {
  return (
    <header className="header">
      <Topbar />
      <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </header>
  );
}

export default Header;

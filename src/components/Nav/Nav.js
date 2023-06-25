import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <a className="firm" href="firm">
          the head breaks
        </a>
        <ul className="menu">
          <li>
            <a href="#specjalist1">o nas</a>
          </li>
          <li>
            <a href="#offers">oferta</a>
          </li>
          <li>
            <a href="contact" className="disabled">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="shadow">
        <div className="container">
          <h1 className="heading">
            Nasza firma oferuje najwyższej jakości produkty
          </h1>
          <p className="description">Nie wierz na słowo - sprawdź!</p>
          <a href="#offers" className="offer-btn">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

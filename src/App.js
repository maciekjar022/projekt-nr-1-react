import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;

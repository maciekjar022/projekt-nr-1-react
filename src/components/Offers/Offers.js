import React from "react";
import "./Offers.css";

const Offers = () => {
  const offers = [
    { name: "Oferta 1", isNew: true },
    { name: "Oferta 2", isNew: false },
    { name: "Oferta 3", isNew: false },
    { name: "Oferta 4", isNew: false },
    { name: "Oferta 5", isNew: false },
    { name: "Oferta 6", isNew: false },
  ];

  return (
    <section className="offers" id="offers">
      <h2 className="baner">Czym zajmuje się nasza firma?</h2>
      <div className="container-services">
        {offers.map((offer, index) => (
          <div key={index} className="box">
            <p>{offer.name}</p>
            {offer.isNew ? <span>(nowość)</span> : null}
            {index === 0 ? <div className="circle"></div> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;

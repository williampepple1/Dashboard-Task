import React from "react";
import "./Sales.css";
import Indian_man from "../img/Indian_man.png"
import Indian_man2 from "../img/Indian_man2.png"
import Indian_man3 from "../img/Indian_man2.png"

const Sales = () => {
  return (
    <div className="sales">
      <h2 className="section__title">Sales List</h2>
      <section className="sales-item">
        <img src={Indian_man} alt="llustration" className="sales__img" />
        <article className="sales__details">
          <p className="sales__customer">Supardi Hakya</p>
          <p className="sales__id">ID: 567936354739</p>
        </article>
      </section>
      <section className="sales-item">
        <img src={Indian_man2} alt="Illustration" className="sales__img" />
        <article className="sales__details">
          <p className="sales__customer">Kasidi Etan</p>
          <p className="sales__id">ID: 567936564740</p>
        </article>
      </section>
      <section className="sales-item">
        <img src={Indian_man3} alt="Illustration" className="sales__img" />
        <article className="sales__details">
          <p className="sales__customer">Parja Klaten</p>
          <p className="sales__id">ID: 567936354740</p>
        </article>
      </section>
    </div>
  );
};

export default Sales;

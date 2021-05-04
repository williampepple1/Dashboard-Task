import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <h2 className="section__title">Overview</h2>
      <section className="overview-card">
        <div className="overview__first">
          <article className="total">
            <p className="total__text">Total Orders</p>
            <p className="total__cost">$342.70</p>
          </article>
          <img src="" alt="Total graph" />
        </div>
        <div className="overview__second">
          <p className="total__items">17 Total items</p>
          <button className="total__link">View details</button>
        </div>
      </section>
      <section className="overview-card">
        <div className="overview__first">
          <article className="total">
            <p className="total__text">Total Orders</p>
            <p className="total__cost">$127.40</p>
          </article>
          <img src="" alt="Total graph" />
        </div>
        <div className="overview__second">
          <p className="total__items">8 Total items</p>
          <button className="total__link">View details</button>
        </div>
      </section>
    </div>
  );
};

export default Overview;

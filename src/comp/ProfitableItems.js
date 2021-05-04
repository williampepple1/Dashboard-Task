import React from "react";
import "./ProfitableItems.css";

const ProfitableItems = () => {
  return (
    <div className="profitable-items">
      <h2 className="section__title">Profitable Items</h2>
      <section className="profit__items">
        <article className="profit__item">
          <p className="item__num">1</p>
          <p className="item__name">Bakery</p>
          <p className="item__gain">+$12</p>
        </article>
        <article className="profit__item">
          <p className="item__num">2</p>
          <p className="item__name">Electronics</p>
          <p className="item__gain loss">-$12</p>
        </article>
        <article className="profit__item">
          <p className="item__num">3</p>
          <p className="item__name">Plants</p>
          <p className="item__gain">+$12</p>
        </article>
      </section>
      <button className="see-more-btn">See All Activities</button>
    </div>
  );
};

export default ProfitableItems;

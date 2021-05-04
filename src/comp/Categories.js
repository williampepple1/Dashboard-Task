import React from "react";
import cat from "../img/myoctocat.png";
import avocado from "../img/Icon/avocado.svg"
import money from "../img/Icon/money.svg"
import flame from "../img/Icon/flame.svg"
import medicine from "../img/Icon/medicine.svg"
import cocktail from "../img/Icon/cocktail.png"
import violin from "../img/Icon/violin.svg"
import cookie from "../img/Icon/cookie.svg"
import dart from "../img/Icon/dart.png"
import Iphone from "../img/Iphone.png"
import baby_feeder from "../img/Icon/baby_feeder.svg"
import flower from "../img/Icon/flower.svg"

import "../comp/Categories.css";

const categoryDetails =[["Newest", flame], ["Promos", money],["Fruits",avocado], ["Herbs", medicine],["Beverages", cocktail],["Music", violin],["Bakery", cookie],["Toys", dart],["Electronics", Iphone],["Baby", baby_feeder], ["Plants",flower] ] ;


const category = (item) => {
  let text = item[0];
  let img_src= item[1];
  return (
    <div className="category" key={text}>
      <img src={img_src} alt={text + " image"} className="category__image" />
      <p className="category__text">{text}</p>
    </div>
  );
};

const Categories = () => {
  let categoryList = categoryDetails.map((item) => category(item));
  return (
    <div className="categories">
      <h2 className="section__title">Categories</h2>
      <div className="categories__list">{categoryList}</div>
    </div>
  );
};

export default Categories;

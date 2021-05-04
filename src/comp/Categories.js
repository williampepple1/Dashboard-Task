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

const categoryText = [
  "Newest",
  "Promos",
  "Fruits",
  "Herbs",
  "Beverages",
  "Music",
  "Bakery",
  "Toys",
  "Electronics",
  "Baby",
  "Plants",
];

const imageFile = [
  avocado,
  money,
  flame,
  medicine,
  cocktail,
  violin,
  cookie,
  dart,
  Iphone,
  baby_feeder,
  flower

]


const category = (text) => {
  
  return (
    <div className="category" key={text}>
      <img src={cat} alt={text + " image"} className="category__image" />
      <p className="category__text">{text}</p>
    </div>
  );
};

const Categories = () => {
  let categoryList = categoryText.map((item) => category(item));
  return (
    <div className="categories">
      <h2 className="section__title">Categories</h2>
      <div className="categories__list">{categoryList}</div>
    </div>
  );
};

export default Categories;

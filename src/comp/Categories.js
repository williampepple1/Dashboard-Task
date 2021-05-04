import React from "react";
import cat from "../img/myoctocat.png";
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

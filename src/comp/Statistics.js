import React from "react";
import "./Statistics.css";
import salesGraph from "../img/sales-graph.png";

const Statistics = () => {
  return (
    <div className="statistics">
      <h2 className="section__title">Sales Statistics</h2>
      <img src={salesGraph} alt="" className="statistics-img" />
    </div>
  );
};

export default Statistics;

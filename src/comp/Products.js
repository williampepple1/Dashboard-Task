import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <nav className="products-nav">
        <h2 className="section__title product-nav">All Products</h2>
        <h2 className="section__title product-nav">Ordered</h2>
        <h2 className="section__title product-nav">Returned</h2>
      </nav>
      <section className="product-list">
        <table className="product-table">
          <thead className="product-head">
            <tr>
              <th scope="column">Product's Name</th>
              <th scope="column">Variant</th>
              <th scope="column">Stock</th>
              <th scope="column">Price</th>
              <th scope="column">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sony 1000Xm3</td>
              <td>Black</td>
              <td>1,300 Items</td>
              <td>$800</td>
              <td>Cancelled</td>
            </tr>
            <tr>
              <td>IPhone 11 Pro</td>
              <td>Grey</td>
              <td>2,484 Items</td>
              <td>$1200</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Redmi Note 9 Pro</td>
              <td>Blue</td>
              <td>1,240 Items</td>
              <td>$300</td>
              <td>Cancelled</td>
            </tr>
            <tr>
              <td>Jbl T110</td>
              <td>White</td>
              <td>2,340 Items</td>
              <td>$100</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Products;

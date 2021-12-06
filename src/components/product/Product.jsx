import React from "react";

import "./product.css";
import { products } from "../../data";

const Product = ({ img, link, id }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="my project" className="p-img" />
      </a>
    </div>
  );
};

export default Product;

import React from "react";

import "./productList.css";
import { products } from "../../data";
import Product from "../product/Product";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It's James</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          provident harum quidem quos accusamus temporibus atque.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

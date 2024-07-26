import React from "react";
import { AllProduct } from "../../data2/data";
import Cards from "./Card/Cards";
import "./product.scss";

export default function Products() {
  return (
    <div className="products">
      <h1 className="products-header">لیست محصولات</h1>
      <div className="products-grid">
        {AllProduct.map((product) => (
          <Cards image={product.image} name={product.name} key={product.id}  price={product.price}/>
        ))}
      </div>
    </div>
  );
}

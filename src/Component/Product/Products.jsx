import React from "react";
import { AllProduct } from "../../data2/data";
import Cards from "./Card/Cards";
import "./product.scss";
import { useSelector } from "react-redux";

export default function Products() {
  const searchInput= useSelector((state)=>state.share.searchInput);
  
  
  return (
    <div className="products">
      
      <h1 className="products-header">لیست محصولات</h1>
      <div className="products-grid">
        {AllProduct.filter(item=>{
          return  item.name && item.name.includes(searchInput)
        }).map((product) => (
          <Cards image={product.image} name={product.name} id={product.id} key={product.id}  price={product.price}/>
        ))}
      </div>
    </div>
  );
}

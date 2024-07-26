import React from "react";
import { AllProduct } from "../../data2/data";
import Cards from "../Product/Card/Cards";
import "./women.scss";
import Footer from "../Footer/Footer";


export default function Women() {
  const newArray = AllProduct.filter((item) => item.tag === "women");

  return (
    <div className="womens">
      <h1 className="womens-header">لباس زنانه</h1>
      <div className="women-grid">
        {
            newArray.map(item=><Cards  image={item.image} name={item.name} key={item.id}  price={item.price} />)
        }
        </div>
        <Footer />
    </div>
  );
}

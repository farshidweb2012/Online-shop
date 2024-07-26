import React from "react";
import "./men.scss";
import { AllProduct } from "../../data2/data";
import Cards from "../Product/Card/Cards";
import Footer from "../Footer/Footer";


const newarray=AllProduct.filter(item=>item.tag ===  "man");

export default function Mens() {
  
  return (
    <div className="mens">
        <h1 className="mens-header">لباس مردانه </h1>
        <div className="mens-grid">
             {newarray.map(item=><Cards  image={item.image} name={item.name} key={item.id}  price={item.price} />)}  
        </div>
        <Footer />
    </div>
  );
}

import React from "react";
import "./newbrand.scss";
import image1 from "../../data2/junko-nakase-Q-72wa9-7Dg-unsplash.jpg";
import image2 from "../../data2/mnz-ToLMORRb97Q-unsplash.jpg";
import image3 from "../../data2/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg";

export default function NewBrand() {
  return (
    <div className="sectionA">
      <h1 className="sectionA-header">جدیدترین محصولات</h1>
      <div className="list">
        <div className="image-list">
          <div className="image-list-container">
            <img className="image" src={image1} alt="womendress" />
          </div>
          <div  className="image-list-container">
            <img className="image" src={image2} alt="womendress" />
          </div>
          <div  className="image-list-container">
            <img className="image" src={image3} alt="womendress" />
          </div>
        </div>
      </div>
    </div>
  );
}

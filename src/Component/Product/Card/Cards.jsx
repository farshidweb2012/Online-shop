import React from 'react'
import "./Cards.scss";

export default function Cards(props) {
  const {image,name,price} =props;
  return (
    <div className='cards'>
       <img className='cards-image' style={{width:"100%",height:"70%"}} src={image} alt={name}   />
       <div className='cards-caption'><h3 className='cards-name'>{name}</h3><span className='cards-price'>{price}تومان</span></div>
       <button onClick={()=>alert("Add to listShop ")} className='cards-btn'>خرید</button>
    </div>
  )
}

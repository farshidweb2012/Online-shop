import React from "react";
import "./shop.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux-tolkit/slice/cartSlice";

export default function Shop() {
  const cartList = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();


  return (
    <div className="shop">
      <h1 className="shop-header">لیست خرید</h1>
      <div className="shop-list">
        {cartList.map((item, index) => (
          <div key={index} className="shop-list-index">
            <p>{index + 1}</p>
            <p>{item.name}</p>
            <p>{item.quantity}x</p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                  })
                )
              }
              className="cart-btn"
            >
              +
            </button>
            <button onClick={()=>dispatch(removeFromCart(item.id))} className="cart-btn">
              -
            </button>
          </div>
        ))}
      </div>
      <button className="btn-finish">خرید نهایی</button>
    </div>
  );
}

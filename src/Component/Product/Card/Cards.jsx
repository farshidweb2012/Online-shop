
import "./Cards.scss";
import { addToCart } from '../../../Redux-tolkit/slice/cartSlice';
import { useDispatch } from 'react-redux';

export default function Cards(props) {
  const {id,image,name,price} =props;
 const dispatch= useDispatch();
 
const handleClick=()=>{
  dispatch(addToCart({
    id,
    name,
    price
  }))
}
 
  return (
    <div className='cards'>
       <img className='cards-image' style={{width:"100%",height:"70%"}} src={image} alt={name}   />
       <div className='cards-caption'><h3 className='cards-name'>{name}</h3><span className='cards-price'>{price}تومان</span></div>
       <button onClick={handleClick} className='cards-btn'>خرید</button>
    </div>
  )
}

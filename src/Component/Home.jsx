import React from 'react'
import "./home.scss";
import Showcase from './Showcase/Showcase';
import NewBrand from './MainSection/NewBrand';
import Products from './Product/Products';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <div className='home'> 
            <Showcase />
            <NewBrand />
            <Products />
            <Footer />
        </div>
    )
}

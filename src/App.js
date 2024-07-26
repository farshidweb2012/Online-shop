
import "./App.scss";
import Mens from "./Component/mens/Mens";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

import Women from "./Component/women/Women";
import Shop from "./Component/Shop/Shop";
import Loign from "./Component/Login/Loign";
import MYNavbar from "./Component/Nav/MYNavbar";

export default function App() {


  return (
    <div>
      <MYNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Home />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Loign />} />
      </Routes>
    </div>
  );
}

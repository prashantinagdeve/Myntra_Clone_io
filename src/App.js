import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Genrallbaneer from "./Components/Genralbaneer";
import Header from "./Components/Header";
import MenProducts from "./Components/Pages/MenProducts";
import Login from "./Components/Pages/Login";
import Foteer from "./Components/Pages/Foteer";
import ProductDetail from "./Components/Menproduct/ProductDetail";
import { CartProvider } from "react-use-cart";
import Cart from "./Components/Pages/Cart";
import Women from "./Components/Pages/Women";
import WomenDeatail from "./Components/Womenproduct/WomenDeatail";


function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Genrallbaneer />} />
            <Route path="/men" element={<MenProducts />} />
            <Route path="/show" element={<Women/>} />
            <Route path="/womendetail/:id" element={<WomenDeatail/>} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Header/NavBar/CartContext";
import Header from './Components/Header/Header'
import Navbar from './Components/Header/NavBar/Navbar'
import Perfil from "./Components/Header/NavBar/Perfil";
import Footer from "./Components/FooTer/Footer";
import MultiCardCarousel from "./Components/Header/NavBar/MultiCardCarousel";
import './style.global.css'


function App() {


  return (
    <>
    
    <div>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Header />} />

      <Route path="Perfil" element={<Perfil />} />
    </Routes>
    </CartProvider>
    </div>
    
    </>
  )
}

export default App

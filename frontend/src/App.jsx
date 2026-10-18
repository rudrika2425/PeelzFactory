// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home';
import Founders from './Components/Founders';
import Products from './Components/Products';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Collaborations from './Components/Collaborations';
import Footer from "./Components/Shared/Footer";
import Media from "./Components/Media";
import Recognition from "./Components/Recognition";
import Gallery from "./Components/Gallery";
import Lightbox from "./Components/Shared/Lightbox";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleImageClick = (event) => {
      const image = event.target.closest("img");
      if (!image || event.target.closest('[role="dialog"]') || image.closest("nav, footer, a, button")) return;
      setSelectedImage(image.currentSrc || image.src);
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/recognition" element={<Recognition/>}/>
        <Route path="/our-initiatives" element={<Gallery/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
      <Lightbox image={selectedImage} alt="Image preview" onClose={() => setSelectedImage(null)} />
    </Router>
  );
}

export default App;

// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home';
import Founders from './Components/Founders';
import Products from './Components/Products';
import Collaborations from './Components/Collaborations';
import Footer from "./Components/Shared/Footer";
import Media from "./Components/Media";
import Recognition from "./Components/Recognition";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/collaborations" element={<Collaborations/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/recognition" element={<Recognition/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

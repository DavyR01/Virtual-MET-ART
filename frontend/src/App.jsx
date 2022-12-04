import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Highlights from "./pages/Highlights";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";
import "./styles/Gallery.css";
import "./styles/Home.css";
import "./styles/Modal.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="about" element={<About />} />
        {/* only match this when no other routes match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

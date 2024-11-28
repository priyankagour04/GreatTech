import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarServices from "./components/Navbar/NavbarServices";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CommanService from "./pages/Services/CommanService";
import Aboutus from "./components/AboutUs/Aboutus";
import Testimonials from "./components/Testimonials/Testimonial";
import Blogs from "./components/Blogs/Blogs";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <NavbarServices />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<CommanService />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

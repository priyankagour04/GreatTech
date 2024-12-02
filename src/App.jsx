import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarServices from "./components/Navbar/NavbarServices";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CommanService from "./pages/Services/CommanService";
import Aboutus from "./components/AboutUs/Aboutus";
import Testimonials from "./components/Testimonials/Testimonial";

import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/OurTeam/Team";

function App() {
  return (
    <Router>
      <NavbarServices />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ServiceCard from "./components/Cards/ServiceCard";
import CommanService from "./pages/Services/CommanService";
import CountCard from "./components/Cards/CountCard";
import Offering from "./components/Offering/Offering";
import DevProcess from "./components/Development/DevProcess";
import Blogs from "./pages/Blogs/Blogs";
import Testimonials from "./components/Testimonials/Testimonial";
import Aboutus from "./components/AboutUs/Aboutus";
import NavbarServices from "./components/Navbar/NavbarServices";

function App() {
  return (
    <>
      <NavbarServices />
      <Home />
      <CommanService />
      <Aboutus />
      <Offering />
      {/* <CountCard /> */}
      <DevProcess />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;

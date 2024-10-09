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

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <CommanService />

      <Offering />
      <CountCard />
      <DevProcess/>
      <Testimonials/>
      <Blogs/>
      <Footer />
    </>
  );
}

export default App;

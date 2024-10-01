import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ServiceCard from "./components/Cards/ServiceCard";
import CommanService from "./pages/Services/CommanService";
import CountCard from "./components/Cards/CountCard";
import Offering from "./components/Offering/Offering";
import DevProcess from "./components/Development/DevProcess";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <CommanService />

      <Offering />
      <CountCard />
      <DevProcess/>
      <Footer />
    </>
  );
}

export default App;

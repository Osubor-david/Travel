import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Adventure from "./Components/Adventure";
import  Gallary  from "./Components/Gallary";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
// import { Features } from "@headlessui/react/dist/utils/render";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Adventure/>
       <Gallary/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;

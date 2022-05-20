import React from "react";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Porfolio/Portfolio";
import Resume from "./Component/Resume/Resume";
import Testionial from "./Component/Testimonial/Testionial";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer"
import "./App.css";


const App=()=> {
  return (
    <>
  <Header />
  <Home/>
  <Features/>
  <Portfolio/>
  <Resume/>
  <Testionial/>
  <Blog/>
  <Contact />
  <Footer />
  </>
  )
}

export default App;
